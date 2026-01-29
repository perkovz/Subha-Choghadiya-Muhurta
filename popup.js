document.addEventListener('DOMContentLoaded', async () => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const weekday = today.getDay();

  const daySequences = [
    ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'],
    ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit'],
    ['Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'],
    ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh'],
    ['Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh'],
    ['Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal'],
    ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal']
  ];

  const daySeq = daySequences[weekday];

  const nightCycle = ['Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal'];
  const nightStartIndices = [2, 4, 6, 1, 3, 5, 0];
  const nightSeq = Array.from({length: 8}, (_, i) => nightCycle[(nightStartIndices[weekday] + i) % 7]);

  const auspicious = new Set(['Amrit', 'Shubh', 'Labh', 'Chal']);

  const rahuSlots     = [7, 1, 6, 4, 5, 3, 2];
  const kaalVelaSlots = [4, 1, 5, 2, 6, 3, 0];
  const vaarVelaSlots = [3, 6, 1, 4, 7, 2, 5];

  const rahuIndex     = rahuSlots[weekday];
  const kaalVelaIndex = kaalVelaSlots[weekday];
  const vaarVelaIndex = vaarVelaSlots[weekday];

  let lat = 41.5055;
  let lng = -81.6813;
  let cityName = 'Cleveland, Ohio, USA';
  let ianaTimezone = 'America/New_York';

  try {
    const saved = await chrome.storage.local.get(['savedLat','savedLng','savedCityName','savedTimezone']);
    if (saved.savedLat && saved.savedLng) {
      lat = saved.savedLat;
      lng = saved.savedLng;
      cityName = saved.savedCityName || 'Your Location';
      ianaTimezone = saved.savedTimezone || 'America/New_York';
    }
  } catch {}

  if (lat === 41.5055 && lng === -81.6813) {
    if (navigator.geolocation) {
      document.getElementById('content').innerHTML = '<div class="loading">Detecting location…</div>';
      try {
        const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej, {
          enableHighAccuracy: false, timeout: 10000, maximumAge: 0
        }));
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;

        try {
          const geo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`).then(r => r.json());
          cityName = geo.city || geo.locality || geo.principalSubdivision || 'Your Location';

          if (geo.countryCode === 'IN') ianaTimezone = 'Asia/Kolkata';
          else if (geo.countryCode === 'HR') ianaTimezone = 'Europe/Zagreb';
          else if (geo.countryCode === 'US') {
            if (geo.principalSubdivision === 'California') ianaTimezone = 'America/Los_Angeles';
            else if (geo.principalSubdivision === 'Illinois') ianaTimezone = 'America/Chicago';
          }

          chrome.storage.local.set({savedLat: lat, savedLng: lng, savedCityName: cityName, savedTimezone: ianaTimezone});
        } catch {}
      } catch {
        document.getElementById('content').innerHTML += '<p class="error">Location denied — using Cleveland.</p>';
      }
    } else {
      document.getElementById('content').innerHTML += '<p class="error">Geolocation not supported — using Cleveland.</p>';
    }
  }

  const nowInCity = new Date(new Intl.DateTimeFormat('en-US', {
    timeZone: ianaTimezone,
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
  }).format(Date.now()));

  const nowMsInCity = nowInCity.getTime();

  let sunriseUTC, sunsetUTC;
  try {
    const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${dateStr}&formatted=0`);
    const data = await res.json();
    if (data.status === 'OK') {
      sunriseUTC = new Date(data.results.sunrise);
      sunsetUTC  = new Date(data.results.sunset);
    }
  } catch {
    sunriseUTC = new Date(today); sunriseUTC.setUTCHours(12, 30, 0);
    sunsetUTC  = new Date(today); sunsetUTC.setUTCHours(22, 30, 0);
  }

  const sunriseTime = sunriseUTC.getTime();
  const sunsetTime  = sunsetUTC.getTime();

  const dayDurationMs = sunsetTime - sunriseTime;
  const dayMsRaw = dayDurationMs / 8;
  const nightDurationMs = (sunriseTime + 86400000) - sunsetTime;
  const nightMsRaw = nightDurationMs / 8;

  const intDayMs   = Math.round(dayMsRaw);
  const intNightMs = Math.round(nightMsRaw);

  const dayStarts = new Array(8).fill(0).map((_, i) => sunriseTime + Math.round(dayMsRaw * i));
  const nightStarts = new Array(8).fill(0).map((_, i) => sunsetTime + Math.round(nightMsRaw * i));

  const middayMs = sunriseTime + (sunsetTime - sunriseTime) / 2;
  const abhijitStart = new Date(middayMs - 24 * 60 * 1000);
  const abhijitEnd   = new Date(middayMs + 24 * 60 * 1000);

  const rahuStartMs = sunriseTime + Math.round(dayMsRaw * rahuIndex);
  const rahuEndMs   = rahuStartMs + Math.round(dayMsRaw);
  const rahuStart   = new Date(rahuStartMs);
  const rahuEnd     = new Date(rahuEndMs);

  function makeTable(seq, starts, durationMs, title) {
    let html = `<h2>${title}</h2><table>`;
    const warningIndices = title.includes('Day')
      ? [rahuIndex, kaalVelaIndex, vaarVelaIndex]
      : seq.reduce((acc, t, i) => { if (t === 'Labh') acc.push(i); return acc; }, []);

    seq.forEach((type, idx) => {
      const startMs = starts[idx];
      const endMs   = startMs + durationMs;

      const isActive = nowMsInCity >= startMs && nowMsInCity < endMs;

      const cls = auspicious.has(type) ? 'good' : 'bad';
      const rowClass = isActive ? `${cls} active-now` : cls;

      let prefix = '';
      if (warningIndices.includes(idx)) {
        prefix = (title.includes('Day') && idx === rahuIndex) ? '👹 ' : '⚠️ ';
      }

      const icon = isActive ? '⏳ ' : '';

      html += `<tr class="${rowClass}">
        <td>${prefix}${type}</td>
        <td><span class="active-period-time">${new Date(startMs).toLocaleTimeString('en-US', {timeZone: ianaTimezone, hour:'numeric', minute:'2-digit', hour12:true})} – ${new Date(endMs).toLocaleTimeString('en-US', {timeZone: ianaTimezone, hour:'numeric', minute:'2-digit', hour12:true})}</span> <span class="active-period-icon">${icon}</span></td>
      </tr>`;
    });

    html += '</table>';
    return html;
  }

  const content = `
    <div class="mb-1">
      <span>${today.toLocaleDateString('en-US', {timeZone: ianaTimezone})}, ${cityName}, </span>
      <span>${nowInCity.toLocaleTimeString('en-US', {timeZone: ianaTimezone, hour:'numeric', minute:'2-digit', hour12:true})}</span>
    </div>

    <div class="flexbox">
      <div class="abhijit-box">
        Abhijit Muhurat (Auspicious)<br>
        ${abhijitStart.toLocaleTimeString('en-US', {timeZone: ianaTimezone, hour:'numeric', minute:'2-digit', hour12:true})} – 
        ${abhijitEnd.toLocaleTimeString('en-US', {timeZone: ianaTimezone, hour:'numeric', minute:'2-digit', hour12:true})}
      </div>

      <div class="rahu-box">
        👹 Rahu Kaal (Avoid)<br>
        ${rahuStart.toLocaleTimeString('en-US', {timeZone: ianaTimezone, hour:'numeric', minute:'2-digit', hour12:true})} – 
        ${rahuEnd.toLocaleTimeString('en-US', {timeZone: ianaTimezone, hour:'numeric', minute:'2-digit', hour12:true})}
      </div>
    </div>

    <div class="tables-container">
      <div class="table-wrapper">
        ${makeTable(daySeq, dayStarts, intDayMs, 'Day Choghadiya')}
      </div>
      <div class="table-wrapper">
        ${makeTable(nightSeq, nightStarts, intNightMs, 'Night Choghadiya')}
      </div>
    </div>
  `;

  document.getElementById('content').innerHTML = content;

  document.getElementById('reload-location')?.addEventListener('click', () => {
    chrome.storage.local.remove(['savedLat','savedLng','savedCityName','savedTimezone'], () => location.reload());
  });
});