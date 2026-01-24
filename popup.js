document.addEventListener('DOMContentLoaded', async () => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const weekday = today.getDay();

  // Choghadiya sequences
  const daySequences = [
    ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'], // Sun
    ['Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal'],   // Mon
    ['Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog'],    // Tue
    ['Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal'],   // Wed
    ['Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh'],   // Thu
    ['Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg'],  // Fri
    ['Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh']   // Sat
  ];

  const daySeq = daySequences[weekday];
  const nightSeq = [...daySeq.slice(4), ...daySeq.slice(0, 4)];

  const auspicious = new Set(['Amrit', 'Shubh', 'Labh', 'Chal']);

  // Inauspicious slots (0-based)
  const rahuSlots    = [7, 1, 2, 3, 4, 5, 6];     // Sun=8th, Mon=2nd, etc.
  const vaarVelaSlots = [0, 7, 6, 5, 4, 3, 2];   // Sun=1st, Mon=8th, etc. (common pattern; adjust if your source differs)

  const rahuIndex = rahuSlots[weekday];
  const vaarIndex = vaarVelaSlots[weekday];

  // Cities
const cities = {
  cleveland:     { lat: 41.5055, lng: -81.6813, name: 'Cleveland, Ohio, USA', ianaTimezone: 'America/New_York' },
  fairviewpark:  { lat: 41.4414, lng: -81.8643, name: 'Fairview Park, Ohio, USA', ianaTimezone: 'America/New_York' },
  solon:         { lat: 41.3873, lng: -81.4387, name: 'Solon, Ohio, USA', ianaTimezone: 'America/New_York' },
  sanfrancisco:  { lat: 37.7740, lng: -122.4313, name: 'San Francisco, CA, USA', ianaTimezone: 'America/Los_Angeles' },
  chicago:       { lat: 41.8818, lng: -87.6232, name: 'Chicago, IL, USA', ianaTimezone: 'America/Chicago' },
  ottawa:        { lat: 45.4247, lng: -75.6950, name: 'Ottawa, Canada', ianaTimezone: 'America/Toronto' },
  vancouver:     { lat: 49.2463, lng: -123.1162, name: 'Vancouver, Canada', ianaTimezone: 'America/Vancouver' },
  osijek:        { lat: 45.5511, lng: 18.6939, name: 'Osijek, Croatia', ianaTimezone: 'Europe/Zagreb' },
  zagreb:        { lat: 45.8154, lng: 15.9666, name: 'Zagreb, Croatia', ianaTimezone: 'Europe/Zagreb' },
  bengaluru:     { lat: 12.9716, lng: 77.5946, name: 'Bengaluru, India', ianaTimezone: 'Asia/Kolkata' },
  hyderabad:     { lat: 17.3871, lng: 78.4917, name: 'Hyderabad, India', ianaTimezone: 'Asia/Kolkata' }
};

  // Load saved city
  let selectedCity = 'cleveland';
  try {
    const result = await chrome.storage.local.get('selectedCity');
    if (result.selectedCity && cities[result.selectedCity]) {
      selectedCity = result.selectedCity;
    }
  } catch (e) { console.warn('Storage error, using default'); }

  document.getElementById('city-select').value = selectedCity;

  document.getElementById('city-select').addEventListener('change', async (e) => {
    selectedCity = e.target.value;
    await chrome.storage.local.set({ selectedCity });
    location.reload();
  });

  const { lat, lng, name: cityName } = cities[selectedCity];

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

  // Get dynamic offset (hours from UTC, negative for west)
  const iana = cities[selectedCity].ianaTimezone || 'America/New_York';
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: iana,
    timeZoneName: 'shortOffset'
  });
  const sampleDate = new Date(todayMidnight);
  const parts = formatter.formatToParts(sampleDate);
  const offsetPart = parts.find(p => p.type === 'timeZoneName')?.value || 'GMT-5';
  const offsetSign = offsetPart.includes('-') ? -1 : 1;
  const offsetHoursStr = offsetPart.replace(/GMT|UTC|[+-]/g, '');
  let tzOffsetHours = offsetSign * parseFloat(offsetHoursStr);

  // Handle half-hour zones like India
  if (offsetPart.includes('5:30')) tzOffsetHours = 5.5;
  if (offsetPart.includes('4:30')) tzOffsetHours = 4.5; // future-proof

  console.log(`Timezone offset for ${iana} on ${dateStr}: ${tzOffsetHours} hours`);

  // To get local hour from API UTC: localHour = utcHour + tzOffsetHours (tzOffset is negative for west)
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

  let sunriseTime = sunrise.getTime();
  let sunsetTime = sunset.getTime();

  const dayDurationMs = sunsetTime - sunriseTime;
  const dayMs = dayDurationMs / 8;

  // Night: from sunset to sunrise +24h
  const nextSunriseTime = sunriseTime + 86400000; // 24h in ms
  const nightDurationMs = nextSunriseTime - sunsetTime;
  const nightMs = nightDurationMs / 8;

  // Debug to confirm durations
  console.log("Day duration ms:", dayDurationMs, "per slot:", dayMs);
  console.log("Night duration ms:", nightDurationMs, "per slot:", nightMs);

  // If nightMs is negative or tiny (API error), fallback
  if (nightDurationMs <= 0 || nightMs < 3600000) { // less than 1h
    console.warn("Invalid night duration - using fallback");
    const fallbackNight = 12 * 60 * 60 * 1000; // 12h night fallback
    intNightMs = fallbackNight / 8;
  }

  console.log("Sunrise local:", sunrise.toLocaleString());
console.log("Sunset local:", sunset.toLocaleString());
console.log("Now local:", new Date().toLocaleString());
console.log("Sunrise ms:", sunriseTime);
console.log("Sunset ms:", sunsetTime);
console.log("Next sunrise ms:", nextSunriseTime);
console.log("Night start (sunset ms):", sunsetTime);

  // Use integer to avoid drift
  const intDayMs = Math.floor(dayMs);
  const intNightMs = Math.floor(nightMs);

  // Abhijit Muhurat (~48 min centered on midday)
  const middayMs = sunrise.getTime() + (sunset.getTime() - sunrise.getTime()) / 2;
  const abhijitStart = new Date(middayMs - 24 * 60 * 1000);
  const abhijitEnd   = new Date(middayMs + 24 * 60 * 1000);

  // Build full content
  let contentHtml = `<p><strong>${today.toLocaleDateString()}</strong> - ${cityName}</p>`;

  // Abhijit at top (green box)
  contentHtml += `
    <div style="background-color: #e6ffe6; padding: 10px; border-radius: 6px; margin: 10px 0; text-align: center; border: 1px solid #b3ffb3;">
      <strong>Abhijit Muhurat (Auspicious)</strong><br>
      ${abhijitStart.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})} to 
      ${abhijitEnd.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})}
    </div>`;

function makeTable(seq, start, duration, title) {
  let html = `<h3>${title}</h3><table>`;
  let cur = start.getTime();  // UTC epoch ms

  let warningIndices = [];
  if (title.includes('Daytime')) {
    warningIndices = [rahuIndex, vaarIndex];
  } else if (title.includes('Nighttime')) {
    warningIndices = [6, 7];
  }

  const nowMs = Date.now();  // UTC ms

  // Use integer durations to prevent accumulation drift
  const intDuration = Math.floor(duration);

  seq.forEach((type, index) => {
    const s = new Date(cur);
    const e = new Date(cur + intDuration);

    // Period bounds in UTC ms
    const periodStartMs = cur;
    const periodEndMs = cur + intDuration;

    // Tolerance ±5 seconds for rounding/API precision
    const isActive = (nowMs >= periodStartMs - 5000) && (nowMs < periodEndMs + 5000);

    // Debug log with UTC times for verification
    if (title.includes('Nighttime')) {
      const nowDate = new Date(nowMs);
      console.log(`${title} slot ${index}: ${s.toLocaleTimeString()} to ${e.toLocaleTimeString()} | isActive: ${isActive} | now: ${nowDate.toLocaleTimeString()} (UTC check: ${nowMs} vs [${periodStartMs} - ${periodEndMs}])`);
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
    cur += intDuration;  // step by integer ms
  });

  html += '</table>';
  return html;
}

  contentHtml += makeTable(daySeq, sunrise, intDayMs, 'Daytime Choghadiya');
  contentHtml += makeTable(nightSeq, sunset, intNightMs, 'Nighttime Choghadiya');

  // Rahu Kaal separate section
  const rahuStartMs = sunrise.getTime() + (rahuIndex * dayMs);
  const rahuStart = new Date(rahuStartMs);
  const rahuEnd   = new Date(rahuStartMs + dayMs);
  contentHtml += `<h3>Rahu Kaal (Avoid)</h3><p class="rahu">${rahuStart.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})} to ${rahuEnd.toLocaleTimeString([], {hour:'numeric', minute:'2-digit', hour12:true})}</p>`;

  document.getElementById('content').innerHTML = contentHtml;
});