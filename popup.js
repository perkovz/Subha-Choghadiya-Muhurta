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
  const nightSeq = [...daySeq.slice(5), ...daySeq.slice(0, 5)];

  const auspicious = new Set(['Amrit', 'Shubh', 'Labh', 'Chal']);

  // Inauspicious slots (0-based)
  const rahuSlots     = [7, 1, 6, 4, 5, 3, 2]; // Your custom
  const kaalVelaSlots = [0, 0, 0, 0, 0, 0, 0];
  const vaarVelaSlots = [5, 5, 5, 5, 5, 5, 5];

  const rahuIndex     = rahuSlots[weekday];
  const kaalVelaIndex = kaalVelaSlots[weekday];
  const vaarVelaIndex = vaarVelaSlots[weekday];

  // Cities
  const cities = {
    cleveland:     { lat: 41.5055, lng: -81.6813, name: 'Cleveland, Ohio, USA',     ianaTimezone: 'America/New_York' },
    fairviewpark:  { lat: 41.4414, lng: -81.8643, name: 'Fairview Park, Ohio, USA', ianaTimezone: 'America/New_York' },
    solon:         { lat: 41.3873, lng: -81.4387, name: 'Solon, Ohio, USA',         ianaTimezone: 'America/New_York' },
    sanfrancisco:  { lat: 37.7740, lng: -122.4313, name: 'San Francisco, CA, USA', ianaTimezone: 'America/Los_Angeles' },
    chicago:       { lat: 41.8818, lng: -87.6232, name: 'Chicago, IL, USA',         ianaTimezone: 'America/Chicago' },
    ottawa:        { lat: 45.4247, lng: -75.6950, name: 'Ottawa, Canada',           ianaTimezone: 'America/Toronto' },
    vancouver:     { lat: 49.2463, lng: -123.1162, name: 'Vancouver, Canada',       ianaTimezone: 'America/Vancouver' },
    osijek:        { lat: 45.5511, lng: 18.6939, name: 'Osijek, Croatia',           ianaTimezone: 'Europe/Zagreb' },
    zagreb:        { lat: 45.8154, lng: 15.9666, name: 'Zagreb, Croatia',           ianaTimezone: 'Europe/Zagreb' },
    bengaluru:     { lat: 12.9716, lng: 77.5946, name: 'Bengaluru, India',          ianaTimezone: 'Asia/Kolkata' },
    hyderabad:     { lat: 17.3871, lng: 78.4917, name: 'Hyderabad, India',          ianaTimezone: 'Asia/Kolkata' }
  };

  // Load saved city
  let selectedCity = 'cleveland';
  try {
    const result = await chrome.storage.local.get('selectedCity');
    if (result.selectedCity && cities[result.selectedCity]) {
      selectedCity = result.selectedCity;
    }
  } catch (e) {
    console.warn('Storage error, using default');
  }

  document.getElementById('city-select').value = selectedCity;

  document.getElementById('city-select').addEventListener('change', async (e) => {
    selectedCity = e.target.value;
    await chrome.storage.local.set({ selectedCity });
    location.reload();
  });

  const { lat, lng, name: cityName, ianaTimezone } = cities[selectedCity];

  // Current time in city's timezone
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
  console.log(`Current time in ${cityName} (${ianaTimezone}): ${nowInCity.toLocaleString('en-US', { timeZone: ianaTimezone })}`);

  // Sunrise/sunset (UTC)
  let sunriseUTC, sunsetUTC;
  try {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${dateStr}&formatted=0`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'OK') {
      sunriseUTC = new Date(data.results.sunrise);
      sunsetUTC  = new Date(data.results.sunset);

      console.log("API sunrise UTC:", sunriseUTC.toUTCString());
      console.log("API sunset UTC:", sunsetUTC.toUTCString());
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

  console.log("Day duration ms:", dayDurationMs, "per slot:", dayMs);
  console.log("Night duration ms:", nightDurationMs, "per slot:", nightMs);

  const intDayMs   = Math.round(dayMs);
  const intNightMs = Math.round(nightMs);

  // Abhijit (UTC ms)
  const middayMs = sunriseTime + (sunsetTime - sunriseTime) / 2;
  const abhijitStart = new Date(middayMs - 24 * 60 * 1000);
  const abhijitEnd   = new Date(middayMs + 24 * 60 * 1000);

  // Build content
  let contentHtml = `<p><strong>${today.toLocaleDateString('en-US', { timeZone: ianaTimezone })}</strong> - ${cityName}</p>`;

  // Current time in city
  contentHtml += `<p style="font-size: 12px; text-align: center; color: #555;">
    Current time in ${cityName}: ${nowInCity.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })}
  </p>`;

  // Abhijit
  contentHtml += `
    <div style="background-color: #e6ffe6; padding: 10px; border-radius: 6px; margin: 10px 0; text-align: center; border: 1px solid #b3ffb3;">
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
      warningIndices = [0, 7];
    }

    const nowMs = nowMsInCity;

    seq.forEach((type, index) => {
      const s = new Date(cur);
      const e = new Date(cur + duration);

      const isActive = (nowMs >= cur - 5000) && (nowMs < cur + duration + 5000);

      if (title.includes('Nighttime')) {
        console.log(`${title} slot ${index}: ${s.toLocaleTimeString('en-US', { timeZone: ianaTimezone })} to ${e.toLocaleTimeString('en-US', { timeZone: ianaTimezone })} | isActive: ${isActive}`);
      }

      const cls = auspicious.has(type) ? 'good' : 'bad';

      let typeDisplay = type;
      if (warningIndices.includes(index)) {
        typeDisplay = '⚠️ ' + type;
      }

      const activeIcon = isActive ? ' ⏳' : '';

      let rowClass = cls;
      if (isActive) rowClass += ' active-now';

      html += `<tr class="${rowClass}">
        <td>${typeDisplay}</td>
        <td style="position: relative;">
          ${s.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })} to 
          ${e.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })}
          <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 1.2em; color: #666;">${activeIcon}</span>
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

  contentHtml += `<h3>Rahu Kaal (Avoid)</h3>
    <p class="rahu">${rahuStart.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })} to 
    ${rahuEnd.toLocaleTimeString('en-US', { timeZone: ianaTimezone, hour: 'numeric', minute: '2-digit', hour12: true })}</p>`;

  document.getElementById('content').innerHTML = contentHtml;
});