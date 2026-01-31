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
  { name: "Almaty, Kazakhstan", lat: 43.2220, lng: 76.8512, tz: "Asia/Almaty" },
  { name: "Amman, Jordan", lat: 31.9539, lng: 35.9106, tz: "Asia/Amman" },
  { name: "Astana, Kazakhstan", lat: 51.1694, lng: 71.4491, tz: "Asia/Almaty" },
  { name: "Baghdad, Iraq", lat: 33.3152, lng: 44.3661, tz: "Asia/Baghdad" },
  { name: "Baku, Azerbaijan", lat: 40.4093, lng: 49.8671, tz: "Asia/Baku" },
  { name: "Bangkok, Thailand", lat: 13.7563, lng: 100.5018, tz: "Asia/Bangkok" },
  { name: "Beijing, China", lat: 39.9042, lng: 116.4074, tz: "Asia/Shanghai" },
  { name: "Beirut, Lebanon", lat: 33.8938, lng: 35.5018, tz: "Asia/Beirut" },
  { name: "Bishkek, Kyrgyzstan", lat: 42.8746, lng: 74.5698, tz: "Asia/Bishkek" },
  { name: "Busan, South Korea", lat: 35.1796, lng: 129.0756, tz: "Asia/Seoul" },
  { name: "Chongqing, China", lat: 29.5630, lng: 106.5516, tz: "Asia/Shanghai" },
  { name: "Daegu, South Korea", lat: 35.8714, lng: 128.6014, tz: "Asia/Seoul" },
  { name: "Damascus, Syria", lat: 33.5138, lng: 36.2765, tz: "Asia/Damascus" },
  { name: "Dammam, Saudi Arabia", lat: 26.4344, lng: 50.1040, tz: "Asia/Riyadh" },
  { name: "Dhaka, Bangladesh", lat: 23.8103, lng: 90.4125, tz: "Asia/Dhaka" },
  { name: "Doha, Qatar", lat: 25.2854, lng: 51.5310, tz: "Asia/Qatar" },
  { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708, tz: "Asia/Dubai" },
  { name: "Dushanbe, Tajikistan", lat: 38.5598, lng: 68.7870, tz: "Asia/Dushanbe" },
  { name: "Guangzhou, China", lat: 23.1291, lng: 113.2644, tz: "Asia/Shanghai" },
  { name: "Hanoi, Vietnam", lat: 21.0285, lng: 105.8542, tz: "Asia/Ho_Chi_Minh" },
  { name: "Ho Chi Minh City, Vietnam", lat: 10.8231, lng: 106.6297, tz: "Asia/Ho_Chi_Minh" },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694, tz: "Asia/Hong_Kong" },
  { name: "Incheon, South Korea", lat: 37.4563, lng: 126.7052, tz: "Asia/Seoul" },
  { name: "Isfahan, Iran", lat: 32.6539, lng: 51.6660, tz: "Asia/Tehran" },
  { name: "Jakarta, Indonesia", lat: -6.2088, lng: 106.8456, tz: "Asia/Jakarta" },
  { name: "Jeddah, Saudi Arabia", lat: 21.4858, lng: 39.1925, tz: "Asia/Riyadh" },
  { name: "Karachi, Pakistan", lat: 24.8607, lng: 67.0011, tz: "Asia/Karachi" },
  { name: "Kuala Lumpur, Malaysia", lat: 3.1390, lng: 101.6869, tz: "Asia/Kuala_Lumpur" },
  { name: "Kuwait City, Kuwait", lat: 29.3759, lng: 47.9774, tz: "Asia/Kuwait" },
  { name: "Lahore, Pakistan", lat: 31.5204, lng: 74.3587, tz: "Asia/Karachi" },
  { name: "Manila, Philippines", lat: 14.5995, lng: 120.9842, tz: "Asia/Manila" },
  { name: "Mashhad, Iran", lat: 36.2895, lng: 59.6000, tz: "Asia/Tehran" },
  { name: "Mecca, Saudi Arabia", lat: 21.3891, lng: 39.8579, tz: "Asia/Riyadh" },
  { name: "Medina, Saudi Arabia", lat: 24.4681, lng: 39.6142, tz: "Asia/Riyadh" },
  { name: "Nagoya, Japan", lat: 35.1815, lng: 136.9066, tz: "Asia/Tokyo" },
  { name: "Osaka, Japan", lat: 34.6937, lng: 135.5022, tz: "Asia/Tokyo" },
  { name: "Phnom Penh, Cambodia", lat: 11.5564, lng: 104.9282, tz: "Asia/Phnom_Penh" },
  { name: "Pyongyang, North Korea", lat: 39.0392, lng: 125.7625, tz: "Asia/Pyongyang" },
  { name: "Quezon City, Philippines", lat: 14.6760, lng: 121.0437, tz: "Asia/Manila" },
  { name: "Riyadh, Saudi Arabia", lat: 24.7136, lng: 46.6753, tz: "Asia/Riyadh" },
  { name: "Seoul, South Korea", lat: 37.5665, lng: 126.9780, tz: "Asia/Seoul" },
  { name: "Shanghai, China", lat: 31.2304, lng: 121.4737, tz: "Asia/Shanghai" },
  { name: "Shenzhen, China", lat: 22.5431, lng: 114.0579, tz: "Asia/Shanghai" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, tz: "Asia/Singapore" },
  { name: "Tabriz, Iran", lat: 38.0667, lng: 46.3000, tz: "Asia/Tehran" },
  { name: "Taipei, Taiwan", lat: 25.0330, lng: 121.5654, tz: "Asia/Taipei" },
  { name: "Tashkent, Uzbekistan", lat: 41.2995, lng: 69.2401, tz: "Asia/Tashkent" },
  { name: "Tehran, Iran", lat: 35.6892, lng: 51.3890, tz: "Asia/Tehran" },
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
  { name: "Karlovac, Croatia", lat: 45.4875, lng: 15.5478, tz: "Europe/Zagreb" },
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
  { name: "Požega, Croatia", lat: 45.3400, lng: 17.6850, tz: "Europe/Zagreb" },
  { name: "Prague, Czech Republic", lat: 50.0755, lng: 14.4378, tz: "Europe/Prague" },
  { name: "Pula, Croatia", lat: 44.8683, lng: 13.8481, tz: "Europe/Zagreb" },
  { name: "Riga, Latvia", lat: 56.9496, lng: 24.1052, tz: "Europe/Riga" },
  { name: "Rijeka, Croatia", lat: 45.3271, lng: 14.4424, tz: "Europe/Zagreb" },
  { name: "Rome, Italy", lat: 41.9028, lng: 12.4964, tz: "Europe/Rome" },
  { name: "Saint Petersburg, Russia", lat: 59.9343, lng: 30.3351, tz: "Europe/Moscow" },
  { name: "Seville, Spain", lat: 37.3891, lng: -5.9845, tz: "Europe/Madrid" },
  { name: "Sheffield, UK", lat: 53.3811, lng: -1.4701, tz: "Europe/London" },
  { name: "Slavonski Brod, Croatia", lat: 45.1532, lng: 18.0085, tz: "Europe/Zagreb" },
  { name: "Sofia, Bulgaria", lat: 42.6977, lng: 23.3219, tz: "Europe/Sofia" },
  { name: "Split, Croatia", lat: 43.5081, lng: 16.4402, tz: "Europe/Zagreb" },
  { name: "Stockholm, Sweden", lat: 59.3293, lng: 18.0686, tz: "Europe/Stockholm" },
  { name: "Strasbourg, France", lat: 48.5734, lng: 7.7521, tz: "Europe/Paris" },
  { name: "Stuttgart, Germany", lat: 48.7758, lng: 9.1829, tz: "Europe/Berlin" },
  { name: "Toulouse, France", lat: 43.6047, lng: 1.4442, tz: "Europe/Paris" },
  { name: "Sibenik, Croatia", lat: 43.7272, lng: 15.9058, tz: "Europe/Zagreb" },
  { name: "Turin, Italy", lat: 45.0703, lng: 7.6869, tz: "Europe/Rome" },
  { name: "Varaždin, Croatia", lat: 46.3057, lng: 16.3366, tz: "Europe/Zagreb" },
  { name: "Valencia, Spain", lat: 39.4699, lng: -0.3763, tz: "Europe/Madrid" },
  { name: "Vienna, Austria", lat: 48.2082, lng: 16.3738, tz: "Europe/Vienna" },
  { name: "Warsaw, Poland", lat: 52.2297, lng: 21.0122, tz: "Europe/Warsaw" },
  { name: "Wroclaw, Poland", lat: 51.1079, lng: 17.0385, tz: "Europe/Warsaw" },
  { name: "Zaragoza, Spain", lat: 41.6488, lng: -0.8891, tz: "Europe/Madrid" },
  { name: "Zadar, Croatia", lat: 44.1194, lng: 15.2422, tz: "Europe/Zagreb" },
  { name: "Zagreb, Croatia", lat: 45.8150, lng: 15.9819, tz: "Europe/Zagreb" },
  { name: "Zurich, Switzerland", lat: 47.3769, lng: 8.5417, tz: "Europe/Zurich" },

  // India
  { name: "Agra, India", lat: 27.1767, lng: 78.0081, tz: "Asia/Kolkata" },
  { name: "Ahmedabad, India", lat: 23.0225, lng: 72.5714, tz: "Asia/Kolkata" },
  { name: "Agartala, India", lat: 23.8315, lng: 91.2868, tz: "Asia/Kolkata" },
  { name: "Aizawl, India", lat: 23.7272, lng: 92.7176, tz: "Asia/Kolkata" },
  { name: "Ajmer, India", lat: 26.4499, lng: 74.6399, tz: "Asia/Kolkata" },
  { name: "Aligarh, India", lat: 27.8974, lng: 78.0880, tz: "Asia/Kolkata" },
  { name: "Allahabad, India", lat: 25.4358, lng: 81.8463, tz: "Asia/Kolkata" },
  { name: "Amravati, India", lat: 20.9374, lng: 77.7796, tz: "Asia/Kolkata" },
  { name: "Amritsar, India", lat: 31.6340, lng: 74.8723, tz: "Asia/Kolkata" },
  { name: "Asansol, India", lat: 23.6739, lng: 86.9524, tz: "Asia/Kolkata" },
  { name: "Aurangabad, India", lat: 19.8762, lng: 75.3433, tz: "Asia/Kolkata" },
  { name: "Bhilwara, India", lat: 25.3460, lng: 74.6360, tz: "Asia/Kolkata" },
  { name: "Bokaro, India", lat: 23.6693, lng: 86.1511, tz: "Asia/Kolkata" },
  { name: "Davangere, India", lat: 14.4661, lng: 75.9238, tz: "Asia/Kolkata" },
  { name: "Durg, India", lat: 21.1878, lng: 81.2849, tz: "Asia/Kolkata" },
  { name: "Bareilly, India", lat: 28.3670, lng: 79.4300, tz: "Asia/Kolkata" },
  { name: "Belgaum, India", lat: 15.8497, lng: 74.4977, tz: "Asia/Kolkata" },
  { name: "Bengaluru, India", lat: 12.9716, lng: 77.5946, tz: "Asia/Kolkata" },
  { name: "Bhopal, India", lat: 23.2599, lng: 77.4126, tz: "Asia/Kolkata" },
  { name: "Bhubaneswar, India", lat: 20.2961, lng: 85.8245, tz: "Asia/Kolkata" },
  { name: "Bhavnagar, India", lat: 21.7645, lng: 72.1519, tz: "Asia/Kolkata" },
  { name: "Bhilai, India", lat: 21.1936, lng: 81.3509, tz: "Asia/Kolkata" },
  { name: "Bhiwandi, India", lat: 19.2813, lng: 72.9312, tz: "Asia/Kolkata" },
  { name: "Bhopal, India", lat: 23.2599, lng: 77.4126, tz: "Asia/Kolkata" },
  { name: "Bhubaneswar, India", lat: 20.2961, lng: 85.8245, tz: "Asia/Kolkata" },
  { name: "Bikaner, India", lat: 28.0229, lng: 73.3119, tz: "Asia/Kolkata" },
  { name: "Chandigarh, India", lat: 30.7333, lng: 76.7794, tz: "Asia/Kolkata" },
  { name: "Chennai, India", lat: 13.0827, lng: 80.2707, tz: "Asia/Kolkata" },
  { name: "Coimbatore, India", lat: 11.0168, lng: 76.9558, tz: "Asia/Kolkata" },
  { name: "Cuttack, India", lat: 20.4625, lng: 85.8828, tz: "Asia/Kolkata" },
  { name: "Dehradun, India", lat: 30.3165, lng: 78.0322, tz: "Asia/Kolkata" },
  { name: "Delhi, India", lat: 28.7041, lng: 77.1025, tz: "Asia/Kolkata" },
  { name: "Dhanbad, India", lat: 23.7957, lng: 86.4304, tz: "Asia/Kolkata" },
  { name: "Durgapur, India", lat: 23.5204, lng: 87.3119, tz: "Asia/Kolkata" },
  { name: "Faridabad, India", lat: 28.4089, lng: 77.3176, tz: "Asia/Kolkata" },
  { name: "Ghaziabad, India", lat: 28.6692, lng: 77.4538, tz: "Asia/Kolkata" },
  { name: "Gorakhpur, India", lat: 26.7606, lng: 83.3732, tz: "Asia/Kolkata" },
  { name: "Gulbarga, India", lat: 17.3290, lng: 76.8250, tz: "Asia/Kolkata" },
  { name: "Guntur, India", lat: 16.3067, lng: 80.4365, tz: "Asia/Kolkata" },
  { name: "Guwahati, India", lat: 26.1445, lng: 91.7362, tz: "Asia/Kolkata" },
  { name: "Gwalior, India", lat: 26.2183, lng: 78.1828, tz: "Asia/Kolkata" },
  { name: "Howrah, India", lat: 22.5958, lng: 88.2636, tz: "Asia/Kolkata" },
  { name: "Hubli, India", lat: 15.3647, lng: 75.1240, tz: "Asia/Kolkata" },
  { name: "Hyderabad, India", lat: 17.3850, lng: 78.4867, tz: "Asia/Kolkata" },
  { name: "Imphal, India", lat: 24.8170, lng: 93.9368, tz: "Asia/Kolkata" },
  { name: "Indore, India", lat: 22.7196, lng: 75.8577, tz: "Asia/Kolkata" },
  { name: "Jabalpur, India", lat: 23.1815, lng: 79.9864, tz: "Asia/Kolkata" },
  { name: "Jaipur, India", lat: 26.9124, lng: 75.7873, tz: "Asia/Kolkata" },
  { name: "Jalandhar, India", lat: 31.3260, lng: 75.5762, tz: "Asia/Kolkata" },
  { name: "Jamnagar, India", lat: 22.4707, lng: 70.0577, tz: "Asia/Kolkata" },
  { name: "Jamshedpur, India", lat: 22.8046, lng: 86.2029, tz: "Asia/Kolkata" },
  { name: "Jodhpur, India", lat: 26.2389, lng: 73.0243, tz: "Asia/Kolkata" },
  { name: "Kalyan, India", lat: 19.2437, lng: 73.1355, tz: "Asia/Kolkata" },
  { name: "Kanpur, India", lat: 26.4499, lng: 80.3319, tz: "Asia/Kolkata" },
  { name: "Karnal, India", lat: 29.6857, lng: 76.9905, tz: "Asia/Kolkata" },
  { name: "Kochi, India", lat: 9.9312, lng: 76.2673, tz: "Asia/Kolkata" },
  { name: "Kolhapur, India", lat: 16.7050, lng: 74.2433, tz: "Asia/Kolkata" },
  { name: "Kolkata, India", lat: 22.5726, lng: 88.3639, tz: "Asia/Kolkata" },
  { name: "Kota, India", lat: 25.2138, lng: 75.8338, tz: "Asia/Kolkata" },
  { name: "Kurnool, India", lat: 15.8281, lng: 78.0371, tz: "Asia/Kolkata" },
  { name: "Lucknow, India", lat: 26.8467, lng: 80.9462, tz: "Asia/Kolkata" },
  { name: "Ludhiana, India", lat: 30.9010, lng: 75.8573, tz: "Asia/Kolkata" },
  { name: "Madurai, India", lat: 9.9252, lng: 78.1198, tz: "Asia/Kolkata" },
  { name: "Mangalore, India", lat: 12.9141, lng: 74.8560, tz: "Asia/Kolkata" },
  { name: "Meerut, India", lat: 28.9845, lng: 77.7064, tz: "Asia/Kolkata" },
  { name: "Moradabad, India", lat: 28.8389, lng: 78.7735, tz: "Asia/Kolkata" },
  { name: "Mumbai, India", lat: 19.0760, lng: 72.8777, tz: "Asia/Kolkata" },
  { name: "Mysore, India", lat: 12.2958, lng: 76.6394, tz: "Asia/Kolkata" },
  { name: "Nagpur, India", lat: 21.1458, lng: 79.0882, tz: "Asia/Kolkata" },
  { name: "Nanded, India", lat: 19.1383, lng: 77.3170, tz: "Asia/Kolkata" },
  { name: "Nashik, India", lat: 19.9975, lng: 73.7898, tz: "Asia/Kolkata" },
  { name: "Navi Mumbai, India", lat: 19.0330, lng: 73.0297, tz: "Asia/Kolkata" },
  { name: "Nellore, India", lat: 14.4426, lng: 79.9865, tz: "Asia/Kolkata" },
  { name: "Noida, India", lat: 28.5355, lng: 77.3910, tz: "Asia/Kolkata" },
  { name: "Panipat, India", lat: 29.3909, lng: 76.9635, tz: "Asia/Kolkata" },
  { name: "Patna, India", lat: 25.5941, lng: 85.1376, tz: "Asia/Kolkata" },
  { name: "Pimpri-Chinchwad, India", lat: 18.5204, lng: 73.8567, tz: "Asia/Kolkata" },
  { name: "Pune, India", lat: 18.5204, lng: 73.8567, tz: "Asia/Kolkata" },
  { name: "Raipur, India", lat: 21.2514, lng: 81.6296, tz: "Asia/Kolkata" },
  { name: "Rajkot, India", lat: 22.3039, lng: 70.8022, tz: "Asia/Kolkata" },
  { name: "Ranchi, India", lat: 23.3441, lng: 85.3096, tz: "Asia/Kolkata" },
  { name: "Rohtak, India", lat: 28.8955, lng: 76.6066, tz: "Asia/Kolkata" },
  { name: "Rourkela, India", lat: 22.2280, lng: 84.8641, tz: "Asia/Kolkata" },
  { name: "Saharanpur, India", lat: 29.9680, lng: 77.5451, tz: "Asia/Kolkata" },
  { name: "Salem, India", lat: 11.6643, lng: 78.1460, tz: "Asia/Kolkata" },
  { name: "Sangli, India", lat: 16.8524, lng: 74.5815, tz: "Asia/Kolkata" },
  { name: "Shimla, India", lat: 31.1048, lng: 77.1734, tz: "Asia/Kolkata" },
  { name: "Siliguri, India", lat: 26.7271, lng: 88.3953, tz: "Asia/Kolkata" },
  { name: "Solapur, India", lat: 17.6599, lng: 75.9064, tz: "Asia/Kolkata" },
  { name: "Srinagar, India", lat: 34.0837, lng: 74.7974, tz: "Asia/Kolkata" },
  { name: "Surat, India", lat: 21.1702, lng: 72.8311, tz: "Asia/Kolkata" },
  { name: "Thane, India", lat: 19.2183, lng: 72.9781, tz: "Asia/Kolkata" },
  { name: "Thiruvananthapuram, India", lat: 8.5241, lng: 76.9366, tz: "Asia/Kolkata" },
  { name: "Thrissur, India", lat: 10.5276, lng: 76.2144, tz: "Asia/Kolkata" },
  { name: "Tiruchirappalli, India", lat: 10.7905, lng: 78.7047, tz: "Asia/Kolkata" },
  { name: "Tirunelveli, India", lat: 8.7139, lng: 77.7567, tz: "Asia/Kolkata" },
  { name: "Tiruppur, India", lat: 11.1085, lng: 77.3411, tz: "Asia/Kolkata" },
  { name: "Udaipur, India", lat: 24.5854, lng: 73.7125, tz: "Asia/Kolkata" },
  { name: "Udupi, India", lat: 13.3409, lng: 74.7421, tz: "Asia/Kolkata" },
  { name: "Ujjain, India", lat: 23.1765, lng: 75.7885, tz: "Asia/Kolkata" },
  { name: "Vadodara, India", lat: 22.3072, lng: 73.1812, tz: "Asia/Kolkata" },
  { name: "Varanasi, India", lat: 25.3176, lng: 82.9739, tz: "Asia/Kolkata" },
  { name: "Vasai-Virar, India", lat: 19.3910, lng: 72.8390, tz: "Asia/Kolkata" },
  { name: "Vellore, India", lat: 12.9165, lng: 79.1325, tz: "Asia/Kolkata" },
  { name: "Vijayawada, India", lat: 16.5062, lng: 80.6480, tz: "Asia/Kolkata" },
  { name: "Visakhapatnam, India", lat: 17.6868, lng: 83.2185, tz: "Asia/Kolkata" },
  { name: "Warangal, India", lat: 17.9689, lng: 79.5941, tz: "Asia/Kolkata" },

  // North America
  { name: "Abilene, USA", lat: 32.4487, lng: -99.7331, tz: "America/Chicago" },
  { name: "Akron, USA", lat: 41.0814, lng: -81.5190, tz: "America/New_York" },
  { name: "Albuquerque, USA", lat: 35.0844, lng: -106.6504, tz: "America/Denver" },
  { name: "Alexandria, USA", lat: 38.8048, lng: -77.0469, tz: "America/New_York" },
  { name: "Allen, USA", lat: 33.1032, lng: -96.6706, tz: "America/Chicago" },
  { name: "Amarillo, USA", lat: 35.2220, lng: -101.8313, tz: "America/Chicago" },
  { name: "Anaheim, USA", lat: 33.8353, lng: -117.9145, tz: "America/Los_Angeles" },
  { name: "Anchorage, USA", lat: 61.2181, lng: -149.9003, tz: "America/Anchorage" },
  { name: "Arlington, TX, USA", lat: 32.7357, lng: -97.1081, tz: "America/Chicago" }, // TX
  { name: "Arlington, VA, USA", lat: 38.8810, lng: -77.1043, tz: "America/New_York" }, // VA
  { name: "Athens, USA", lat: 33.9519, lng: -83.3576, tz: "America/New_York" },
  { name: "Atlanta, USA", lat: 33.7490, lng: -84.3880, tz: "America/New_York" },
  { name: "Augusta, USA", lat: 33.4735, lng: -82.0105, tz: "America/New_York" },
  { name: "Aurora, CO, USA", lat: 39.7294, lng: -104.8319, tz: "America/Denver" }, // CO
  { name: "Aurora, IL, USA", lat: 41.7572, lng: -88.3148, tz: "America/Chicago" }, // IL
  { name: "Austin, USA", lat: 30.2672, lng: -97.7431, tz: "America/Chicago" },
  { name: "Bakersfield, USA", lat: 35.3733, lng: -119.0187, tz: "America/Los_Angeles" },
  { name: "Baltimore, USA", lat: 39.2904, lng: -76.6122, tz: "America/New_York" },
  { name: "Baton Rouge, USA", lat: 30.4515, lng: -91.1871, tz: "America/Chicago" },
  { name: "Beaumont, USA", lat: 30.0802, lng: -94.1266, tz: "America/Chicago" },
  { name: "Bellevue, USA", lat: 47.6104, lng: -122.2007, tz: "America/Los_Angeles" },
  { name: "Berkeley, USA", lat: 37.8715, lng: -122.2730, tz: "America/Los_Angeles" },
  { name: "Billings, USA", lat: 45.7833, lng: -108.5007, tz: "America/Denver" },
  { name: "Birmingham, USA", lat: 33.5207, lng: -86.8025, tz: "America/Chicago" },
  { name: "Boise, USA", lat: 43.6150, lng: -116.2023, tz: "America/Denver" },
  { name: "Boston, USA", lat: 42.3601, lng: -71.0589, tz: "America/New_York" },
  { name: "Boulder, USA", lat: 40.0150, lng: -105.2705, tz: "America/Denver" },
  { name: "Bridgeport, USA", lat: 41.1792, lng: -73.1895, tz: "America/New_York" },
  { name: "Broken Arrow, USA", lat: 36.0526, lng: -95.7908, tz: "America/Chicago" },
  { name: "Brownsville, USA", lat: 25.9018, lng: -97.4975, tz: "America/Chicago" },
  { name: "Buffalo, USA", lat: 42.8864, lng: -78.8784, tz: "America/New_York" },
  { name: "Burbank, USA", lat: 34.1808, lng: -118.3090, tz: "America/Los_Angeles" },
  { name: "Cambridge, USA", lat: 42.3736, lng: -71.1097, tz: "America/New_York" },
  { name: "Canton, USA", lat: 40.7989, lng: -81.3784, tz: "America/New_York" },
  { name: "Cape Coral, USA", lat: 26.6406, lng: -81.8723, tz: "America/New_York" },
  { name: "Carlsbad, USA", lat: 33.1581, lng: -117.3506, tz: "America/Los_Angeles" },
  { name: "Carrollton, USA", lat: 32.9536, lng: -96.8903, tz: "America/Chicago" },
  { name: "Cary, USA", lat: 35.7915, lng: -78.7811, tz: "America/New_York" },
  { name: "Cedar Rapids, USA", lat: 41.9779, lng: -91.6656, tz: "America/Chicago" },
  { name: "Chandler, USA", lat: 33.3062, lng: -111.8413, tz: "America/Phoenix" },
  { name: "Charleston, USA", lat: 32.7765, lng: -79.9311, tz: "America/New_York" },
  { name: "Charlotte, USA", lat: 35.2271, lng: -80.8431, tz: "America/New_York" },
  { name: "Chattanooga, USA", lat: 35.0456, lng: -85.3097, tz: "America/New_York" },
  { name: "Chesapeake, USA", lat: 36.7682, lng: -76.2872, tz: "America/New_York" },
  { name: "Chicago, USA", lat: 41.8781, lng: -87.6298, tz: "America/Chicago" },
  { name: "Chula Vista, USA", lat: 32.6400, lng: -117.0842, tz: "America/Los_Angeles" },
  { name: "Cincinnati, USA", lat: 39.1031, lng: -84.5120, tz: "America/New_York" },
  { name: "Clarksville, USA", lat: 36.5298, lng: -87.3595, tz: "America/Chicago" },
  { name: "Clearwater, USA", lat: 27.9661, lng: -82.7741, tz: "America/New_York" },
  { name: "Cleveland, USA", lat: 41.5055, lng: -81.6813, tz: "America/New_York" },
  { name: "College Station, USA", lat: 30.6280, lng: -96.3344, tz: "America/Chicago" },
  { name: "Colorado Springs, USA", lat: 38.8339, lng: -104.8214, tz: "America/Denver" },
  { name: "Columbia, USA", lat: 34.0007, lng: -81.0348, tz: "America/New_York" },
  { name: "Columbus, OH, USA", lat: 39.9612, lng: -82.9988, tz: "America/New_York" }, // OH
  { name: "Columbus, GA, USA", lat: 32.4609, lng: -84.9877, tz: "America/New_York" }, // GA
  { name: "Concord, USA", lat: 37.9780, lng: -122.0311, tz: "America/Los_Angeles" },
  { name: "Corona, USA", lat: 33.8756, lng: -117.5664, tz: "America/Los_Angeles" },
  { name: "Corpus Christi, USA", lat: 27.8003, lng: -97.3956, tz: "America/Chicago" },
  { name: "Costa Mesa, USA", lat: 33.6637, lng: -117.9048, tz: "America/Los_Angeles" },
  { name: "Dallas, USA", lat: 32.7767, lng: -96.7970, tz: "America/Chicago" },
  { name: "Daly City, USA", lat: 37.6879, lng: -122.4702, tz: "America/Los_Angeles" },
  { name: "Dayton, USA", lat: 39.7589, lng: -84.1916, tz: "America/New_York" },
  { name: "Dearborn, USA", lat: 42.3223, lng: -83.1763, tz: "America/Detroit" },
  { name: "Denton, USA", lat: 33.2148, lng: -97.1331, tz: "America/Chicago" },
  { name: "Denver, USA", lat: 39.7392, lng: -104.9903, tz: "America/Denver" },
  { name: "Des Moines, USA", lat: 41.5868, lng: -93.6250, tz: "America/Chicago" },
  { name: "Detroit, USA", lat: 42.3314, lng: -83.0458, tz: "America/Detroit" },
  { name: "Downey, USA", lat: 33.9401, lng: -118.1332, tz: "America/Los_Angeles" },
  { name: "Durham, USA", lat: 35.9940, lng: -78.8986, tz: "America/New_York" },
  { name: "El Cajon, USA", lat: 32.7948, lng: -116.9625, tz: "America/Los_Angeles" },
  { name: "El Monte, USA", lat: 34.0686, lng: -118.0276, tz: "America/Los_Angeles" },
  { name: "El Paso, USA", lat: 31.7619, lng: -106.4850, tz: "America/Denver" },
  { name: "Elgin, USA", lat: 42.0372, lng: -88.2812, tz: "America/Chicago" },
  { name: "Elizabeth, USA", lat: 40.6639, lng: -74.2107, tz: "America/New_York" },
  { name: "Escondido, USA", lat: 33.1192, lng: -117.0864, tz: "America/Los_Angeles" },
  { name: "Eugene, USA", lat: 44.0521, lng: -123.0868, tz: "America/Los_Angeles" },
  { name: "Fairfield, USA", lat: 38.2494, lng: -122.0399, tz: "America/Los_Angeles" },
  { name: "Fairview Park, Ohio, USA", lat: 41.4414, lng: -81.8643, tz: "America/New_York" },
  { name: "Fargo, USA", lat: 46.8772, lng: -96.7898, tz: "America/Chicago" },
  { name: "Fayetteville, USA", lat: 35.0527, lng: -78.8784, tz: "America/New_York" },
  { name: "Flint, USA", lat: 43.0125, lng: -83.6875, tz: "America/Detroit" },
  { name: "Fontana, USA", lat: 34.0922, lng: -117.4350, tz: "America/Los_Angeles" },
  { name: "Fort Collins, USA", lat: 40.5853, lng: -105.0844, tz: "America/Denver" },
  { name: "Fort Lauderdale, USA", lat: 26.1224, lng: -80.1373, tz: "America/New_York" },
  { name: "Fort Wayne, USA", lat: 41.0793, lng: -85.1394, tz: "America/Indiana/Indianapolis" },
  { name: "Fort Worth, USA", lat: 32.7555, lng: -97.3308, tz: "America/Chicago" },
  { name: "Fremont, USA", lat: 37.5485, lng: -121.9886, tz: "America/Los_Angeles" },
  { name: "Fresno, USA", lat: 36.7378, lng: -119.7871, tz: "America/Los_Angeles" },
  { name: "Frisco, USA", lat: 33.1507, lng: -96.8236, tz: "America/Chicago" },
  { name: "Fullerton, USA", lat: 33.8704, lng: -117.9242, tz: "America/Los_Angeles" },
  { name: "Gainesville, USA", lat: 29.6516, lng: -82.3248, tz: "America/New_York" },
  { name: "Garden Grove, USA", lat: 33.7739, lng: -117.9414, tz: "America/Los_Angeles" },
  { name: "Garland, USA", lat: 32.9126, lng: -96.6389, tz: "America/Chicago" },
  { name: "Gilbert, USA", lat: 33.3528, lng: -111.7890, tz: "America/Phoenix" },
  { name: "Glendale, CA, USA", lat: 34.1425, lng: -118.2551, tz: "America/Los_Angeles" }, // CA
  { name: "Glendale, AZ, USA", lat: 33.5387, lng: -112.1860, tz: "America/Phoenix" }, // AZ
  { name: "Grand Prairie, USA", lat: 32.7459, lng: -96.9978, tz: "America/Chicago" },
  { name: "Grand Rapids, USA", lat: 42.9634, lng: -85.6681, tz: "America/Detroit" },
  { name: "Green Bay, USA", lat: 44.5133, lng: -88.0133, tz: "America/Chicago" },
  { name: "Greensboro, USA", lat: 36.0726, lng: -79.7910, tz: "America/New_York" },
  { name: "Gresham, USA", lat: 45.5001, lng: -122.4337, tz: "America/Los_Angeles" },
  { name: "Hampton, USA", lat: 37.0299, lng: -76.3452, tz: "America/New_York" },
  { name: "Henderson, USA", lat: 36.0395, lng: -114.9817, tz: "America/Los_Angeles" },
  { name: "Hialeah, USA", lat: 25.8576, lng: -80.2781, tz: "America/New_York" },
  { name: "High Point, USA", lat: 35.9557, lng: -80.0053, tz: "America/New_York" },
  { name: "Hollywood, USA", lat: 26.0112, lng: -80.1495, tz: "America/New_York" },
  { name: "Honolulu, USA", lat: 21.3069, lng: -157.8583, tz: "Pacific/Honolulu" },
  { name: "Houston, USA", lat: 29.7604, lng: -95.3698, tz: "America/Chicago" },
  { name: "Huntington Beach, USA", lat: 33.6595, lng: -117.9992, tz: "America/Los_Angeles" },
  { name: "Huntsville, USA", lat: 34.7304, lng: -86.5861, tz: "America/Chicago" },
  { name: "Independence, USA", lat: 39.0911, lng: -94.4155, tz: "America/Chicago" },
  { name: "Indianapolis, USA", lat: 39.7684, lng: -86.1581, tz: "America/Indiana/Indianapolis" },
  { name: "Inglewood, USA", lat: 33.9617, lng: -118.3531, tz: "America/Los_Angeles" },
  { name: "Irvine, USA", lat: 33.6846, lng: -117.8265, tz: "America/Los_Angeles" },
  { name: "Irving, USA", lat: 32.8140, lng: -96.9489, tz: "America/Chicago" },
  { name: "Jackson, USA", lat: 32.2988, lng: -90.1848, tz: "America/Chicago" },
  { name: "Jacksonville, USA", lat: 30.3322, lng: -81.6557, tz: "America/New_York" },
  { name: "Jersey City, USA", lat: 40.7282, lng: -74.0776, tz: "America/New_York" },
  { name: "Joliet, USA", lat: 41.5264, lng: -88.0837, tz: "America/Chicago" },
  { name: "Kansas City, USA", lat: 39.0997, lng: -94.5786, tz: "America/Chicago" },
  { name: "Kenosha, USA", lat: 42.5847, lng: -87.8212, tz: "America/Chicago" },
  { name: "Kent, USA", lat: 47.3809, lng: -122.2348, tz: "America/Los_Angeles" },
  { name: "Killeen, USA", lat: 31.1171, lng: -97.7278, tz: "America/Chicago" },
  { name: "Knoxville, USA", lat: 35.9606, lng: -83.9207, tz: "America/New_York" },
  { name: "Lafayette, USA", lat: 30.2241, lng: -92.0198, tz: "America/Chicago" },
  { name: "Lakewood, USA", lat: 39.7047, lng: -105.0814, tz: "America/Denver" },
  { name: "Lancaster, USA", lat: 34.6981, lng: -118.1367, tz: "America/Los_Angeles" },
  { name: "Laredo, USA", lat: 27.5036, lng: -99.5075, tz: "America/Chicago" },
  { name: "Las Cruces, USA", lat: 32.3199, lng: -106.7637, tz: "America/Denver" },
  { name: "Las Vegas, USA", lat: 36.1699, lng: -115.1398, tz: "America/Los_Angeles" },
  { name: "Lewisville, USA", lat: 33.0462, lng: -96.9942, tz: "America/Chicago" },
  { name: "Lexington, USA", lat: 38.0406, lng: -84.5037, tz: "America/New_York" },
  { name: "Lincoln, USA", lat: 40.8136, lng: -96.7026, tz: "America/Chicago" },
  { name: "Little Rock, USA", lat: 34.7465, lng: -92.2896, tz: "America/Chicago" },
  { name: "Long Beach, USA", lat: 33.7701, lng: -118.1937, tz: "America/Los_Angeles" },
  { name: "Los Angeles, USA", lat: 34.0522, lng: -118.2437, tz: "America/Los_Angeles" },
  { name: "Louisville, USA", lat: 38.2527, lng: -85.7585, tz: "America/Kentucky/Louisville" },
  { name: "Lowell, USA", lat: 42.6334, lng: -71.3162, tz: "America/New_York" },
  { name: "Lubbock, USA", lat: 33.5779, lng: -101.8552, tz: "America/Chicago" },
  { name: "Lynchburg, USA", lat: 37.4138, lng: -79.1422, tz: "America/New_York" },
  { name: "Madison, USA", lat: 43.0731, lng: -89.4012, tz: "America/Chicago" },
  { name: "Manchester, USA", lat: 42.9956, lng: -71.4548, tz: "America/New_York" },
  { name: "McAllen, USA", lat: 26.2034, lng: -98.2300, tz: "America/Chicago" },
  { name: "McKinney, USA", lat: 33.1972, lng: -96.6398, tz: "America/Chicago" },
  { name: "Memphis, USA", lat: 35.1495, lng: -90.0490, tz: "America/Chicago" },
  { name: "Mesa, USA", lat: 33.4152, lng: -111.8315, tz: "America/Phoenix" },
  { name: "Mesquite, USA", lat: 32.7668, lng: -96.6097, tz: "America/Chicago" },
  { name: "Miami, USA", lat: 25.7617, lng: -80.1918, tz: "America/New_York" },
  { name: "Miami Gardens, USA", lat: 25.9420, lng: -80.2456, tz: "America/New_York" },
  { name: "Midland, USA", lat: 31.9973, lng: -102.0079, tz: "America/Chicago" },
  { name: "Milwaukee, USA", lat: 43.0389, lng: -87.9065, tz: "America/Chicago" },
  { name: "Minneapolis, USA", lat: 44.9778, lng: -93.2650, tz: "America/Chicago" },
  { name: "Miramar, USA", lat: 25.9871, lng: -80.2320, tz: "America/New_York" },
  { name: "Mobile, USA", lat: 30.6944, lng: -88.0431, tz: "America/Chicago" },
  { name: "Modesto, USA", lat: 37.6391, lng: -121.0010, tz: "America/Los_Angeles" },
  { name: "Montgomery, USA", lat: 32.3668, lng: -86.3000, tz: "America/Chicago" },
  { name: "Murrieta, USA", lat: 33.5539, lng: -117.2139, tz: "America/Los_Angeles" },
  { name: "Naperville, USA", lat: 41.7508, lng: -88.1535, tz: "America/Chicago" },
  { name: "Nashville, USA", lat: 36.1627, lng: -86.7816, tz: "America/Chicago" },
  { name: "New Haven, USA", lat: 41.3083, lng: -72.9279, tz: "America/New_York" },
  { name: "New Orleans, USA", lat: 29.9511, lng: -90.0715, tz: "America/Chicago" },
  { name: "New York, USA", lat: 40.7128, lng: -74.0060, tz: "America/New_York" },
  { name: "Newark, USA", lat: 40.7357, lng: -74.1724, tz: "America/New_York" },
  { name: "Newport News, USA", lat: 37.0871, lng: -76.4730, tz: "America/New_York" },
  { name: "Niagara Falls, USA", lat: 43.0962, lng: -79.0377, tz: "America/New_York" },
  { name: "Norfolk, USA", lat: 36.8508, lng: -76.2852, tz: "America/New_York" },
  { name: "Norman, USA", lat: 35.2226, lng: -97.4395, tz: "America/Chicago" },
  { name: "North Charleston, USA", lat: 32.8853, lng: -80.0168, tz: "America/New_York" },
  { name: "North Las Vegas, USA", lat: 36.1989, lng: -115.1175, tz: "America/Los_Angeles" },
  { name: "Norwalk, USA", lat: 33.9022, lng: -118.0817, tz: "America/Los_Angeles" },
  { name: "Oakland, USA", lat: 37.8044, lng: -122.2711, tz: "America/Los_Angeles" },
  { name: "Oceanside, USA", lat: 33.1959, lng: -117.3795, tz: "America/Los_Angeles" },
  { name: "Odessa, USA", lat: 31.8457, lng: -102.3676, tz: "America/Chicago" },
  { name: "Oklahoma City, USA", lat: 35.4676, lng: -97.5164, tz: "America/Chicago" },
  { name: "Olathe, USA", lat: 38.8814, lng: -94.8191, tz: "America/Chicago" },
  { name: "Omaha, USA", lat: 41.2565, lng: -95.9345, tz: "America/Chicago" },
  { name: "Ontario, USA", lat: 34.0633, lng: -117.6509, tz: "America/Los_Angeles" },
  { name: "Orange, USA", lat: 33.7879, lng: -117.8531, tz: "America/Los_Angeles" },
  { name: "Orlando, USA", lat: 28.5383, lng: -81.3792, tz: "America/New_York" },
  { name: "Overland Park, USA", lat: 38.9822, lng: -94.6708, tz: "America/Chicago" },
  { name: "Oxnard, USA", lat: 34.1706, lng: -119.1771, tz: "America/Los_Angeles" },
  { name: "Palmdale, USA", lat: 34.5794, lng: -118.1165, tz: "America/Los_Angeles" },
  { name: "Pasadena, USA", lat: 34.1478, lng: -118.1445, tz: "America/Los_Angeles" },
  { name: "Paterson, USA", lat: 40.9168, lng: -74.1711, tz: "America/New_York" },
  { name: "Pembroke Pines, USA", lat: 26.0032, lng: -80.2239, tz: "America/New_York" },
  { name: "Peoria, USA", lat: 33.5804, lng: -112.2374, tz: "America/Phoenix" },
  { name: "Peoria, USA", lat: 40.6936, lng: -89.5890, tz: "America/Chicago" },
  { name: "Philadelphia, USA", lat: 39.9526, lng: -75.1652, tz: "America/New_York" },
  { name: "Phoenix, USA", lat: 33.4484, lng: -112.0740, tz: "America/Phoenix" },
  { name: "Pittsburgh, USA", lat: 40.4406, lng: -79.9959, tz: "America/New_York" },
  { name: "Plano, USA", lat: 33.0198, lng: -96.6989, tz: "America/Chicago" },
  { name: "Pomona, USA", lat: 34.0551, lng: -117.7510, tz: "America/Los_Angeles" },
  { name: "Pompano Beach, USA", lat: 26.2379, lng: -80.1248, tz: "America/New_York" },
  { name: "Portland, USA", lat: 45.5152, lng: -122.6784, tz: "America/Los_Angeles" },
  { name: "Providence, USA", lat: 41.8240, lng: -71.4128, tz: "America/New_York" },
  { name: "Provo, USA", lat: 40.2338, lng: -111.6585, tz: "America/Denver" },
  { name: "Pueblo, USA", lat: 38.2544, lng: -104.6091, tz: "America/Denver" },
  { name: "Raleigh, USA", lat: 35.7796, lng: -78.6382, tz: "America/New_York" },
  { name: "Rancho Cucamonga, USA", lat: 34.1064, lng: -117.5931, tz: "America/Los_Angeles" },
  { name: "Reno, USA", lat: 39.5296, lng: -119.8138, tz: "America/Los_Angeles" },
  { name: "Rialto, USA", lat: 34.1060, lng: -117.3703, tz: "America/Los_Angeles" },
  { name: "Richardson, USA", lat: 32.9482, lng: -96.7299, tz: "America/Chicago" },
  { name: "Richmond, USA", lat: 37.5407, lng: -77.4360, tz: "America/New_York" },
  { name: "Riverside, USA", lat: 33.9533, lng: -117.3962, tz: "America/Los_Angeles" },
  { name: "Rochester, USA", lat: 43.1566, lng: -77.6088, tz: "America/New_York" },
  { name: "Rockford, USA", lat: 42.2711, lng: -89.0940, tz: "America/Chicago" },
  { name: "Roseville, USA", lat: 38.7521, lng: -121.2880, tz: "America/Los_Angeles" },
  { name: "Round Rock, USA", lat: 30.5083, lng: -97.6789, tz: "America/Chicago" },
  { name: "Sacramento, USA", lat: 38.5816, lng: -121.4944, tz: "America/Los_Angeles" },
  { name: "Salem, USA", lat: 44.9429, lng: -123.0351, tz: "America/Los_Angeles" },
  { name: "Salt Lake City, USA", lat: 40.7608, lng: -111.8910, tz: "America/Denver" },
  { name: "San Antonio, USA", lat: 29.4241, lng: -98.4936, tz: "America/Chicago" },
  { name: "San Bernardino, USA", lat: 34.1083, lng: -117.2898, tz: "America/Los_Angeles" },
  { name: "San Diego, USA", lat: 32.7157, lng: -117.1611, tz: "America/Los_Angeles" },
  { name: "San Francisco, USA", lat: 37.7749, lng: -122.4194, tz: "America/Los_Angeles" },
  { name: "San Jose, USA", lat: 37.3382, lng: -121.8863, tz: "America/Los_Angeles" },
  { name: "Santa Ana, USA", lat: 33.7456, lng: -117.8678, tz: "America/Los_Angeles" },
  { name: "Santa Clara, USA", lat: 37.3541, lng: -121.9690, tz: "America/Los_Angeles" },
  { name: "Santa Clarita, USA", lat: 34.3917, lng: -118.5426, tz: "America/Los_Angeles" },
  { name: "Santa Rosa, USA", lat: 38.4404, lng: -122.7144, tz: "America/Los_Angeles" },
  { name: "Savannah, USA", lat: 32.0809, lng: -81.0912, tz: "America/New_York" },
  { name: "Scottsdale, USA", lat: 33.4942, lng: -111.9261, tz: "America/Phoenix" },
  { name: "Seattle, USA", lat: 47.6062, lng: -122.3321, tz: "America/Los_Angeles" },
  { name: "Shreveport, USA", lat: 32.5113, lng: -93.7502, tz: "America/Chicago" },
  { name: "Simi Valley, USA", lat: 34.2694, lng: -118.7815, tz: "America/Los_Angeles" },
  { name: "Solon, Ohio, USA", lat: 41.3898, lng: -81.4415, tz: "America/New_York" },
  { name: "Spokane, USA", lat: 47.6588, lng: -117.4260, tz: "America/Los_Angeles" },
  { name: "Springfield, IL, USA", lat: 39.7817, lng: -89.6501, tz: "America/Chicago" }, // IL
  { name: "Springfield, MO, USA", lat: 37.2089, lng: -93.2923, tz: "America/Chicago" }, // MO
  { name: "St. Louis, USA", lat: 38.6270, lng: -90.1994, tz: "America/Chicago" },
  { name: "St. Paul, USA", lat: 44.9537, lng: -93.0900, tz: "America/Chicago" },
  { name: "St. Petersburg, USA", lat: 27.7676, lng: -82.6403, tz: "America/New_York" },
  { name: "Sterling Heights, USA", lat: 42.5803, lng: -83.0300, tz: "America/Detroit" },
  { name: "Stockton, USA", lat: 37.9577, lng: -121.2908, tz: "America/Los_Angeles" },
  { name: "Sunnyvale, USA", lat: 37.3688, lng: -122.0363, tz: "America/Los_Angeles" },
  { name: "Surprise, USA", lat: 33.6292, lng: -112.3679, tz: "America/Phoenix" },
  { name: "Syracuse, USA", lat: 43.0481, lng: -76.1474, tz: "America/New_York" },
  { name: "Tacoma, USA", lat: 47.2529, lng: -122.4443, tz: "America/Los_Angeles" },
  { name: "Tallahassee, USA", lat: 30.4383, lng: -84.2807, tz: "America/New_York" },
  { name: "Tampa, USA", lat: 27.9506, lng: -82.4572, tz: "America/New_York" },
  { name: "Temecula, USA", lat: 33.4936, lng: -117.1484, tz: "America/Los_Angeles" },
  { name: "Tempe, USA", lat: 33.4255, lng: -111.9400, tz: "America/Phoenix" },
  { name: "Thornton, USA", lat: 39.8680, lng: -104.9719, tz: "America/Denver" },
  { name: "Thousand Oaks, USA", lat: 34.1706, lng: -118.8376, tz: "America/Los_Angeles" },
  { name: "Toledo, USA", lat: 41.6528, lng: -83.5379, tz: "America/New_York" },
  { name: "Topeka, USA", lat: 39.0473, lng: -95.6752, tz: "America/Chicago" },
  { name: "Torrance, USA", lat: 33.8358, lng: -118.3406, tz: "America/Los_Angeles" },
  { name: "Trenton, USA", lat: 40.2171, lng: -74.7429, tz: "America/New_York" },
  { name: "Tucson, USA", lat: 32.2226, lng: -110.9747, tz: "America/Phoenix" },
  { name: "Tulsa, USA", lat: 36.1540, lng: -95.9928, tz: "America/Chicago" },
  { name: "Tyler, USA", lat: 32.3513, lng: -95.3016, tz: "America/Chicago" },
  { name: "Vancouver, USA", lat: 45.6387, lng: -122.6615, tz: "America/Los_Angeles" },
  { name: "Victorville, USA", lat: 34.5361, lng: -117.2912, tz: "America/Los_Angeles" },
  { name: "Virginia Beach, USA", lat: 36.8508, lng: -76.2859, tz: "America/New_York" },
  { name: "Visalia, USA", lat: 36.3302, lng: -119.2921, tz: "America/Los_Angeles" },
  { name: "Warren, USA", lat: 42.4775, lng: -83.0277, tz: "America/Detroit" },
  { name: "Washington, D.C., USA", lat: 38.9072, lng: -77.0369, tz: "America/New_York" },
  { name: "Waterloo, USA", lat: 42.4928, lng: -92.3430, tz: "America/Chicago" },
  { name: "Wichita, USA", lat: 37.6872, lng: -97.3301, tz: "America/Chicago" },
  { name: "Wichita Falls, USA", lat: 33.9137, lng: -98.4934, tz: "America/Chicago" },
  { name: "Wilmington, USA", lat: 34.2257, lng: -77.9447, tz: "America/New_York" },
  { name: "Winston-Salem, USA", lat: 36.0999, lng: -80.2442, tz: "America/New_York" },
  { name: "Woodbridge, USA", lat: 38.6582, lng: -77.2497, tz: "America/New_York" },
  { name: "Worcester, USA", lat: 42.2626, lng: -71.8023, tz: "America/New_York" },
  { name: "Yonkers, USA", lat: 40.9414, lng: -73.8646, tz: "America/New_York" },
  { name: "Youngstown, USA", lat: 41.0998, lng: -80.6495, tz: "America/New_York" },

  // Canada and Mexico
  { name: "Calgary, Canada", lat: 51.0447, lng: -114.0719, tz: "America/Edmonton" },
  { name: "Edmonton, Canada", lat: 53.5444, lng: -113.4909, tz: "America/Edmonton" },
  { name: "Guadalajara, Mexico", lat: 20.6597, lng: -103.3496, tz: "America/Mexico_City" },
  { name: "Halifax, Canada", lat: 44.6488, lng: -63.5752, tz: "America/Halifax" },
  { name: "Hamilton, Canada", lat: 43.2557, lng: -79.8711, tz: "America/Toronto" },
  { name: "Juárez, Mexico", lat: 31.6904, lng: -106.4245, tz: "America/Ciudad_Juarez" },
  { name: "Kitchener, Canada", lat: 43.4516, lng: -80.4920, tz: "America/Toronto" },
  { name: "León, Mexico", lat: 21.1219, lng: -101.7068, tz: "America/Mexico_City" },
  { name: "Mexico City, Mexico", lat: 19.4326, lng: -99.1332, tz: "America/Mexico_City" },
  { name: "Monterrey, Mexico", lat: 25.6866, lng: -100.3161, tz: "America/Monterrey" },
  { name: "Montreal, Canada", lat: 45.5017, lng: -73.5673, tz: "America/Toronto" },
  { name: "Ottawa, Canada", lat: 45.4215, lng: -75.6972, tz: "America/Toronto" },
  { name: "Puebla, Mexico", lat: 19.0414, lng: -98.2063, tz: "America/Mexico_City" },
  { name: "Quebec City, Canada", lat: 46.8139, lng: -71.2080, tz: "America/Toronto" },
  { name: "Tijuana, Mexico", lat: 32.5149, lng: -117.0382, tz: "America/Tijuana" },
  { name: "Toronto, Canada", lat: 43.6532, lng: -79.3832, tz: "America/Toronto" },
  { name: "Vancouver, Canada", lat: 49.2827, lng: -123.1207, tz: "America/Vancouver" },
  { name: "Victoria, Canada", lat: 48.4284, lng: -123.3656, tz: "America/Vancouver" },
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

// MAIN LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const searchInput  = document.getElementById('city-search');
  const resultsDiv   = document.getElementById('search-results');
  const contentDiv   = document.getElementById('content');

  let currentLat       = 41.5055;
  let currentLng       = -81.6813;
  let currentCityName  = 'Cleveland, Ohio, USA';
  let currentTimezone  = 'America/New_York';

  let isRendering = false;

  // ──────────────────────────────────────────────
  // Constants & lookup tables (top-level)
  // ──────────────────────────────────────────────
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

  const auspicious = new Set(['Amrit', 'Shubh', 'Labh', 'Chal']);

  const rahuSlots     = [7, 1, 6, 4, 5, 3, 2];
  const kaalVelaSlots = [4, 1, 5, 2, 6, 3, 0];
  const vaarVelaSlots = [3, 6, 1, 4, 7, 2, 5];

  // ──────────────────────────────────────────────
  // Helper functions
  // ──────────────────────────────────────────────
  function formatTime(ms, tz = currentTimezone) {
    return new Date(ms).toLocaleTimeString('en-US', {
      timeZone: tz,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  function getDaySeq(weekday) {
    return daySequences[weekday];
  }

  function getNightSeq(weekday) {
    const startIdx = nightStartIndices[weekday];
    return Array.from({ length: 8 }, (_, i) => nightCycle[(startIdx + i) % 7]);
  }

  function makeTable(seq, starts, slotMs, title, nowMs, rahuIdx, kaalIdx, vaarIdx) {
    if (!Array.isArray(seq) || !Array.isArray(starts)) {
      return `<h2>${title}</h2><p class="error">Sequence data unavailable</p>`;
    }

    let html = `<h2>${title}</h2><table>`;

    const warningIndices = title.includes('Day')
      ? [rahuIdx, kaalIdx, vaarIdx]
      : seq.reduce((acc, t, i) => { if (t === 'Labh') acc.push(i); return acc; }, []);

    seq.forEach((type, idx) => {
      const startMs = starts[idx];
      const endMs   = startMs + Math.round(slotMs);

      const isActive = nowMs >= startMs && nowMs < endMs;

      const cls = auspicious.has(type) ? 'good' : 'bad';
      const rowClass = isActive ? `${cls} active-now` : cls;

      let prefix = '';
      if (warningIndices.includes(idx)) {
        prefix = (title.includes('Day') && idx === rahuIdx) ? '👹 ' : '⚠️ ';
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

  async function fetchSunriseSunset(dateStr) {
    try {
      const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${currentLat}&lng=${currentLng}&date=${dateStr}&formatted=0`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();

      if (data.status === 'OK' && data.results?.sunrise && data.results?.sunset) {
        return {
          sunriseTime: new Date(data.results.sunrise).getTime(),
          sunsetTime: new Date(data.results.sunset).getTime()
        };
      }
    } catch {}

    // Fallback
    const [y, m, d] = dateStr.split('-').map(Number);
    return {
      sunriseTime: Date.UTC(y, m-1, d, 6, 0, 0),
      sunsetTime: Date.UTC(y, m-1, d, 18, 0, 0)
    };
  }

  // ──────────────────────────────────────────────
  // Main render function
  // ──────────────────────────────────────────────
  function renderChoghadiya() {
    if (isRendering) return;
    isRendering = true;

    contentDiv.innerHTML = '<div class="loading">Calculating Muhurtas…</div>';

    const nowMs = Date.now();

    const tzFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: currentTimezone,
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false
    });

    const parts = tzFormatter.formatToParts(nowMs);
    const year  = parts.find(p => p.type === 'year')?.value;
    const month = parts.find(p => p.type === 'month')?.value;
    const day   = parts.find(p => p.type === 'day')?.value;

    if (!year || !month || !day) {
      contentDiv.innerHTML = '<p class="error">Cannot determine date.</p>';
      isRendering = false;
      return;
    }

    const dateStr = `${year}-${month}-${day}`;

    const noonInTz = new Date(`${dateStr}T12:00:00`);
    const weekdayName = new Intl.DateTimeFormat('en-US', {
      timeZone: currentTimezone,
      weekday: 'long'
    }).format(noonInTz);

    const weekdayMap = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
    const weekday = weekdayMap[weekdayName];

    if (weekday === undefined) {
      contentDiv.innerHTML = '<p class="error">Cannot determine weekday.</p>';
      isRendering = false;
      return;
    }

    fetchSunriseSunset(dateStr)
      .then(({ sunriseTime, sunsetTime }) => {
        const dayDurationMs   = sunsetTime - sunriseTime;
        const nightDurationMs = (sunriseTime + 86400000) - sunsetTime;

        const daySlotMs   = dayDurationMs   / 8;
        const nightSlotMs = nightDurationMs / 8;

        const dayStarts   = Array.from({ length: 8 }, (_, i) => sunriseTime + Math.round(daySlotMs * i));
        const nightStarts = Array.from({ length: 8 }, (_, i) => sunsetTime  + Math.round(nightSlotMs * i));

        const middayMs     = sunriseTime + dayDurationMs / 2;
        const abhijitStart = middayMs - 24 * 60 * 1000;
        const abhijitEnd   = middayMs + 24 * 60 * 1000;

        const rahuStartMs = sunriseTime + Math.round(daySlotMs * rahuSlots[weekday]);
        const rahuEndMs   = rahuStartMs + Math.round(daySlotMs);

        const html = `
          <div class="current-location">
            <span>${new Date(nowMs).toLocaleDateString('en-US', { timeZone: currentTimezone })}, ${currentCityName}, </span>
            <span>${formatTime(nowMs)}</span>
          </div>

          <div class="flexbox">
            <div class="abhijit-box">
              Abhijit Muhurat (Auspicious)<br>
              ${formatTime(abhijitStart)} – ${formatTime(abhijitEnd)}
            </div>

            <div class="rahu-box">
              👹 Rahu Kaal (Avoid)<br>
              ${formatTime(rahuStartMs)} – ${formatTime(rahuEndMs)}
            </div>
          </div>

          <div class="tables-container">
            <div class="table-wrapper">
              ${makeTable(getDaySeq(weekday), dayStarts, daySlotMs, 'Day Choghadiya', nowMs, rahuSlots[weekday], kaalVelaSlots[weekday], vaarVelaSlots[weekday])}
            </div>
            <div class="table-wrapper">
              ${makeTable(getNightSeq(weekday), nightStarts, nightSlotMs, 'Night Choghadiya', nowMs)}
            </div>
          </div>
        `;

        contentDiv.innerHTML = html;
      })
      .catch(() => {
        contentDiv.innerHTML = '<p class="error">Failed to load sunrise/sunset data.</p>';
      })
      .finally(() => {
        isRendering = false;
      });
  }

  // ──────────────────────────────────────────────
  // Event listeners & init
  // ──────────────────────────────────────────────

  chrome.storage.local.get(['savedLat','savedLng','savedCityName','savedTimezone'], (saved) => {
    if (saved.savedLat && saved.savedLng) {
      currentLat      = Number(saved.savedLat);
      currentLng      = Number(saved.savedLng);
      currentCityName = saved.savedCityName || 'Your Location';
      currentTimezone = saved.savedTimezone || 'America/New_York';
    }
    renderChoghadiya();
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    resultsDiv.innerHTML = '';

    if (query.length < 2) return;

    const matches = cityDatabase
      .filter(c => c.name.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 10);

    if (matches.length === 0) {
      resultsDiv.innerHTML = '<div class="no-results">No cities found</div>';
      return;
    }

    const ul = document.createElement('ul');
    matches.forEach(city => {
      const li = document.createElement('li');
      li.textContent = city.name;
      li.onclick = () => {
        currentLat      = city.lat;
        currentLng      = city.lng;
        currentCityName = city.name;
        currentTimezone = city.tz;

        chrome.storage.local.set({
          savedLat: currentLat,
          savedLng: currentLng,
          savedCityName: currentCityName,
          savedTimezone: currentTimezone
        });

        searchInput.value = '';
        resultsDiv.innerHTML = '';
        renderChoghadiya();
      };
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  });

  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
      resultsDiv.innerHTML = '';
    }
  });

  document.getElementById('reload-location')?.addEventListener('click', () => {
    chrome.storage.local.remove(['savedLat','savedLng','savedCityName','savedTimezone'], () => {
      location.reload();
    });
  });
});