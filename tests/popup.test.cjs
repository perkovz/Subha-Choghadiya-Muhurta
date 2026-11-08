const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../popup.js'), 'utf8');

// Lightweight DOM/storage/clock doubles execute the actual popup, no dependencies.
class Element {
  constructor() {
    this.events = {};
    this.children = [];
    this.attributes = {};
    this.value = '';
    this.disabled = false;
    this.animations = 0;
  }
  set innerHTML(value) { this.html = value; this.children = []; }
  get innerHTML() { return this.html || ''; }
  addEventListener(type, callback) { this.events[type] = callback; }
  setAttribute(name, value) { this.attributes[name] = value; }
  appendChild(child) { this.children.push(child); }
  contains(target) { return target === this || this.children.includes(target); }
  animate() { this.animations++; return { cancel() {} }; }
  click() { if (!this.disabled) (this.events.click || this.onclick)?.(); }
}

// Test-only local-time conversion, so fixtures include real IANA DST offsets.
function localInstant(date, hour, timezone, minute = 0) {
  const target = Date.parse(`${date}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00Z`);
  let result = target;
  for (let i = 0; i < 3; i++) {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
    }).formatToParts(result);
    const p = type => parts.find(x => x.type === type).value;
    const local = Date.parse(`${p('year')}-${p('month')}-${p('day')}T${p('hour')}:${p('minute')}:${p('second')}Z`);
    result += target - local;
  }
  return result;
}
function solarResponse(url) {
  const date = url.searchParams.get('date');
  const tz = url.searchParams.get('tzid');
  // Vary the sunrise by date: a sunrise+24h implementation must fail the tests.
  const minute = Number(date.slice(-2)) % 20;
  return { ok: true, json: async () => ({ status: 'OK', results: {
    sunrise: new Date(localInstant(date, 7, tz, minute)).toISOString(),
    sunset: new Date(localInstant(date, 18, tz)).toISOString()
  } }) };
}
const settle = async () => { for (let i = 0; i < 12; i++) await new Promise(resolve => setImmediate(resolve)); };
function harness({ now = '2026-11-08T10:00:00Z', saved = {}, fetcher = solarResponse, reducedMotion = false } = {}) {
  const nodes = Object.fromEntries(['city-search', 'search-results', 'content', 'prev-day', 'today', 'next-day'].map(id => [id, new Element()]));
  const events = {};
  const intervals = [];
  const requests = [];
  let nowMs = Date.parse(now);
  class Clock extends Date { static now() { return nowMs; } }
  const document = {
    hidden: false,
    getElementById: id => nodes[id], createElement: () => new Element(),
    addEventListener: (name, callback) => { events[name] = callback; }
  };
  const context = vm.createContext({
    Date: Clock, Intl, console, document,
    window: { matchMedia: () => ({ matches: reducedMotion }) },
    chrome: { storage: { local: { get: (_, cb) => cb(saved), set() {} } } },
    fetch: url => { const parsed = new URL(url); requests.push(parsed); return Promise.resolve(fetcher(parsed)); },
    setInterval: (callback, delay) => { intervals.push({ callback, delay }); }
  });
  vm.runInContext(source, context);
  events.DOMContentLoaded();
  return {
    nodes, requests, context,
    html: () => nodes.content.innerHTML,
    clock: value => { nowMs = Date.parse(value); },
    tick: () => intervals[0].callback(),
    visible: () => events.visibilitychange(),
    selectCity(query) {
      nodes['city-search'].value = query;
      nodes['city-search'].events.input();
      assert.ok(nodes['search-results'].children[0]?.children[0], `City match for ${query}`);
      nodes['search-results'].children[0].children[0].click();
    }
  };
}
function activeCount(html) { return (html.match(/class="(?:good|bad) active-now"/g) || []).length; }
function lastNightEnd(html) {
  return [...html.matchAll(/active-period-time">[^<]* – ([^<]*)<\/span>/g)].at(-1)?.[1];
}

test('calendar helpers follow city date, not host, and cross month/year/leap day safely', async () => {
  const app = harness(); await settle();
  const run = code => vm.runInContext(code, app.context);
  assert.equal(run("cityDate(Date.parse('2026-11-08T10:30:00Z'), 'Pacific/Kiritimati')"), '2026-11-09');
  assert.equal(run("cityDate(Date.parse('2026-11-08T01:00:00Z'), 'America/Los_Angeles')"), '2026-11-07');
  assert.equal(run("shiftDate('2026-12-31', 1)"), '2027-01-01');
  assert.equal(run("shiftDate('2024-03-01', -1)"), '2024-02-29');
  assert.equal(run("shiftDate('2026-03-08', 1)"), '2026-03-09');
  assert.equal(run("dateSelection(Date.now(), 'America/New_York', 90).offset"), 1);
  assert.equal(run("dateSelection(Date.now(), 'America/New_York', -90).offset"), -1);
});

test('Today default, directional navigation bounded to three dates, Today resets, cache reused', async () => {
  const app = harness(); await settle();
  assert.match(app.html(), /Sunday, Nov 8, 2026 \(Today\)/);
  assert.equal(app.requests.length, 2);
  app.nodes['prev-day'].click(); await settle();
  assert.match(app.html(), /Saturday, Nov 7, 2026 \(Yesterday\)/);
  assert.equal(app.nodes['prev-day'].disabled, true);
  const requests = app.requests.length;
  app.nodes['prev-day'].click(); await settle();
  assert.equal(app.requests.length, requests);
  app.nodes['next-day'].click(); await settle();
  assert.match(app.html(), /Nov 8, 2026 \(Today\)/);
  app.nodes['next-day'].click(); await settle();
  assert.match(app.html(), /Monday, Nov 9, 2026 \(Tomorrow\)/);
  assert.equal(app.nodes['next-day'].disabled, true);
  assert.equal(app.nodes['prev-day'].disabled, false);
  app.nodes.today.click(); await settle();
  assert.match(app.html(), /Nov 8, 2026 \(Today\)/);
  assert.equal(app.nodes['prev-day'].disabled, false);
  assert.equal(app.nodes['next-day'].disabled, false);
  assert.equal(app.nodes.today.attributes['aria-pressed'], 'true');
  assert.equal(app.requests.length, 4, 'Only yesterday through day after tomorrow solar data needed');
});

test('before sunrise: yesterday night highlights real now, today/future have no bogus active row', async () => {
  const app = harness(); await settle();
  assert.equal(activeCount(app.html()), 0);
  app.nodes['prev-day'].click(); await settle();
  assert.equal(activeCount(app.html()), 1);
  assert.equal(activeCount(app.html().split('Night Choghadiya')[1]), 1);
  assert.equal(lastNightEnd(app.html()), '7:08 AM', 'Night ends at actual next-date sunrise, not 7:07');
  app.nodes['next-day'].click(); app.nodes['next-day'].click(); await settle();
  assert.equal(activeCount(app.html()), 0);
});

test('all derived values/sequences update on selected date, including Abhijit and Rahu', async () => {
  const app = harness({ now: '2026-11-08T17:00:00Z' }); await settle();
  const today = app.html();
  assert.equal(activeCount(today), 1);
  const cards = html => html.split('<div class="tables-container">')[0];
  app.nodes['next-day'].click(); await settle();
  assert.notEqual(cards(today), cards(app.html()));
  assert.match(today.split('Day Choghadiya')[1], /<td>Udveg<\/td>/);
  assert.match(app.html().split('Day Choghadiya')[1], /<td>Amrit<\/td>/);
  assert.equal(lastNightEnd(app.html()), '7:10 AM');
});

test('exact adjacent boundaries cover each millisecond once and stop at next sunrise', async () => {
  const app = harness(); await settle();
  const boundaries = Array.from(vm.runInContext('periodBoundaries(0, 101)', app.context));
  assert.equal(boundaries[0], 0); assert.equal(boundaries[8], 101);
  for (let now = 0; now < 101; now++) {
    assert.equal(boundaries.slice(0, 8).filter((start, i) => now >= start && now < boundaries[i + 1]).length, 1);
  }
  app.nodes['prev-day'].click(); await settle();
  app.clock('2026-11-08T12:08:00Z'); app.tick(); await settle();
  assert.equal(activeCount(app.html()), 0, 'Yesterday stops exactly at today sunrise');
  app.nodes.today.click(); await settle();
  assert.equal(activeCount(app.html()), 1);
});

test('DST spring/fall nights use next local sunrise and calendar dates, not 24-hour shifts', async () => {
  for (const [date, next, expectedHours] of [['2026-03-07', '2026-03-08', 12], ['2026-10-31', '2026-11-01', 14]]) {
    const app = harness({ now: new Date(localInstant(next, 5, 'America/New_York')).toISOString() });
    await settle(); app.nodes['prev-day'].click(); await settle();
    assert.match(app.html(), /Yesterday/);
    assert.equal(activeCount(app.html()), 1);
    const sunrise = localInstant(next, 7, 'America/New_York', Number(next.slice(-2)) % 20);
    const sunset = localInstant(date, 18, 'America/New_York');
    assert.equal(Math.floor((sunrise - sunset) / 3600000), expectedHours);
    assert.equal(lastNightEnd(app.html()), `7:${next.slice(-2)} AM`);
    assert.ok(app.requests.some(url => url.searchParams.get('date') === date));
  }
});

test('city changes reset Today in city timezone, share animation, and preserve selected location', async () => {
  const app = harness({ now: '2026-11-08T23:30:00Z' }); await settle();
  app.nodes['prev-day'].click(); await settle();
  const animations = app.nodes.content.animations;
  app.selectCity('Tokyo'); await settle();
  assert.match(app.html(), /Monday, Nov 9, 2026 \(Today\), Tokyo/);
  assert.ok(app.nodes.content.animations > animations);
  assert.equal(app.nodes.today.attributes['aria-pressed'], 'true');
  assert.equal(app.nodes['prev-day'].disabled, false);
  assert.equal(app.requests.at(-1).searchParams.get('tzid'), 'Asia/Tokyo');
  app.nodes.today.click(); await settle();
  assert.match(app.html(), /Tokyo/);
});

test('city-local midnight refresh reanchors relative selection, updates bounds, clock and active row', async () => {
  const app = harness({ now: '2026-11-09T04:59:59Z' }); await settle();
  app.nodes['prev-day'].click(); await settle();
  assert.match(app.html(), /Nov 7, 2026 \(Yesterday\)/);
  app.clock('2026-11-09T05:00:01Z'); app.tick(); await settle();
  assert.match(app.html(), /Nov 8, 2026 \(Yesterday\)/);
  assert.match(app.html(), /Now: 12:00 AM/);
  assert.equal(activeCount(app.html()), 1);
  assert.equal(app.nodes['prev-day'].disabled, true);
  assert.equal(app.nodes['next-day'].disabled, false);
  const animations = app.nodes.content.animations;
  const requests = app.requests.length;
  app.clock('2026-11-09T05:01:01Z'); app.visible(); await settle();
  assert.match(app.html(), /Now: 12:01 AM/);
  assert.equal(app.nodes.content.animations, animations, 'Passive refresh does not replay navigation animation');
  assert.equal(app.requests.length, requests);
});

test('stale async navigation and city responses cannot overwrite newest results', async () => {
  const pending = [];
  const app = harness({ fetcher: url => new Promise(resolve => pending.push({ url, resolve })) });
  app.nodes['next-day'].click();
  app.selectCity('Tokyo');
  const tokyo = pending.filter(p => p.url.searchParams.get('tzid') === 'Asia/Tokyo');
  for (const p of tokyo) p.resolve(solarResponse(p.url));
  await settle();
  assert.match(app.html(), /Tokyo/);
  const newest = app.html();
  for (const p of pending.filter(p => !tokyo.includes(p))) p.resolve(solarResponse(p.url));
  await settle();
  assert.equal(app.html(), newest);
  assert.equal(app.nodes.content.attributes['aria-busy'], 'false');
});

test('request crossing city midnight rerenders against the new date before displaying', async () => {
  const pending = [];
  let hold = true;
  const app = harness({ now: '2026-11-09T04:59:59Z', fetcher: url => hold ? new Promise(resolve => pending.push({ url, resolve })) : solarResponse(url) });
  app.clock('2026-11-09T05:00:01Z'); hold = false;
  for (const p of pending) p.resolve(solarResponse(p.url));
  await settle();
  assert.match(app.html(), /Monday, Nov 9, 2026 \(Today\)/);
  assert.doesNotMatch(app.html(), /Nov 8, 2026/);
});

test('bad data/network failure never fabricates times, Today retries, reduced motion honored', async () => {
  let fail = true;
  const app = harness({ reducedMotion: true, fetcher: url => fail ? { ok: false } : solarResponse(url) });
  await settle();
  assert.match(app.html(), /data unavailable/);
  assert.doesNotMatch(app.html(), /active-period-time/);
  fail = false; app.nodes.today.click(); await settle();
  assert.match(app.html(), /Day Choghadiya/);
  assert.equal(app.nodes.content.animations, 0);
  assert.equal(app.requests.length, 4);
});

test('invalid/polar/epoch/incorrect-calendar-date solar data is rejected', async () => {
  for (const results of [
    { sunrise: null, sunset: null },
    { sunrise: '1970-01-01T00:00:01Z', sunset: '1970-01-01T00:00:02Z' },
    { sunrise: 'invalid', sunset: 'invalid' },
    { sunrise: '2026-11-08T20:00:00Z', sunset: '2026-11-08T12:00:00Z' }
  ]) {
    const app = harness({ fetcher: () => ({ ok: true, json: async () => ({ status: 'OK', results }) }) });
    await settle(); assert.match(app.html(), /data unavailable/);
  }
});

test('saved zero-coordinate city is restored and manifest allows the actual API only', async () => {
  const app = harness({ saved: { savedLat: 0, savedLng: 0, savedCityName: 'Equator', savedTimezone: 'UTC' } });
  await settle();
  assert.match(app.html(), /Equator/);
  assert.equal(app.requests[0].searchParams.get('lat'), '0');
  const manifest = JSON.parse(fs.readFileSync(require('node:path').join(__dirname, '../manifest.json')));
  assert.equal(manifest.version, '1.1');
  assert.deepEqual(manifest.host_permissions, ['https://api.sunrise-sunset.org/*']);
});

test('rapid day-only navigation resolves newest selection even when old responses fail last', async () => {
  const pending = [];
  const app = harness({ fetcher: url => new Promise((resolve, reject) => pending.push({ url, resolve, reject })) });
  app.nodes['prev-day'].click();
  app.nodes['next-day'].click();
  app.nodes['next-day'].click();
  for (const p of pending.filter(p => ['2026-11-09', '2026-11-10'].includes(p.url.searchParams.get('date')))) {
    p.resolve(solarResponse(p.url));
  }
  await settle();
  assert.match(app.html(), /Nov 9, 2026 \(Tomorrow\)/);
  const html = app.html();
  for (const p of pending.filter(p => ['2026-11-07', '2026-11-08'].includes(p.url.searchParams.get('date')))) {
    p.reject(new Error('Old request failed'));
  }
  await settle();
  assert.equal(app.html(), html);
  assert.equal(app.nodes['next-day'].disabled, true);
  assert.equal(app.nodes.content.attributes['aria-busy'], 'false');
});

test('missing next-day sunrise fails the whole calculation instead of approximating the night', async () => {
  const app = harness({ fetcher: url => url.searchParams.get('date') === '2026-11-09'
    ? { ok: true, json: async () => ({ status: 'OK', results: { sunrise: null, sunset: null } }) }
    : solarResponse(url) });
  await settle();
  assert.match(app.html(), /data unavailable/);
  assert.doesNotMatch(app.html(), /Night Choghadiya/);
});
