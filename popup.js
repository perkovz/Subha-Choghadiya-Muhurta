document.addEventListener('DOMContentLoaded', async () => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const weekday = today.getDay();

  // Choghadiya daytime sequences (matching Drik Panchang)
  const daySequences = [
    ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'], // Sunday
    ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit'],   // Monday
    ['Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'],     // Tuesday
    ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh'],    // Wednesday
    ['Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh'],   // Thursday
    ['Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal'],    // Friday
    ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal']     // Saturday
  ];

  const daySeq = daySequences[weekday];

  // Nighttime cycle and start indices (updated to match Drik Panchang)
  const nightCycle = ['Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal'];
  const nightStartIndices = [2, 4, 6, 1, 3, 5, 0]; // Sun:2 (Shubh), Mon:4 (Chal), Tue:6 (Kaal), Wed:1 (Udveg), Thu:3 (Amrit), Fri:5 (Rog), Sat:0 (Labh)

  const startIndex = nightStartIndices[weekday];
  const nightSeq = [];
  for (let i = 0; i < 8; i++) {
    nightSeq.push(nightCycle[(startIndex + i) % 7]);
  }

  const auspicious = new Set(['Amrit', 'Shubh', 'Labh', 'Chal']);

  // Inauspicious slots (0-based)
  const rahuSlots     = [7, 1, 6, 4, 5, 3, 2];
  const kaalVelaSlots = [4, 1, 5, 2, 6, 3, 0];
  const vaarVelaSlots = [3, 6, 1, 4, 7, 2, 5];

  const rahuIndex     = rahuSlots[weekday];
  const kaalVelaIndex = kaalVelaSlots[weekday];
  const vaarVelaIndex = vaarVelaSlots[weekday];

  // Default fallback (Cleveland)
  let lat = 41.5055;
  let lng = -81.6813;
  let cityName = 'Cleveland, Ohio, USA';
  let ianaTimezone = 'America/New_York';

  // Try to load saved location
  try {
    const saved = await chrome.storage.local.get([
      'savedLat', 'savedLng', 'savedCityName', 'savedTimezone'
    ]);
    if (saved.savedLat && saved.savedLng) {
      lat          = saved.savedLat;
      lng          = saved.savedLng;
      cityName     = saved.savedCityName || 'Your Location';
      ianaTimezone = saved.savedTimezone || 'America/New_York';
      console.log(`Loaded saved location: ${cityName} (${lat}, ${lng})`);
    }
  } catch (err) {
    console.warn('Could not load saved location:', err);
  }

  // If no saved location → request geolocation once
  if (lat === 41.5055 && lng === -81.6813) {
    if (navigator.geolocation) {
      document.getElementById('content').innerHTML = '<div class="loading">Detecting location…</div>';
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 0
          });
        });

        lat = position.coords.latitude;
        lng = position.coords.longitude;

        // Reverse geocode with BigDataCloud
        try {
          const geoRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
          );
          const geoData = await geoRes.json();

          cityName = geoData.city ||
                     geoData.locality ||
                     geoData.principalSubdivision ||
                     'Your Location';

          if (geoData.countryCode === 'IN') ianaTimezone = 'Asia/Kolkata';
          else if (geoData.countryCode === 'HR') ianaTimezone = 'Europe/Zagreb';
          else if (geoData.countryCode === 'US' && geoData.principalSubdivision === 'California') ianaTimezone = 'America/Los_Angeles';
          else if (geoData.countryCode === 'US' && geoData.principalSubdivision === 'Illinois') ianaTimezone = 'America/Chicago';

          // Save it
          await chrome.storage.local.set({
            savedLat: lat,
            savedLng: lng,
            savedCityName: cityName,
            savedTimezone: ianaTimezone
          });
        } catch (geoErr) {
          console.warn('Reverse geocoding failed:', geoErr);
          cityName = 'Your Location';
        }
      } catch (geoErr) {
        console.warn('Geolocation denied or failed:', geoErr);
        document.getElementById('content').innerHTML += 
          '<p class="error">Location access denied — using default (Cleveland).</p>';
      }
    } else {
      document.getElementById('content').innerHTML += 
        '<p class="error">Geolocation not supported — using default (Cleveland).</p>';
    }
  }

  // Current time in detected/saved timezone
  const nowInCity = new Date(new Intl.DateTimeFormat('en-US', {
    timeZone: ianaTimezone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  }).format(Date.now()));

  const nowMsInCity = nowInCity.getTime();

  // Sunrise/sunset (UTC)
  let sunriseUTC, sunsetUTC;
  try {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${dateStr}&formatted=0`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'OK') {
      sunriseUTC = new Date(data.results.sunrise);
      sunsetUTC  = new Date(data.results.sunset);
    } else {
      throw new Error('API status not OK');
    }
  } catch (e) {
    console.warn('Sunrise API failed:', e);
    sunriseUTC = new Date(today); sunriseUTC.setUTCHours(12, 30, 0);
    sunsetUTC  = new Date(today); sunsetUTC.setUTCHours(22, 30, 0);
  }

  const sunriseTime = sunriseUTC.getTime();
  const sunsetTime  = sunsetUTC.getTime();

  const dayDurationMs = sunsetTime - sunriseTime;
  const dayMs = dayDurationMs / 8;

  const nextSunriseTime = sunriseTime + 86400000;
  const nightDurationMs = nextSunriseTime - sunsetTime;
  const nightMs = nightDurationMs / 8;

  const intDayMs   = Math.round(dayMs);
  const intNightMs = Math.round(nightMs);

  // Abhijit Muhurat
  const middayMs = sunriseTime + (sunsetTime - sunriseTime) / 2;
  const abhijitStart = new Date(middayMs - 24 * 60 * 1000);
  const abhijitEnd   = new Date(middayMs + 24 * 60 * 1000);

  // Build content
  let contentHtml = `
  <p><span>${today.toLocaleDateString('en-US', { timeZone: ianaTimezone })}</span>, 
  <span>${cityName}</span>,
  <span>${nowInCity.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })}</span>
  </p>`;

  contentHtml += `
    <div class="abhijit-box">
      <strong>Abhijit Muhurat (Auspicious)</strong><br>
      ${abhijitStart.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })} to 
      ${abhijitEnd.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })}
    </div>`;

  function makeTable(seq, startUTC, duration, title) {
    let html = `<h3>${title}</h3><table>`;
    let cur = startUTC.getTime();

    let warningIndices = [];
    if (title.includes('Daytime')) {
      warningIndices = [rahuIndex, kaalVelaIndex, vaarVelaIndex];
    } else if (title.includes('Nighttime')) {
      seq.forEach((type, index) => {
        if (type === 'Labh') warningIndices.push(index);
      });
    }

    const nowMs = nowMsInCity;

    seq.forEach((type, index) => {
      const s = new Date(cur);
      const e = new Date(cur + duration);

      const isActive = (nowMs >= cur - 5000) && (nowMs < cur + duration + 5000);

      const cls = auspicious.has(type) ? 'good' : 'bad';

      let prefix = '';
      if (warningIndices.includes(index)) {
        if (title.includes('Daytime') && index === rahuIndex) {
          prefix = '👹 ';
        } else {
          prefix = '⚠️ ';
        }
      }
      let typeDisplay = prefix + type;

      const activeIcon = isActive ? ' ⏳' : '';

      let rowClass = cls;
      if (isActive) rowClass += ' active-now';

      html += `<tr class="${rowClass}">
        <td>${typeDisplay}</td>
        <td style="position: relative;">
          ${s.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })} to 
          ${e.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })}
          <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); font-size: 1.3em; color: #f39c12;">${activeIcon}</span>
        </td>
      </tr>`;
      cur += duration;
    });

    html += '</table>';
    return html;
  }

  contentHtml += makeTable(daySeq, sunriseUTC, intDayMs, 'Daytime Choghadiya');
  contentHtml += makeTable(nightSeq, sunsetUTC, intNightMs, 'Nighttime Choghadiya');

  // Rahu Kaal
  const rahuStartMs = sunriseTime + (rahuIndex * dayMs);
  const rahuEndMs   = rahuStartMs + dayMs;
  const rahuStart   = new Date(rahuStartMs);
  const rahuEnd     = new Date(rahuEndMs);

  contentHtml += `<div class="rahu-box"><strong>👹 Rahu Kaal (Avoid)</strong><br>
    <span class="rahu">${rahuStart.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })} to 
    ${rahuEnd.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })}</span></div>`;

  document.getElementById('content').innerHTML = contentHtml;

  // Attach reload button listener
  const reloadBtn = document.getElementById('reload-location');
  if (reloadBtn) {
    reloadBtn.addEventListener('click', () => {
      console.log('Reload location button clicked — clearing saved location');
      chrome.storage.local.remove([
        'savedLat', 'savedLng', 'savedCityName', 'savedTimezone'
      ], () => {
        location.reload();
      });
    });
  } else {
    console.warn('Reload button not found in DOM');
  }
});