const cityDatabase = [
  // Africa
  { name: "Accra, Ghana", lat: 5.6037, lng: -0.1870, tz: "Africa/Accra" },
  { name: "Addis Ababa, Ethiopia", lat: 9.02497, lng: 38.74689, tz: "Africa/Addis_Ababa" },
  { name: "Algiers, Algeria", lat: 36.7372, lng: 3.0869, tz: "Africa/Algiers" },
  { name: "Cairo, Egypt", lat: 30.0444, lng: 31.2357, tz: "Africa/Cairo" },
  { name: "Cape Town, South Africa", lat: -33.9249, lng: 18.4241, tz: "Africa/Johannesburg" },
  { name: "Casablanca, Morocco", lat: 33.5731, lng: -7.5898, tz: "Africa/Casablanca" },
  { name: "Johannesburg, South Africa", lat: -26.2041, lng: 28.0473, tz: "Africa/Johannesburg" },
  { name: "Kinshasa, DR Congo", lat: -4.4419, lng: 15.2663, tz: "Africa/Kinshasa" },
  { name: "Lagos, Nigeria", lat: 6.5244, lng: 3.3792, tz: "Africa/Lagos" },
  { name: "Nairobi, Kenya", lat: -1.2921, lng: 36.8219, tz: "Africa/Nairobi" },

  // Asia
  { name: "Abu Dhabi, UAE", lat: 24.4539, lng: 54.3773, tz: "Asia/Dubai" },
  { name: "Ahmedabad, India", lat: 23.0225, lng: 72.5714, tz: "Asia/Kolkata" },
  { name: "Almaty, Kazakhstan", lat: 43.2220, lng: 76.8512, tz: "Asia/Almaty" },
  { name: "Amman, Jordan", lat: 31.9539, lng: 35.9106, tz: "Asia/Amman" },
  { name: "Astana, Kazakhstan", lat: 51.1694, lng: 71.4491, tz: "Asia/Almaty" },
  { name: "Baghdad, Iraq", lat: 33.3152, lng: 44.3661, tz: "Asia/Baghdad" },
  { name: "Baku, Azerbaijan", lat: 40.4093, lng: 49.8671, tz: "Asia/Baku" },
  { name: "Bangalore, India", lat: 12.9716, lng: 77.5946, tz: "Asia/Kolkata" },
  { name: "Bangkok, Thailand", lat: 13.7563, lng: 100.5018, tz: "Asia/Bangkok" },
  { name: "Beijing, China", lat: 39.9042, lng: 116.4074, tz: "Asia/Shanghai" },
  { name: "Beirut, Lebanon", lat: 33.8938, lng: 35.5018, tz: "Asia/Beirut" },
  { name: "Bishkek, Kyrgyzstan", lat: 42.8746, lng: 74.5698, tz: "Asia/Bishkek" },
  { name: "Busan, South Korea", lat: 35.1796, lng: 129.0756, tz: "Asia/Seoul" },
  { name: "Chennai, India", lat: 13.0827, lng: 80.2707, tz: "Asia/Kolkata" },
  { name: "Chongqing, China", lat: 29.5630, lng: 106.5516, tz: "Asia/Shanghai" },
  { name: "Daegu, South Korea", lat: 35.8714, lng: 128.6014, tz: "Asia/Seoul" },
  { name: "Damascus, Syria", lat: 33.5138, lng: 36.2765, tz: "Asia/Damascus" },
  { name: "Dammam, Saudi Arabia", lat: 26.4344, lng: 50.1040, tz: "Asia/Riyadh" },
  { name: "Delhi, India", lat: 28.7041, lng: 77.1025, tz: "Asia/Kolkata" },
  { name: "Dhaka, Bangladesh", lat: 23.8103, lng: 90.4125, tz: "Asia/Dhaka" },
  { name: "Doha, Qatar", lat: 25.2854, lng: 51.5310, tz: "Asia/Qatar" },
  { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708, tz: "Asia/Dubai" },
  { name: "Dushanbe, Tajikistan", lat: 38.5598, lng: 68.7870, tz: "Asia/Dushanbe" },
  { name: "Guangzhou, China", lat: 23.1291, lng: 113.2644, tz: "Asia/Shanghai" },
  { name: "Hanoi, Vietnam", lat: 21.0285, lng: 105.8542, tz: "Asia/Ho_Chi_Minh" },
  { name: "Ho Chi Minh City, Vietnam", lat: 10.8231, lng: 106.6297, tz: "Asia/Ho_Chi_Minh" },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694, tz: "Asia/Hong_Kong" },
  { name: "Hyderabad, India", lat: 17.3850, lng: 78.4867, tz: "Asia/Kolkata" },
  { name: "Incheon, South Korea", lat: 37.4563, lng: 126.7052, tz: "Asia/Seoul" },
  { name: "Indore, India", lat: 22.7196, lng: 75.8577, tz: "Asia/Kolkata" },
  { name: "Isfahan, Iran", lat: 32.6539, lng: 51.6660, tz: "Asia/Tehran" },
  { name: "Jakarta, Indonesia", lat: -6.2088, lng: 106.8456, tz: "Asia/Jakarta" },
  { name: "Jaipur, India", lat: 26.9124, lng: 75.7873, tz: "Asia/Kolkata" },
  { name: "Jeddah, Saudi Arabia", lat: 21.4858, lng: 39.1925, tz: "Asia/Riyadh" },
  { name: "Kanpur, India", lat: 26.4499, lng: 80.3319, tz: "Asia/Kolkata" },
  { name: "Karachi, Pakistan", lat: 24.8607, lng: 67.0011, tz: "Asia/Karachi" },
  { name: "Kolkata, India", lat: 22.5726, lng: 88.3639, tz: "Asia/Kolkata" },
  { name: "Kuala Lumpur, Malaysia", lat: 3.1390, lng: 101.6869, tz: "Asia/Kuala_Lumpur" },
  { name: "Kuwait City, Kuwait", lat: 29.3759, lng: 47.9774, tz: "Asia/Kuwait" },
  { name: "Lahore, Pakistan", lat: 31.5204, lng: 74.3587, tz: "Asia/Karachi" },
  { name: "Lucknow, India", lat: 26.8467, lng: 80.9462, tz: "Asia/Kolkata" },
  { name: "Manila, Philippines", lat: 14.5995, lng: 120.9842, tz: "Asia/Manila" },
  { name: "Mashhad, Iran", lat: 36.2895, lng: 59.6000, tz: "Asia/Tehran" },
  { name: "Mecca, Saudi Arabia", lat: 21.3891, lng: 39.8579, tz: "Asia/Riyadh" },
  { name: "Medina, Saudi Arabia", lat: 24.4681, lng: 39.6142, tz: "Asia/Riyadh" },
  { name: "Mumbai, India", lat: 19.0760, lng: 72.8777, tz: "Asia/Kolkata" },
  { name: "Nagoya, Japan", lat: 35.1815, lng: 136.9066, tz: "Asia/Tokyo" },
  { name: "Nagpur, India", lat: 21.1458, lng: 79.0882, tz: "Asia/Kolkata" },
  { name: "Osaka, Japan", lat: 34.6937, lng: 135.5022, tz: "Asia/Tokyo" },
  { name: "Phnom Penh, Cambodia", lat: 11.5564, lng: 104.9282, tz: "Asia/Phnom_Penh" },
  { name: "Pune, India", lat: 18.5204, lng: 73.8567, tz: "Asia/Kolkata" },
  { name: "Pyongyang, North Korea", lat: 39.0392, lng: 125.7625, tz: "Asia/Pyongyang" },
  { name: "Quezon City, Philippines", lat: 14.6760, lng: 121.0437, tz: "Asia/Manila" },
  { name: "Riyadh, Saudi Arabia", lat: 24.7136, lng: 46.6753, tz: "Asia/Riyadh" },
  { name: "Seoul, South Korea", lat: 37.5665, lng: 126.9780, tz: "Asia/Seoul" },
  { name: "Shanghai, China", lat: 31.2304, lng: 121.4737, tz: "Asia/Shanghai" },
  { name: "Shenzhen, China", lat: 22.5431, lng: 114.0579, tz: "Asia/Shanghai" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, tz: "Asia/Singapore" },
  { name: "Surat, India", lat: 21.1702, lng: 72.8311, tz: "Asia/Kolkata" },
  { name: "Tabriz, Iran", lat: 38.0667, lng: 46.3000, tz: "Asia/Tehran" },
  { name: "Taipei, Taiwan", lat: 25.0330, lng: 121.5654, tz: "Asia/Taipei" },
  { name: "Tashkent, Uzbekistan", lat: 41.2995, lng: 69.2401, tz: "Asia/Tashkent" },
  { name: "Tehran, Iran", lat: 35.6892, lng: 51.3890, tz: "Asia/Tehran" },
  { name: "Thane, India", lat: 19.2183, lng: 72.9781, tz: "Asia/Kolkata" },
  { name: "Tianjin, China", lat: 39.0842, lng: 117.2008, tz: "Asia/Shanghai" },
  { name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503, tz: "Asia/Tokyo" },
  { name: "Ulaanbaatar, Mongolia", lat: 47.8864, lng: 106.9057, tz: "Asia/Ulaanbaatar" },
  { name: "Vientiane, Laos", lat: 17.9757, lng: 102.6331, tz: "Asia/Vientiane" },
  { name: "Yangon, Myanmar", lat: 16.8409, lng: 96.1735, tz: "Asia/Yangon" },
  { name: "Yerevan, Armenia", lat: 40.1872, lng: 44.5152, tz: "Asia/Yerevan" },

  // Australia / Oceania
  { name: "Adelaide, Australia", lat: -34.9285, lng: 138.6007, tz: "Australia/Adelaide" },
  { name: "Brisbane, Australia", lat: -27.4698, lng: 153.0251, tz: "Australia/Brisbane" },
  { name: "Canberra, Australia", lat: -35.2809, lng: 149.1300, tz: "Australia/Sydney" },
  { name: "Gold Coast, Australia", lat: -28.0167, lng: 153.4000, tz: "Australia/Brisbane" },
  { name: "Melbourne, Australia", lat: -37.8136, lng: 144.9631, tz: "Australia/Melbourne" },
  { name: "Perth, Australia", lat: -31.9505, lng: 115.8605, tz: "Australia/Perth" },
  { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093, tz: "Australia/Sydney" },

  // Europe
  { name: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041, tz: "Europe/Amsterdam" },
  { name: "Athens, Greece", lat: 37.9838, lng: 23.7275, tz: "Europe/Athens" },
  { name: "Barcelona, Spain", lat: 41.3851, lng: 2.1734, tz: "Europe/Madrid" },
  { name: "Belgrade, Serbia", lat: 44.7866, lng: 20.4489, tz: "Europe/Belgrade" },
  { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050, tz: "Europe/Berlin" },
  { name: "Birmingham, UK", lat: 52.4862, lng: -1.8904, tz: "Europe/London" },
  { name: "Bologna, Italy", lat: 44.4949, lng: 11.3464, tz: "Europe/Rome" },
  { name: "Bremen, Germany", lat: 53.0793, lng: 8.8017, tz: "Europe/Berlin" },
  { name: "Brussels, Belgium", lat: 50.8503, lng: 4.3517, tz: "Europe/Brussels" },
  { name: "Bucharest, Romania", lat: 44.4268, lng: 26.1025, tz: "Europe/Bucharest" },
  { name: "Budapest, Hungary", lat: 47.4979, lng: 19.0402, tz: "Europe/Budapest" },
  { name: "Cologne, Germany", lat: 50.9375, lng: 6.9603, tz: "Europe/Berlin" },
  { name: "Copenhagen, Denmark", lat: 55.6761, lng: 12.5683, tz: "Europe/Copenhagen" },
  { name: "Dortmund, Germany", lat: 51.5139, lng: 7.4653, tz: "Europe/Berlin" },
  { name: "Dresden, Germany", lat: 51.0504, lng: 13.7373, tz: "Europe/Berlin" },
  { name: "Dublin, Ireland", lat: 53.3498, lng: -6.2603, tz: "Europe/Dublin" },
  { name: "Düsseldorf, Germany", lat: 51.2217, lng: 6.7762, tz: "Europe/Berlin" },
  { name: "Edinburgh, UK", lat: 55.9533, lng: -3.1883, tz: "Europe/London" },
  { name: "Essen, Germany", lat: 51.4556, lng: 7.0116, tz: "Europe/Berlin" },
  { name: "Florence, Italy", lat: 43.7696, lng: 11.2558, tz: "Europe/Rome" },
  { name: "Frankfurt, Germany", lat: 50.1109, lng: 8.6821, tz: "Europe/Berlin" },
  { name: "Gdansk, Poland", lat: 54.3520, lng: 18.6466, tz: "Europe/Warsaw" },
  { name: "Genoa, Italy", lat: 44.4056, lng: 8.9463, tz: "Europe/Rome" },
  { name: "Glasgow, UK", lat: 55.8642, lng: -4.2518, tz: "Europe/London" },
  { name: "Hamburg, Germany", lat: 53.5511, lng: 9.9937, tz: "Europe/Berlin" },
  { name: "Hanover, Germany", lat: 52.3759, lng: 9.7320, tz: "Europe/Berlin" },
  { name: "Helsinki, Finland", lat: 60.1699, lng: 24.9384, tz: "Europe/Helsinki" },
  { name: "Istanbul, Turkey", lat: 41.0082, lng: 28.9784, tz: "Europe/Istanbul" },
  { name: "Kraków, Poland", lat: 50.0647, lng: 19.9450, tz: "Europe/Warsaw" },
  { name: "Kyiv, Ukraine", lat: 50.4501, lng: 30.5234, tz: "Europe/Kyiv" },
  { name: "Leeds, UK", lat: 53.8008, lng: -1.5491, tz: "Europe/London" },
  { name: "Leicester, UK", lat: 52.6369, lng: -1.1398, tz: "Europe/London" },
  { name: "Leipzig, Germany", lat: 51.3397, lng: 12.3731, tz: "Europe/Berlin" },
  { name: "Lisbon, Portugal", lat: 38.7223, lng: -9.1393, tz: "Europe/Lisbon" },
  { name: "Liverpool, UK", lat: 53.4084, lng: -2.9916, tz: "Europe/London" },
  { name: "Lodz, Poland", lat: 51.7592, lng: 19.4560, tz: "Europe/Warsaw" },
  { name: "London, UK", lat: 51.5074, lng: -0.1278, tz: "Europe/London" },
  { name: "Lyon, France", lat: 45.7578, lng: 4.8320, tz: "Europe/Paris" },
  { name: "Madrid, Spain", lat: 40.4168, lng: -3.7038, tz: "Europe/Madrid" },
  { name: "Málaga, Spain", lat: 36.7213, lng: -4.4213, tz: "Europe/Madrid" },
  { name: "Manchester, UK", lat: 53.4808, lng: -2.2426, tz: "Europe/London" },
  { name: "Marseille, France", lat: 43.2965, lng: 5.3698, tz: "Europe/Paris" },
  { name: "Milan, Italy", lat: 45.4642, lng: 9.1900, tz: "Europe/Rome" },
  { name: "Minsk, Belarus", lat: 53.9000, lng: 27.5667, tz: "Europe/Minsk" },
  { name: "Montpellier, France", lat: 43.6112, lng: 3.8767, tz: "Europe/Paris" },
  { name: "Moscow, Russia", lat: 55.7558, lng: 37.6173, tz: "Europe/Moscow" },
  { name: "Munich, Germany", lat: 48.1351, lng: 11.5820, tz: "Europe/Berlin" },
  { name: "Nantes, France", lat: 47.2184, lng: -1.5536, tz: "Europe/Paris" },
  { name: "Naples, Italy", lat: 40.8518, lng: 14.2681, tz: "Europe/Rome" },
  { name: "Newcastle upon Tyne, UK", lat: 54.9783, lng: -1.6178, tz: "Europe/London" },
  { name: "Nice, France", lat: 43.7031, lng: 7.2661, tz: "Europe/Paris" },
  { name: "Nottingham, UK", lat: 52.9548, lng: -1.1581, tz: "Europe/London" },
  { name: "Nuremberg, Germany", lat: 49.4521, lng: 11.0767, tz: "Europe/Berlin" },
  { name: "Osijek, Croatia", lat: 45.5511, lng: 18.6939, tz: "Europe/Zagreb" },
  { name: "Oslo, Norway", lat: 59.9139, lng: 10.7522, tz: "Europe/Oslo" },
  { name: "Palermo, Italy", lat: 38.1157, lng: 13.3615, tz: "Europe/Rome" },
  { name: "Palma, Spain", lat: 39.5696, lng: 2.6502, tz: "Europe/Madrid" },
  { name: "Paris, France", lat: 48.8566, lng: 2.3522, tz: "Europe/Paris" },
  { name: "Porto, Portugal", lat: 41.1579, lng: -8.6291, tz: "Europe/Lisbon" },
  { name: "Poznań, Poland", lat: 52.4064, lng: 16.9252, tz: "Europe/Warsaw" },
  { name: "Prague, Czech Republic", lat: 50.0755, lng: 14.4378, tz: "Europe/Prague" },
  { name: "Pula, Croatia", lat: 44.8683, lng: 13.8481, tz: "Europe/Zagreb" },
  { name: "Riga, Latvia", lat: 56.9496, lng: 24.1052, tz: "Europe/Riga" },
  { name: "Rome, Italy", lat: 41.9028, lng: 12.4964, tz: "Europe/Rome" },
  { name: "Saint Petersburg, Russia", lat: 59.9343, lng: 30.3351, tz: "Europe/Moscow" },
  { name: "Seville, Spain", lat: 37.3891, lng: -5.9845, tz: "Europe/Madrid" },
  { name: "Sheffield, UK", lat: 53.3811, lng: -1.4701, tz: "Europe/London" },
  { name: "Sofia, Bulgaria", lat: 42.6977, lng: 23.3219, tz: "Europe/Sofia" },
  { name: "Stockholm, Sweden", lat: 59.3293, lng: 18.0686, tz: "Europe/Stockholm" },
  { name: "Strasbourg, France", lat: 48.5734, lng: 7.7521, tz: "Europe/Paris" },
  { name: "Stuttgart, Germany", lat: 48.7758, lng: 9.1829, tz: "Europe/Berlin" },
  { name: "Toulouse, France", lat: 43.6047, lng: 1.4442, tz: "Europe/Paris" },
  { name: "Turin, Italy", lat: 45.0703, lng: 7.6869, tz: "Europe/Rome" },
  { name: "Valencia, Spain", lat: 39.4699, lng: -0.3763, tz: "Europe/Madrid" },
  { name: "Vienna, Austria", lat: 48.2082, lng: 16.3738, tz: "Europe/Vienna" },
  { name: "Warsaw, Poland", lat: 52.2297, lng: 21.0122, tz: "Europe/Warsaw" },
  { name: "Wroclaw, Poland", lat: 51.1079, lng: 17.0385, tz: "Europe/Warsaw" },
  { name: "Zaragoza, Spain", lat: 41.6488, lng: -0.8891, tz: "Europe/Madrid" },
  { name: "Zagreb, Croatia", lat: 45.8150, lng: 15.9819, tz: "Europe/Zagreb" },
  { name: "Zurich, Switzerland", lat: 47.3769, lng: 8.5417, tz: "Europe/Zurich" },

  // North America
  { name: "Albuquerque, USA", lat: 35.0844, lng: -106.6504, tz: "America/Denver" },
  { name: "Anchorage, USA", lat: 61.2181, lng: -149.9003, tz: "America/Anchorage" },
  { name: "Arlington, USA", lat: 32.7357, lng: -97.1081, tz: "America/Chicago" },
  { name: "Atlanta, USA", lat: 33.7490, lng: -84.3880, tz: "America/New_York" },
  { name: "Austin, USA", lat: 30.2672, lng: -97.7431, tz: "America/Chicago" },
  { name: "Aurora, USA", lat: 39.7294, lng: -104.8319, tz: "America/Denver" },
  { name: "Bakersfield, USA", lat: 35.3733, lng: -119.0187, tz: "America/Los_Angeles" },
  { name: "Baltimore, USA", lat: 39.2904, lng: -76.6122, tz: "America/New_York" },
  { name: "Boston, USA", lat: 42.3601, lng: -71.0589, tz: "America/New_York" },
  { name: "Calgary, Canada", lat: 51.0447, lng: -114.0719, tz: "America/Edmonton" },
  { name: "Charlotte, USA", lat: 35.2271, lng: -80.8431, tz: "America/New_York" },
  { name: "Chicago, USA", lat: 41.8781, lng: -87.6298, tz: "America/Chicago" },
  { name: "Cleveland, Ohio, USA", lat: 41.5055, lng: -81.6813, tz: "America/New_York" },
  { name: "Colorado Springs, USA", lat: 38.8339, lng: -104.8214, tz: "America/Denver" },
  { name: "Columbus, USA", lat: 39.9612, lng: -82.9988, tz: "America/New_York" },
  { name: "Dallas, USA", lat: 32.7767, lng: -96.7970, tz: "America/Chicago" },
  { name: "Denver, USA", lat: 39.7392, lng: -104.9903, tz: "America/Denver" },
  { name: "Detroit, USA", lat: 42.3314, lng: -83.0458, tz: "America/Detroit" },
  { name: "Edmonton, Canada", lat: 53.5444, lng: -113.4909, tz: "America/Edmonton" },
  { name: "Fairview Park, Ohio, USA", lat: 41.4414, lng: -81.8643, tz: "America/New_York" },
  { name: "Fort Worth, USA", lat: 32.7555, lng: -97.3308, tz: "America/Chicago" },
  { name: "Fresno, USA", lat: 36.7378, lng: -119.7871, tz: "America/Los_Angeles" },
  { name: "Guadalajara, Mexico", lat: 20.6597, lng: -103.3496, tz: "America/Mexico_City" },
  { name: "Halifax, Canada", lat: 44.6488, lng: -63.5752, tz: "America/Halifax" },
  { name: "Hamilton, Canada", lat: 43.2557, lng: -79.8711, tz: "America/Toronto" },
  { name: "Honolulu, USA", lat: 21.3069, lng: -157.8583, tz: "Pacific/Honolulu" },
  { name: "Houston, USA", lat: 29.7604, lng: -95.3698, tz: "America/Chicago" },
  { name: "Indianapolis, USA", lat: 39.7684, lng: -86.1581, tz: "America/Indiana/Indianapolis" },
  { name: "Jacksonville, USA", lat: 30.3322, lng: -81.6557, tz: "America/New_York" },
  { name: "Juárez, Mexico", lat: 31.6904, lng: -106.4245, tz: "America/Ciudad_Juarez" },
  { name: "Kansas City, USA", lat: 39.0997, lng: -94.5786, tz: "America/Chicago" },
  { name: "Kitchener, Canada", lat: 43.4516, lng: -80.4920, tz: "America/Toronto" },
  { name: "León, Mexico", lat: 21.1219, lng: -101.7068, tz: "America/Mexico_City" },
  { name: "Long Beach, USA", lat: 33.7701, lng: -118.1937, tz: "America/Los_Angeles" },
  { name: "Los Angeles, USA", lat: 34.0522, lng: -118.2437, tz: "America/Los_Angeles" },
  { name: "Louisville, USA", lat: 38.2527, lng: -85.7585, tz: "America/Kentucky/Louisville" },
  { name: "Memphis, USA", lat: 35.1495, lng: -90.0490, tz: "America/Chicago" },
  { name: "Mesa, USA", lat: 33.4152, lng: -111.8315, tz: "America/Phoenix" },
  { name: "Mexico City, Mexico", lat: 19.4326, lng: -99.1332, tz: "America/Mexico_City" },
  { name: "Miami, USA", lat: 25.7617, lng: -80.1918, tz: "America/New_York" },
  { name: "Milwaukee, USA", lat: 43.0389, lng: -87.9065, tz: "America/Chicago" },
  { name: "Minneapolis, USA", lat: 44.9778, lng: -93.2650, tz: "America/Chicago" },
  { name: "Monterrey, Mexico", lat: 25.6866, lng: -100.3161, tz: "America/Monterrey" },
  { name: "Montreal, Canada", lat: 45.5017, lng: -73.5673, tz: "America/Toronto" },
  { name: "Nashville, USA", lat: 36.1627, lng: -86.7816, tz: "America/Chicago" },
  { name: "New Orleans, USA", lat: 29.9511, lng: -90.0715, tz: "America/Chicago" },
  { name: "New York, USA", lat: 40.7128, lng: -74.0060, tz: "America/New_York" },
  { name: "Oakland, USA", lat: 37.8044, lng: -122.2711, tz: "America/Los_Angeles" },
  { name: "Omaha, USA", lat: 41.2565, lng: -95.9345, tz: "America/Chicago" },
  { name: "Ottawa, Canada", lat: 45.4215, lng: -75.6972, tz: "America/Toronto" },
  { name: "Philadelphia, USA", lat: 39.9526, lng: -75.1652, tz: "America/New_York" },
  { name: "Phoenix, USA", lat: 33.4484, lng: -112.0740, tz: "America/Phoenix" },
  { name: "Portland, USA", lat: 45.5152, lng: -122.6784, tz: "America/Los_Angeles" },
  { name: "Puebla, Mexico", lat: 19.0414, lng: -98.2063, tz: "America/Mexico_City" },
  { name: "Quebec City, Canada", lat: 46.8139, lng: -71.2080, tz: "America/Toronto" },
  { name: "Raleigh, USA", lat: 35.7796, lng: -78.6382, tz: "America/New_York" },
  { name: "Sacramento, USA", lat: 38.5816, lng: -121.4944, tz: "America/Los_Angeles" },
  { name: "San Antonio, USA", lat: 29.4241, lng: -98.4936, tz: "America/Chicago" },
  { name: "San Diego, USA", lat: 32.7157, lng: -117.1611, tz: "America/Los_Angeles" },
  { name: "San Jose, USA", lat: 37.3382, lng: -121.8863, tz: "America/Los_Angeles" },
  { name: "Seattle, USA", lat: 47.6062, lng: -122.3321, tz: "America/Los_Angeles" },
  { name: "Solon, Ohio, USA", lat: 41.3898, lng: -81.4415, tz: "America/New_York" },
  { name: "Tampa, USA", lat: 27.9506, lng: -82.4572, tz: "America/New_York" },
  { name: "Tijuana, Mexico", lat: 32.5149, lng: -117.0382, tz: "America/Tijuana" },
  { name: "Toronto, Canada", lat: 43.6532, lng: -79.3832, tz: "America/Toronto" },
  { name: "Tucson, USA", lat: 32.2226, lng: -110.9747, tz: "America/Phoenix" },
  { name: "Tulsa, USA", lat: 36.1540, lng: -95.9928, tz: "America/Chicago" },
  { name: "Vancouver, Canada", lat: 49.2827, lng: -123.1207, tz: "America/Vancouver" },
  { name: "Victoria, Canada", lat: 48.4284, lng: -123.3656, tz: "America/Vancouver" },
  { name: "Virginia Beach, USA", lat: 36.8508, lng: -76.2859, tz: "America/New_York" },
  { name: "Wichita, USA", lat: 37.6872, lng: -97.3301, tz: "America/Chicago" },
  { name: "Winnipeg, Canada", lat: 49.8951, lng: -97.1384, tz: "America/Winnipeg" },
  { name: "Zapopan, Mexico", lat: 20.6597, lng: -103.3496, tz: "America/Mexico_City" },

  // South America
  { name: "Asunción, Paraguay", lat: -25.2637, lng: -57.5759, tz: "America/Asuncion" },
  { name: "Bogotá, Colombia", lat: 4.7110, lng: -74.0721, tz: "America/Bogota" },
  { name: "Brasília, Brazil", lat: -15.8267, lng: -47.9218, tz: "America/Sao_Paulo" },
  { name: "Buenos Aires, Argentina", lat: -34.6037, lng: -58.3816, tz: "America/Argentina/Buenos_Aires" },
  { name: "Cali, Colombia", lat: 3.4516, lng: -76.5320, tz: "America/Bogota" },
  { name: "Caracas, Venezuela", lat: 10.4806, lng: -66.9036, tz: "America/Caracas" },
  { name: "Córdoba, Argentina", lat: -31.4201, lng: -64.1888, tz: "America/Argentina/Cordoba" },
  { name: "Fortaleza, Brazil", lat: -3.7175, lng: -38.5434, tz: "America/Fortaleza" },
  { name: "Guayaquil, Ecuador", lat: -2.1894, lng: -79.8891, tz: "America/Guayaquil" },
  { name: "La Paz, Bolivia", lat: -16.4897, lng: -68.1193, tz: "America/La_Paz" },
  { name: "Lima, Peru", lat: -12.0464, lng: -77.0428, tz: "America/Lima" },
  { name: "Manaus, Brazil", lat: -3.1190, lng: -60.0217, tz: "America/Manaus" },
  { name: "Medellín, Colombia", lat: 6.2442, lng: -75.5748, tz: "America/Bogota" },
  { name: "Montevideo, Uruguay", lat: -34.9011, lng: -56.1645, tz: "America/Montevideo" },
  { name: "Quito, Ecuador", lat: -0.1807, lng: -78.4678, tz: "America/Guayaquil" },
  { name: "Recife, Brazil", lat: -8.0476, lng: -34.8770, tz: "America/Recife" },
  { name: "Rio de Janeiro, Brazil", lat: -22.9068, lng: -43.1729, tz: "America/Sao_Paulo" },
  { name: "Salvador, Brazil", lat: -12.9716, lng: -38.5014, tz: "America/Bahia" },
  { name: "Santiago, Chile", lat: -33.4489, lng: -70.6693, tz: "America/Santiago" },
  { name: "São Paulo, Brazil", lat: -23.5505, lng: -46.6333, tz: "America/Sao_Paulo" }
];

// === Main logic ===
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('city-search');
  const resultsDiv  = document.getElementById('search-results');
  const contentDiv  = document.getElementById('content');

  let currentLat       = 41.5055;
  let currentLng       = -81.6813;
  let currentCityName  = 'Cleveland, Ohio, USA';
  let currentTimezone  = 'America/New_York';

  // Load saved location on start
  chrome.storage.local.get(['savedLat','savedLng','savedCityName','savedTimezone'], (saved) => {
    if (saved.savedLat && saved.savedLng) {
      currentLat      = saved.savedLat;
      currentLng      = saved.savedLng;
      currentCityName = saved.savedCityName || 'Your Location';
      currentTimezone = saved.savedTimezone || 'America/New_York';
    }
    renderChoghadiya();
  });

  // Simple prefix search (no library)
  function findCities(query) {
    if (query.length < 2) return [];
    const lower = query.toLowerCase();
    return cityDatabase
      .filter(c => c.name.toLowerCase().startsWith(lower))
      .slice(0, 10);
  }

  // Show results below input
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    resultsDiv.innerHTML = '';

    if (query.length < 2) return;

    const matches = findCities(query);
    if (matches.length === 0) {
      resultsDiv.innerHTML = '<div class="no-results">No cities found</div>';
      return;
    }

    const ul = document.createElement('ul');
    matches.forEach(city => {
      const li = document.createElement('li');
      li.textContent = city.name;
      li.addEventListener('click', () => {
        currentLat      = city.lat;
        currentLng      = city.lng;
        currentCityName = city.name;
        currentTimezone = city.tz;

        // Save immediately
        chrome.storage.local.set({
          savedLat: currentLat,
          savedLng: currentLng,
          savedCityName: currentCityName,
          savedTimezone: currentTimezone
        });

        searchInput.value = '';
        resultsDiv.innerHTML = '';
        renderChoghadiya();
      });
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  });

  // Hide results when clicking outside
  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
      resultsDiv.innerHTML = '';
    }
  });

  // Reload button - clear saved location and fallback to geolocation / default
  document.getElementById('reload-location').addEventListener('click', () => {
    chrome.storage.local.remove(['savedLat','savedLng','savedCityName','savedTimezone'], () => {
      location.reload();
    });
  });

  // Core Choghadiya rendering function
  function renderChoghadiya() {
    contentDiv.innerHTML = '<div class="loading">Calculating Muhurtas…</div>';

    const nowMs = Date.now();

    const tzFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: currentTimezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    });

    const parts = tzFormatter.formatToParts(nowMs);
    const year  = parts.find(p => p.type === 'year').value;
    const month = parts.find(p => p.type === 'month').value;
    const day   = parts.find(p => p.type === 'day').value;

    const dateStr = `${year}-${month}-${day}`;

    // Local date in target timezone → used to determine weekday correctly
    const noonInTz = new Date(`${dateStr}T12:00:00`);
    const formatterNoon = new Intl.DateTimeFormat('en-US', {
      timeZone: currentTimezone,
      weekday: 'long'
    });
    const weekdayName = formatterNoon.format(noonInTz);
    const weekdayMap = {
      'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
      'Thursday': 4, 'Friday': 5, 'Saturday': 6
    };
    const weekday = weekdayMap[weekdayName];

    const daySequences = [
      ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'],
      ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit'],
      ['Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'],
      ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh'],
      ['Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh'],
      ['Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal'],
      ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal']
    ];

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

    fetch(`https://api.sunrise-sunset.org/json?lat=${currentLat}&lng=${currentLng}&date=${dateStr}&formatted=0`)
      .then(r => r.json())
      .then(data => {
        let sunriseUTC, sunsetUTC;
        if (data.status === 'OK') {
          sunriseUTC = new Date(data.results.sunrise);
          sunsetUTC  = new Date(data.results.sunset);
        } else {
          sunriseUTC = new Date(Date.UTC(year, month - 1, day, 12, 30, 0));
          sunsetUTC  = new Date(Date.UTC(year, month - 1, day, 22, 30, 0));
        }

        const sunriseTime = sunriseUTC.getTime();
        const sunsetTime  = sunsetUTC.getTime();

        const dayDurationMs   = sunsetTime - sunriseTime;
        const nightDurationMs = (sunriseTime + 86400000) - sunsetTime;

        const dayMsRaw   = dayDurationMs / 8;
        const nightMsRaw = nightDurationMs / 8;

        const intDayMs   = Math.round(dayMsRaw);
        const intNightMs = Math.round(nightMsRaw);

        const dayStarts   = new Array(8).fill(0).map((_, i) => sunriseTime + Math.round(dayMsRaw * i));
        const nightStarts = new Array(8).fill(0).map((_, i) => sunsetTime + Math.round(nightMsRaw * i));

        const middayMs     = sunriseTime + (sunsetTime - sunriseTime) / 2;
        const abhijitStart = new Date(middayMs - 24 * 60 * 1000);
        const abhijitEnd   = new Date(middayMs + 24 * 60 * 1000);

        const rahuStartMs = sunriseTime + Math.round(dayMsRaw * rahuIndex);
        const rahuEndMs   = rahuStartMs + Math.round(dayMsRaw);

        function formatTime(ms) {
          return new Date(ms).toLocaleTimeString('en-US', {
            timeZone: currentTimezone,
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          });
        }

        function makeTable(seq, starts, durationMs, title) {
          let html = `<h2>${title}</h2><table>`;
          const warningIndices = title.includes('Day')
            ? [rahuIndex, kaalVelaIndex, vaarVelaIndex]
            : seq.reduce((acc, t, i) => { if (t === 'Labh') acc.push(i); return acc; }, []);

          seq.forEach((type, idx) => {
            const startMs = starts[idx];
            const endMs   = startMs + durationMs;

            const isActive = nowMs >= startMs && nowMs < endMs;

            const cls = auspicious.has(type) ? 'good' : 'bad';
            const rowClass = isActive ? `${cls} active-now` : cls;

            let prefix = '';
            if (warningIndices.includes(idx)) {
              prefix = (title.includes('Day') && idx === rahuIndex) ? '👹 ' : '⚠️ ';
            }

            const icon = isActive ? '⏳ ' : '';

            html += `<tr class="${rowClass}">
              <td>${prefix}${type}</td>
              <td><span class="active-period-time">${formatTime(startMs)} – ${formatTime(endMs)}</span> <span class="active-period-icon">${icon}</span></td>
            </tr>`;
          });

          html += '</table>';
          return html;
        }

        const html = `
          <div class="mb-1">
            <span>${new Date(nowMs).toLocaleDateString('en-US', {timeZone: currentTimezone})}, ${currentCityName}, </span>
            <span>${formatTime(nowMs)}</span>
          </div>

          <div class="flexbox">
            <div class="abhijit-box">
              Abhijit Muhurat (Auspicious)<br>
              ${formatTime(abhijitStart.getTime())} – ${formatTime(abhijitEnd.getTime())}
            </div>

            <div class="rahu-box">
              👹 Rahu Kaal (Avoid)<br>
              ${formatTime(rahuStartMs)} – ${formatTime(rahuEndMs)}
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

        contentDiv.innerHTML = html;
      })
      .catch(() => {
        contentDiv.innerHTML = '<p class="error">Failed to load sunrise/sunset data.</p>';
      });
  }
});