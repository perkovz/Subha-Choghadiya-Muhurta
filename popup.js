document.addEventListener('DOMContentLoaded', async () => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const weekday = today.getDay();

  // Choghadiya daytime sequences (matching Drik Panchang)
  const daySequences = [
    // Sunday (0)
    ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'],
    // Monday (1)
    ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit'],
    // Tuesday (2)
    ['Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'],
    // Wednesday (3)
    ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh'],
    // Thursday (4)
    ['Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh'],
    // Friday (5)
    ['Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal'],
    // Saturday (6)
    ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal']
  ];

  const daySeq = daySequences[weekday];
  // Night sequence: shift by 5 to better match Drik Panchang examples
  const nightSeq = [...daySeq.slice(5), ...daySeq.slice(0, 5)];

  const auspicious = new Set(['Amrit', 'Shubh', 'Labh', 'Chal']);

  // Inauspicious slots (0-based, Drik-inspired)
  const rahuSlots = [7, 1, 6, 4, 5, 3, 2]
  const kaalVelaSlots = [0, 0, 0, 0, 0, 0, 0]; // First slot (Kaal Vela)
  const vaarVelaSlots = [5, 5, 5, 5, 5, 5, 5]; // 6th slot (Vaar Vela)

  const rahuIndex = rahuSlots[weekday];
  const kaalVelaIndex = kaalVelaSlots[weekday];
  const vaarVelaIndex = vaarVelaSlots[weekday];

  // Cities with IANA timezone names
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

  // Load saved city (default Cleveland)
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

  // Sunrise/sunset
  let sunrise, sunset;
  try {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${dateStr}&formatted=0`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'OK') {
      const apiSunriseUTC = new Date(data.results.sunrise);
      const apiSunsetUTC = new Date(data.results.sunset);

      // Anchor to today's local midnight
      const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);

      // Dynamic timezone offset
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: ianaTimezone,
        timeZoneName: 'shortOffset'
      });
      const parts = formatter.formatToParts(todayMidnight);
      const offsetPart = parts.find(p => p.type === 'timeZoneName')?.value || 'GMT-5';
      const offsetSign = offsetPart.includes('-') ? -1 : 1;
      const offsetHoursStr = offsetPart.replace(/GMT|UTC|[+-]/g, '');
      let tzOffsetHours = offsetSign * parseFloat(offsetHoursStr);

      // Handle half-hour zones (India, etc.)
      if (offsetPart.includes('5:30')) tzOffsetHours = 5.5;
      if (offsetPart.includes('4:30')) tzOffsetHours = 4.5;

      console.log(`Timezone offset for ${ianaTimezone} on ${dateStr}: ${tzOffsetHours} hours`);

      // Apply offset to get local time-of-day
      const localSunriseHour = apiSunriseUTC.getUTCHours() + tzOffsetHours;
      const localSunsetHour = apiSunsetUTC.getUTCHours() + tzOffsetHours;

      sunrise = new Date(todayMidnight);
      sunrise.setHours(localSunriseHour, apiSunriseUTC.getUTCMinutes(), apiSunriseUTC.getUTCSeconds(), apiSunriseUTC.getUTCMilliseconds());

      sunset = new Date(todayMidnight);
      sunset.setHours(localSunsetHour, apiSunsetUTC.getUTCMinutes(), apiSunsetUTC.getUTCSeconds(), apiSunsetUTC.getUTCMilliseconds());

      console.log("Dynamic sunrise local:", sunrise.toLocaleString());
      console.log("Dynamic sunset local:", sunset.toLocaleString());
    } else {
      throw new Error('API status not OK');
    }
  } catch (e) {
    console.warn('Sunrise API failed:', e);
    sunrise = new Date(today); sunrise.setHours(7, 30, 0, 0);
    sunset  = new Date(today); sunset.setHours(17, 15, 0, 0);
  }

  const sunriseTime = sunrise.getTime();
  const sunsetTime = sunset.getTime();

  const dayDurationMs = sunsetTime - sunriseTime;
  const dayMs = dayDurationMs / 8;

  const nextSunriseTime = sunriseTime + 86400000; // 24 hours
  const nightDurationMs = nextSunriseTime - sunsetTime;
  const nightMs = nightDurationMs / 8;

  // Debug durations
  console.log("Day duration ms:", dayDurationMs, "per slot:", dayMs);
  console.log("Night duration ms:", nightDurationMs, "per slot:", nightMs);

  // Fallback for invalid night duration
  let intNightMs = Math.floor(nightMs);
  if (nightDurationMs <= 0 || nightMs < 3600000) {
    console.warn("Invalid night duration - using fallback");
    intNightMs = Math.floor((12 * 60 * 60 * 1000) / 8); // 12h fallback
  }

  const intDayMs = Math.floor(dayMs);

  // Abhijit Muhurat (~48 min centered on midday)
  const middayMs = sunriseTime + (sunsetTime - sunriseTime) / 2;
  const abhijitStart = new Date(middayMs - 24 * 60 * 1000);
  const abhijitEnd   = new Date(middayMs + 24 * 60 * 1000);

  // Build content
  let contentHtml = `<p><strong>${today.toLocaleDateString()}</strong> - ${cityName}</p>`;

  // Abhijit at top
  contentHtml += `
    <div style="background-color: #e6ffe6; padding: 10px; border-radius: 6px; margin: 10px 0; text-align: center; border: 1px solid #b3ffb3;">
      <strong>Abhijit Muhurat (Auspicious)</strong><br>
      ${abhijitStart.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})} to 
      ${abhijitEnd.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})}
    </div>`;

  function makeTable(seq, start, duration, title) {
    let html = `<h3>${title}</h3><table>`;
    let cur = start.getTime();

    let warningIndices = [];
    if (title.includes('Daytime')) {
      warningIndices = [rahuIndex, kaalVelaIndex, vaarVelaIndex];
    } else if (title.includes('Nighttime')) {
      warningIndices = [0, 7]; // Kaal Ratri first and last
    }

    const nowMs = Date.now();

    const intDuration = duration; // already integer

    seq.forEach((type, index) => {
      const s = new Date(cur);
      const e = new Date(cur + intDuration);

      const periodStartMs = cur;
      const periodEndMs = cur + intDuration;

      const isActive = (nowMs >= periodStartMs - 5000) && (nowMs < periodEndMs + 5000);

      // Debug logs for nighttime
      if (title.includes('Nighttime')) {
        const nowDate = new Date(nowMs);
        console.log(`${title} slot ${index}: ${s.toLocaleTimeString()} to ${e.toLocaleTimeString()} | isActive: ${isActive} | now: ${nowDate.toLocaleTimeString()}`);
      }

      const cls = auspicious.has(type) ? 'good' : 'bad';

      let typeDisplay = type;
      if (warningIndices.includes(index)) {
        typeDisplay = '⚠️ ' + type;
      }

      const activeIcon = isActive ? ' ⏳' : '';

      let rowClass = cls;
      if (isActive) {
        rowClass += ' active-now';
      }

      html += `<tr class="${rowClass}">
        <td>${typeDisplay}</td>
        <td style="position: relative;">
          ${s.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})} to 
          ${e.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})}
          <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 1.2em; color: #666;">${activeIcon}</span>
        </td>
      </tr>`;
      cur += intDuration;
    });

    html += '</table>';
    return html;
  }

  contentHtml += makeTable(daySeq, sunrise, intDayMs, 'Daytime Choghadiya');
  contentHtml += makeTable(nightSeq, sunset, intNightMs, 'Nighttime Choghadiya');

  // Rahu Kaal separate section
  const rahuStartMs = sunriseTime + (rahuIndex * dayMs);
  const rahuEndMs   = rahuStartMs + dayMs;
  const rahuStart   = new Date(rahuStartMs);
  const rahuEnd     = new Date(rahuEndMs);

  contentHtml += `<h3>Rahu Kaal (Avoid)</h3>
    <p class="rahu">${rahuStart.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})} to ${rahuEnd.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})}</p>`;

  document.getElementById('content').innerHTML = contentHtml;
});