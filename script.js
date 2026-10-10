/**
 * PureStream — Student Study & Music Hub (Direct Search & Long Videos)
 * Engine, Multi-Source Player, Timestamp Notes, Pomodoro, and YouTube Search
 */

// ==========================================
// Verified 100% Working Long Videos, Songs & Courses
// ==========================================
const CURATED_VIDEOS = {
  songs: [
    {
      id: 'WWIfHemqSEA',
      title: 'Banjaare (Barsaat 2005) - Spider-Man (Earth-96283) Edit | 4K 60fps',
      channel: 'Vibe with V',
      duration: '4:15',
      quality: '4K 60fps',
      category: 'Spider-Man Barsaat',
      views: '2.4M views',
      isLong: false,
      thumb: 'https://i.ytimg.com/vi/WWIfHemqSEA/hqdefault.jpg'
    },
    {
      id: 'H2f7MZaw3Yo',
      title: 'INAAM - Anuv Jain (Official Lyric Video)',
      channel: 'Anuv Jain',
      duration: '3:48',
      quality: '1080p HD',
      category: 'Anuv Jain Hits',
      views: '5.1M views',
      isLong: false,
      thumb: 'https://i.ytimg.com/vi/H2f7MZaw3Yo/hqdefault.jpg'
    },
    {
      id: '5Eqb_-j3FDA',
      title: 'Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill',
      channel: 'Coke Studio',
      duration: '4:36',
      quality: '1080p HD',
      category: 'Coke Studio',
      views: '720M views',
      isLong: false,
      thumb: 'https://i.ytimg.com/vi/5Eqb_-j3FDA/hqdefault.jpg'
    },
    {
      id: 'fzXV2_vm-6g',
      title: 'Arijit Singh Mashup 2024 | Nonstop - Jukebox | Bollywood Hits',
      channel: 'Rolex Music',
      duration: '51:01',
      quality: '1080p HD',
      category: 'Arijit Singh Hits',
      views: '12M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/fzXV2_vm-6g/hqdefault.jpg'
    },
    {
      id: 'LElOSR7cJyM',
      title: 'Top 20 Bollywood Romance | Audio Jukebox | Best Romantic Songs',
      channel: 'Sony Music India',
      duration: '1:41:37',
      quality: '1080p HD',
      category: 'Romantic Jukebox',
      views: '8.7M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/LElOSR7cJyM/hqdefault.jpg'
    },
    {
      id: 'zeVWTY31Vn8',
      title: 'Top 30 Romantic Hindi Songs | Non-Stop Audio Jukebox (2.5 Hours)',
      channel: 'Bollywood Classics',
      duration: '2:25:22',
      quality: '1080p HD',
      category: 'Classic Melodies',
      views: '19M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/zeVWTY31Vn8/hqdefault.jpg'
    },
    {
      id: 't3NOpF5ieBo',
      title: 'Lofi Bollywood Mashup ❤️ | Classic vs Modern Melodies',
      channel: 'Gravero Lofi',
      duration: '24:38',
      quality: '1080p HD',
      category: 'Bollywood Lofi',
      views: '4.5M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/t3NOpF5ieBo/hqdefault.jpg'
    }
  ],
  coding: [
    {
      id: 'eIrMbAQSU34',
      title: 'AI will take my job | Chai aur Code (Software Engineering Reality)',
      channel: 'Chai aur Code',
      duration: '31:06',
      quality: '1080p FHD',
      category: 'Chai aur Code',
      views: '480K views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/eIrMbAQSU34/hqdefault.jpg'
    },
    {
      id: 'rfscVS0vtbw',
      title: 'Learn Python - Full Course for Beginners [Tutorial 4+ Hours]',
      channel: 'freeCodeCamp.org',
      duration: '4:26:52',
      quality: '1080p 60fps',
      category: 'Python Complete',
      views: '43M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg'
    },
    {
      id: '_uQrJ0TkZlc',
      title: 'Python Full Course for Beginners in Hindi | Complete Python Course (10h)',
      channel: 'CodeWithHarry',
      duration: '10:53:55',
      quality: '1080p FHD',
      category: 'Python in Hindi (10h)',
      views: '11M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg'
    },
    {
      id: 'bMknfKXIFA8',
      title: "React Course - Beginner's Tutorial for React JavaScript [Full Course]",
      channel: 'freeCodeCamp.org',
      duration: '11:55:28',
      quality: '1080p FHD',
      category: 'React 12h Course',
      views: '3.8M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg'
    },
    {
      id: 'W6NZfCO5SIk',
      title: 'JavaScript Course for Beginners – Your First Web Applications',
      channel: 'freeCodeCamp.org',
      duration: '3:26:43',
      quality: '1080p 60fps',
      category: 'JavaScript 3.5h',
      views: '6.2M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg'
    },
    {
      id: 'grEKMHGYyns',
      title: 'Learn Java 8 - Full Tutorial for Beginners (Complete Course)',
      channel: 'freeCodeCamp.org',
      duration: '9:32:00',
      quality: '1080p FHD',
      category: 'Java Mega Course',
      views: '7.9M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg'
    },
    {
      id: '7S_tz1z_5bA',
      title: 'MySQL Database - Full Course for Beginners (Database Design)',
      channel: 'freeCodeCamp.org',
      duration: '4:20:00',
      quality: '1080p FHD',
      category: 'SQL Full Course',
      views: '4.9M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/7S_tz1z_5bA/hqdefault.jpg'
    }
  ],
  study: [
    {
      id: 'qDZik-DcQJA',
      title: 'Complete Class 12th PHYSICS in 1 Shot | Concepts + PYQs Marathon',
      channel: 'Physics Wallah - Alakh Pandey',
      duration: '11:55:01',
      quality: '1080p FHD',
      category: 'PW 12h Mega Marathon',
      views: '4.2M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/qDZik-DcQJA/hqdefault.jpg'
    },
    {
      id: '3znerIFcpPY',
      title: 'Complete Class 12th PHYSICS in 1 Shot || Full Revision Marathon',
      channel: 'Physics Wallah',
      duration: '9:55:50',
      quality: '1080p FHD',
      category: 'Physics 10h Marathon',
      views: '2.8M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/3znerIFcpPY/hqdefault.jpg'
    },
    {
      id: 'Lkwx_do37wU',
      title: 'Complete Class 12th CHEMISTRY Revision 📖🔥 | ALL Concepts Covered',
      channel: 'Chemistry Wallah',
      duration: '5:51:07',
      quality: '1080p FHD',
      category: 'Chemistry 6h Revision',
      views: '1.9M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/Lkwx_do37wU/hqdefault.jpg'
    },
    {
      id: '3p3gxbcpbe0',
      title: 'Integration Class 12 One Shot | Class 12th Maths Complete Revision',
      channel: 'Maths Unplugged',
      duration: '5:38:11',
      quality: '1080p FHD',
      category: 'Maths Integration',
      views: '980K views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/3p3gxbcpbe0/hqdefault.jpg'
    },
    {
      id: 'e-GKLde9V9s',
      title: 'Complete Class 12 BIOLOGY One Shot 🔥 | For NEET 2026 / 12th Boards',
      channel: 'Competition Wallah',
      duration: '9:15:23',
      quality: '1080p FHD',
      category: 'Biology 9h NEET',
      views: '1.5M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/e-GKLde9V9s/hqdefault.jpg'
    },
    {
      id: 'fNk_zzaMoSs',
      title: 'Calculus 1 - Full College Course | Derivatives & Integrals Explained',
      channel: 'freeCodeCamp.org',
      duration: '11:43:00',
      quality: '1080p FHD',
      category: 'Calculus College Course',
      views: '2.1M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/fNk_zzaMoSs/hqdefault.jpg'
    }
  ],
  lofi: [
    {
      id: 'jfKfPfyJRdk',
      title: 'lofi hip hop radio 📚 beats to relax/study to [24/7 Live Stream]',
      channel: 'Lofi Girl',
      duration: '24/7 Live',
      quality: '1080p Live',
      category: 'Chill Study Beats',
      views: '54K watching',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg'
    },
    {
      id: '5qap5aO4i9A',
      title: 'lofi hip hop radio 💤 beats to sleep/chill to [24/7 Live Stream]',
      channel: 'Lofi Girl',
      duration: '24/7 Live',
      quality: '1080p Live',
      category: 'Sleep & Relax',
      views: '18K watching',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg'
    },
    {
      id: 'zoFLbJ_09aM',
      title: 'Mind Relax Lofi Mashup | Mind Relaxing Songs for Focus & Sleep',
      channel: 'Relaxing Beats',
      duration: '29:33',
      quality: '1080p HD',
      category: 'Hindi Lofi',
      views: '3.4M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/zoFLbJ_09aM/hqdefault.jpg'
    },
    {
      id: 'WPni755-Krg',
      title: 'Study Music Alpha Waves: Relaxing Studying Music, Brain Power (3 Hours)',
      channel: 'Yellow Brick Cinema',
      duration: '3:00:00',
      quality: '1080p FHD',
      category: 'Alpha Waves (3h)',
      views: '25M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/WPni755-Krg/hqdefault.jpg'
    },
    {
      id: 'DWcJFNfaw9c',
      title: 'lofi hip hop radio - beats to sleep/chill to [Deep Chill]',
      channel: 'Lofi Girl',
      duration: '24/7 Live',
      quality: '1080p Live',
      category: 'Deep Chill',
      views: '12K watching',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/DWcJFNfaw9c/hqdefault.jpg'
    }
  ],
  upsc: [
    {
      id: 'BKJNLAExaQI',
      title: 'Complete Indian History Marathon | Ancient, Medieval & Modern for Exams',
      channel: 'Exampur',
      duration: '8:53:50',
      quality: '1080p FHD',
      category: 'History 9h Marathon',
      views: '3.9M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/BKJNLAExaQI/hqdefault.jpg'
    },
    {
      id: 'NaaBWqNC_sQ',
      title: 'Medieval Indian History | Slave Dynasty | Khan Sir Special Class',
      channel: 'Khan GS Research Centre',
      duration: '1:15:25',
      quality: '1080p FHD',
      category: 'Khan Sir Special',
      views: '8.4M views',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/NaaBWqNC_sQ/hqdefault.jpg'
    },
    {
      id: 'LXb3EKWsInQ',
      title: 'COSTA RICA IN 4K 60fps HDR (ULTRA HD) — Wildlife & Rain Forest',
      channel: 'Jacob + Katie Schwarz',
      duration: '5:44',
      quality: '4K Ultra HD',
      category: '4K Demo',
      views: '110M views',
      isLong: false,
      thumb: 'https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg'
    }
  ]
};

// ==========================================
// Curated Mixes & Multi-Song Playlists
// (Enables direct playlist song playback and queue)
// ==========================================
const CURATED_PLAYLISTS = [
  {
    id: 'pl-bollywood-romance',
    title: 'Mix — Bollywood Romance & Soulful Melodies',
    channel: 'PureStream Music Mix',
    category: 'songs',
    trackCount: 7,
    thumb: 'https://i.ytimg.com/vi/WWIfHemqSEA/hqdefault.jpg',
    videos: [
      {
        id: 'WWIfHemqSEA',
        title: 'Banjaare (Barsaat 2005) - Spider-Man (Earth-96283) Edit | 4K 60fps',
        channel: 'Vibe with V',
        duration: '4:15',
        thumb: 'https://i.ytimg.com/vi/WWIfHemqSEA/hqdefault.jpg'
      },
      {
        id: 'H2f7MZaw3Yo',
        title: 'INAAM - Anuv Jain (Official Lyric Video)',
        channel: 'Anuv Jain',
        duration: '3:48',
        thumb: 'https://i.ytimg.com/vi/H2f7MZaw3Yo/hqdefault.jpg'
      },
      {
        id: '5Eqb_-j3FDA',
        title: 'Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill',
        channel: 'Coke Studio',
        duration: '4:36',
        thumb: 'https://i.ytimg.com/vi/5Eqb_-j3FDA/hqdefault.jpg'
      },
      {
        id: 'fzXV2_vm-6g',
        title: 'Arijit Singh Mashup 2024 | Nonstop - Jukebox | Bollywood Hits',
        channel: 'Rolex Music',
        duration: '51:01',
        thumb: 'https://i.ytimg.com/vi/fzXV2_vm-6g/hqdefault.jpg'
      },
      {
        id: 'LElOSR7cJyM',
        title: 'Top 20 Bollywood Romance | Audio Jukebox | Best Romantic Songs',
        channel: 'Sony Music India',
        duration: '1:41:37',
        thumb: 'https://i.ytimg.com/vi/LElOSR7cJyM/hqdefault.jpg'
      },
      {
        id: 'zeVWTY31Vn8',
        title: 'Top 30 Romantic Hindi Songs | Non-Stop Audio Jukebox (2.5 Hours)',
        channel: 'Bollywood Classics',
        duration: '2:25:22',
        thumb: 'https://i.ytimg.com/vi/zeVWTY31Vn8/hqdefault.jpg'
      },
      {
        id: 't3NOpF5ieBo',
        title: 'Lofi Bollywood Mashup ❤️ | Classic vs Modern Melodies',
        channel: 'Gravero Lofi',
        duration: '24:38',
        thumb: 'https://i.ytimg.com/vi/t3NOpF5ieBo/hqdefault.jpg'
      }
    ]
  },
  {
    id: 'pl-arijit-singh',
    title: 'Playlist — Best of Arijit Singh & Romantic Jukeboxes',
    channel: 'Bollywood Soulful Mix',
    category: 'songs',
    trackCount: 5,
    thumb: 'https://i.ytimg.com/vi/fzXV2_vm-6g/hqdefault.jpg',
    videos: [
      {
        id: 'fzXV2_vm-6g',
        title: 'Arijit Singh Mashup 2024 | Nonstop - Jukebox | Bollywood Hits',
        channel: 'Rolex Music',
        duration: '51:01',
        thumb: 'https://i.ytimg.com/vi/fzXV2_vm-6g/hqdefault.jpg'
      },
      {
        id: 'LElOSR7cJyM',
        title: 'Top 20 Bollywood Romance | Audio Jukebox | Best Romantic Songs',
        channel: 'Sony Music India',
        duration: '1:41:37',
        thumb: 'https://i.ytimg.com/vi/LElOSR7cJyM/hqdefault.jpg'
      },
      {
        id: 'zeVWTY31Vn8',
        title: 'Top 30 Romantic Hindi Songs | Non-Stop Audio Jukebox (2.5 Hours)',
        channel: 'Bollywood Classics',
        duration: '2:25:22',
        thumb: 'https://i.ytimg.com/vi/zeVWTY31Vn8/hqdefault.jpg'
      },
      {
        id: 't3NOpF5ieBo',
        title: 'Lofi Bollywood Mashup ❤️ | Classic vs Modern Melodies',
        channel: 'Gravero Lofi',
        duration: '24:38',
        thumb: 'https://i.ytimg.com/vi/t3NOpF5ieBo/hqdefault.jpg'
      },
      {
        id: 'WWIfHemqSEA',
        title: 'Banjaare (Barsaat 2005) - Spider-Man (Earth-96283) Edit | 4K 60fps',
        channel: 'Vibe with V',
        duration: '4:15',
        thumb: 'https://i.ytimg.com/vi/WWIfHemqSEA/hqdefault.jpg'
      }
    ]
  },
  {
    id: 'pl-lofi-beats',
    title: 'Mix — 24/7 Deep Study & Chill Lofi Beats',
    channel: 'Lofi Girl & Chill Beats',
    category: 'lofi',
    trackCount: 5,
    thumb: 'https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg',
    videos: [
      {
        id: 'jfKfPfyJRdk',
        title: 'lofi hip hop radio 📚 beats to relax/study to [24/7 Live Stream]',
        channel: 'Lofi Girl',
        duration: '24/7 Live',
        thumb: 'https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg'
      },
      {
        id: '5qap5aO4i9A',
        title: 'lofi hip hop radio 💤 beats to sleep/chill to [24/7 Live Stream]',
        channel: 'Lofi Girl',
        duration: '24/7 Live',
        thumb: 'https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg'
      },
      {
        id: 'zoFLbJ_09aM',
        title: 'Mind Relax Lofi Mashup | Mind Relaxing Songs for Focus & Sleep',
        channel: 'Relaxing Beats',
        duration: '29:33',
        thumb: 'https://i.ytimg.com/vi/zoFLbJ_09aM/hqdefault.jpg'
      },
      {
        id: 'WPni755-Krg',
        title: 'Study Music Alpha Waves: Relaxing Studying Music, Brain Power (3 Hours)',
        channel: 'Yellow Brick Cinema',
        duration: '3:00:00',
        thumb: 'https://i.ytimg.com/vi/WPni755-Krg/hqdefault.jpg'
      },
      {
        id: 'DWcJFNfaw9c',
        title: 'lofi hip hop radio - beats to sleep/chill to [Deep Chill]',
        channel: 'Lofi Girl',
        duration: '24/7 Live',
        thumb: 'https://i.ytimg.com/vi/DWcJFNfaw9c/hqdefault.jpg'
      }
    ]
  },
  {
    id: 'pl-coding-mastery',
    title: 'Playlist — Full-Stack Web Development & Python Mastery',
    channel: 'PureStream Coding Roadmaps',
    category: 'coding',
    trackCount: 7,
    thumb: 'https://i.ytimg.com/vi/eIrMbAQSU34/hqdefault.jpg',
    videos: [
      {
        id: 'eIrMbAQSU34',
        title: 'AI will take my job | Chai aur Code (Software Engineering Reality)',
        channel: 'Chai aur Code',
        duration: '31:06',
        thumb: 'https://i.ytimg.com/vi/eIrMbAQSU34/hqdefault.jpg'
      },
      {
        id: 'rfscVS0vtbw',
        title: 'Learn Python - Full Course for Beginners [Tutorial 4+ Hours]',
        channel: 'freeCodeCamp.org',
        duration: '4:26:52',
        thumb: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg'
      },
      {
        id: '_uQrJ0TkZlc',
        title: 'Python Full Course for Beginners in Hindi | Complete Python Course (10h)',
        channel: 'CodeWithHarry',
        duration: '10:04:32',
        thumb: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg'
      },
      {
        id: 'bMknfKXIFA8',
        title: 'React Course - Beginner\'s Tutorial for React JavaScript [Full Course]',
        channel: 'freeCodeCamp.org',
        duration: '11:55:28',
        thumb: 'https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg'
      },
      {
        id: 'W6NZfCO5SIk',
        title: 'JavaScript Course for Beginners – Your First Web Applications',
        channel: 'freeCodeCamp.org',
        duration: '3:26:42',
        thumb: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg'
      },
      {
        id: 'grEKMHGYyns',
        title: 'Learn Java 8 - Full Tutorial for Beginners (Complete Course)',
        channel: 'freeCodeCamp.org',
        duration: '9:33:14',
        thumb: 'https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg'
      },
      {
        id: '7S_tz1z_5bA',
        title: 'MySQL Database - Full Course for Beginners (Database Design)',
        channel: 'freeCodeCamp.org',
        duration: '3:20:11',
        thumb: 'https://i.ytimg.com/vi/7S_tz1z_5bA/hqdefault.jpg'
      }
    ]
  },
  {
    id: 'pl-science-revision',
    title: 'Playlist — Class 12 & JEE/NEET Revision Mega Marathons',
    channel: 'PureStream Academics',
    category: 'study',
    trackCount: 6,
    thumb: 'https://i.ytimg.com/vi/qDZik-DcQJA/hqdefault.jpg',
    videos: [
      {
        id: 'qDZik-DcQJA',
        title: 'Complete Class 12th PHYSICS in 1 Shot | Concepts + PYQs Marathon',
        channel: 'Physics Wallah - Alakh Pandey',
        duration: '11:45:00',
        thumb: 'https://i.ytimg.com/vi/qDZik-DcQJA/hqdefault.jpg'
      },
      {
        id: '3znerIFcpPY',
        title: 'Complete Class 12th PHYSICS in 1 Shot || Full Revision Marathon',
        channel: 'Physics Wallah',
        duration: '10:15:30',
        thumb: 'https://i.ytimg.com/vi/3znerIFcpPY/hqdefault.jpg'
      },
      {
        id: 'Lkwx_do37wU',
        title: 'Complete Class 12th CHEMISTRY Revision 📖🔥 | ALL Concepts Covered',
        channel: 'Chemistry Wallah',
        duration: '12:08:45',
        thumb: 'https://i.ytimg.com/vi/Lkwx_do37wU/hqdefault.jpg'
      },
      {
        id: '3p3gxbcpbe0',
        title: 'Integration Class 12 One Shot | Class 12th Maths Complete Revision',
        channel: 'Maths Unplugged',
        duration: '7:50:20',
        thumb: 'https://i.ytimg.com/vi/3p3gxbcpbe0/hqdefault.jpg'
      },
      {
        id: 'e-GKLde9V9s',
        title: 'Complete Class 12 BIOLOGY One Shot 🔥 | For NEET 2026 / 12th Boards',
        channel: 'Competition Wallah',
        duration: '9:12:15',
        thumb: 'https://i.ytimg.com/vi/e-GKLde9V9s/hqdefault.jpg'
      },
      {
        id: 'fNk_zzaMoSs',
        title: 'Calculus 1 - Full College Course | Derivatives & Integrals Explained',
        channel: 'freeCodeCamp.org',
        duration: '11:54:20',
        thumb: 'https://i.ytimg.com/vi/fNk_zzaMoSs/hqdefault.jpg'
      }
    ]
  }
];

// ==========================================
// Dynamic Video Helpers (YouTube Style Diversity)
// ==========================================
function getAllCuratedVideos(shuffle = false) {
  const all = [];
  const seen = new Set();
  const categories = Object.keys(CURATED_VIDEOS);
  let maxLen = 0;
  categories.forEach(c => {
    if (CURATED_VIDEOS[c] && CURATED_VIDEOS[c].length > maxLen) {
      maxLen = CURATED_VIDEOS[c].length;
    }
  });

  // Interleave categories: songs, coding, study, lofi, upsc for rich variety
  for (let i = 0; i < maxLen; i++) {
    for (const cat of categories) {
      const vid = CURATED_VIDEOS[cat][i];
      if (vid && vid.id && !seen.has(vid.id)) {
        seen.add(vid.id);
        all.push(vid);
      }
    }
  }

  if (shuffle) {
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
  }

  return all;
}

function getDynamicInitialVideo() {
  const all = getAllCuratedVideos();
  if (all.length === 0) {
    return {
      id: 'LXb3EKWsInQ',
      title: 'COSTA RICA IN 4K 60fps HDR (ULTRA HD)',
      channel: 'Jacob + Katie Schwarz',
      thumb: 'https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg'
    };
  }

  // Avoid repeating the exact last played video across refreshes
  let lastPlayedId = '';
  try {
    lastPlayedId = localStorage.getItem('purestream_last_video_id') || '';
  } catch (e) {}

  const candidates = all.filter(v => v.id !== lastPlayedId);
  const pool = candidates.length > 0 ? candidates : all;
  const picked = pool[Math.floor(Math.random() * pool.length)];

  try {
    localStorage.setItem('purestream_last_video_id', picked.id);
  } catch (e) {}

  return picked;
}

function playRandomVideo() {
  const all = getAllCuratedVideos(true);
  if (all.length === 0) return;
  const candidates = all.filter(v => v.id !== AppState.currentVideoId);
  const pool = candidates.length > 0 ? candidates : all;
  const picked = pool[Math.floor(Math.random() * pool.length)];

  showToast(`🎲 Playing: "${picked.title.slice(0, 38)}..."`, 'info');
  loadVideo(picked.id, true, picked.title, picked.channel, picked.thumb);
}

// ==========================================
// Application State
// ==========================================
const AppState = {
  currentVideoId: 'LXb3EKWsInQ', // Default fallback
  currentTitle: 'COSTA RICA IN 4K 60fps HDR (ULTRA HD)',
  currentChannel: 'Jacob + Katie Schwarz',
  currentThumb: 'https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg',
  isLooping: false,
  sleepTimerTimeout: null,
  sleepTimerRemaining: 0,
  ambientGlow: true,
  theaterMode: false,
  audioMode: false,
  isPlaying: false,
  isUserPaused: false,
  activePlaylist: null, // Currently active playlist object with currentIndex
  playlistAutoplay: true,
  autoplay: (function() {
    try {
      const saved = localStorage.getItem('purestream_autoplay');
      return saved === null ? true : saved !== '0';
    } catch (e) { return true; }
  })(),
  currentDuration: 0,
  lastSearchResults: [],
  recommendationFilter: 'all', // 'all', 'songs', 'playlists'
  engine: 'nocookie', // 'nocookie', 'youtube', 'yewtu', 'piped'
  targetResumeSeconds: 0,
  currentPlaybackSeconds: 0,
  playbackTimer: null,
  
  pomodoro: {
    isRunning: false,
    interval: null,
    totalSeconds: 0,
    remainingSeconds: 0,
    mode: 'focus'
  }
};

// ==========================================
// DOM Elements
// ==========================================
const DOM = {
  searchForm: document.getElementById('search-form'),
  videoInput: document.getElementById('video-input'),
  searchSuggestions: document.getElementById('search-suggestions'),
  checkLongOnly: document.getElementById('check-long-only'),
  btnPaste: document.getElementById('btn-paste-clipboard'),
  btnClearInput: document.getElementById('btn-clear-input'),
  btnSearchSubmit: document.getElementById('btn-search-submit'),
  videoContainer: document.getElementById('video-container'),
  playerWrapper: document.getElementById('player-wrapper'),
  playerProgressBar: document.getElementById('player-progress-bar'),
  screenWakeBadge: document.getElementById('screen-wake-badge'),
  wakeBadgeText: document.getElementById('wake-badge-text'),
  wakeLockHeartbeat: document.getElementById('wake-lock-heartbeat'),
  bgAudioAnchor: document.getElementById('bg-audio-anchor'),
  resumeBanner: document.getElementById('resume-banner'),
  resumeTimeStr: document.getElementById('resume-time-str'),
  btnResumeAccept: document.getElementById('btn-resume-accept'),
  btnResumeDismiss: document.getElementById('btn-resume-dismiss'),
  btnBannerScreenOff: document.getElementById('btn-banner-screen-off'),
  mobileScreenOffBanner: document.getElementById('mobile-screen-off-banner'),
  lockResumeWidget: document.getElementById('lock-resume-widget'),
  lockResumeTitle: document.getElementById('lock-resume-title'),
  btnLockResumeAction: document.getElementById('btn-lock-resume-action'),
  btnLockResumeDismiss: document.getElementById('btn-lock-resume-dismiss'),
  audioFocusOverlay: document.getElementById('audio-focus-overlay'),
  btnExitAudioMode: document.getElementById('btn-exit-audio-mode'),
  btnPlayerScreenOff: document.getElementById('btn-player-screen-off'),
  btnAutoplayToggle: document.getElementById('btn-autoplay-toggle'),
  autoplayCountdownOverlay: document.getElementById('autoplay-countdown-overlay'),
  autoplayCountdownTimer: document.getElementById('autoplay-countdown-timer'),
  autoplayNextThumb: document.getElementById('autoplay-next-thumb'),
  autoplayNextTitle: document.getElementById('autoplay-next-title'),
  autoplayNextChannel: document.getElementById('autoplay-next-channel'),
  btnAutoplayCancel: document.getElementById('btn-autoplay-cancel'),
  btnAutoplayPlaynow: document.getElementById('btn-autoplay-playnow'),
  autoplayProgressBar: document.getElementById('autoplay-progress-bar'),
  oledClock: document.getElementById('oled-clock'),
  oledDate: document.getElementById('oled-date'),
  oledVideoTitle: document.getElementById('oled-video-title'),
  oledChannelName: document.getElementById('oled-channel-name'),
  btnOledRewind: document.getElementById('btn-oled-rewind'),
  btnOledPlayPause: document.getElementById('btn-oled-playpause'),
  btnOledForward: document.getElementById('btn-oled-forward'),
  oledPlayIcon: document.getElementById('oled-play-icon'),
  ambientBackdrop: document.getElementById('ambient-backdrop'),
  ambientRing: document.getElementById('ambient-ring'),
  btnAmbientToggle: document.getElementById('btn-ambient-toggle'),
  btnTheaterToggle: document.getElementById('btn-theater-toggle'),
  btnAudioMode: document.getElementById('btn-audio-mode'),
  btnPomodoroToggle: document.getElementById('btn-pomodoro-toggle'),
  pomodoroHeaderText: document.getElementById('pomodoro-header-text'),
  btnShortcuts: document.getElementById('btn-shortcuts'),
  btnPopoutPlayer: document.getElementById('btn-popout-player'),
  qualityIndicator: document.getElementById('quality-indicator'),
  btnLoopToggle: document.getElementById('btn-loop-toggle'),
  activePlaylistPanel: document.getElementById('active-playlist-panel'),
  activePlaylistTitle: document.getElementById('active-playlist-title'),
  playlistBadgeTitle: document.getElementById('playlist-badge-title'),
  playlistTrackIndicator: document.getElementById('playlist-track-indicator'),
  playlistChannelLabel: document.getElementById('playlist-channel-label'),
  activePlaylistItems: document.getElementById('active-playlist-items'),
  btnPlaylistPrev: document.getElementById('btn-playlist-prev'),
  btnPlaylistNext: document.getElementById('btn-playlist-next'),
  btnPlaylistAutoplay: document.getElementById('btn-playlist-autoplay'),
  btnPlaylistClose: document.getElementById('btn-playlist-close'),
  recommendationsHeading: document.getElementById('recommendations-heading'),
  recommendationsSubtext: document.getElementById('recommendations-subtext'),
  gridRecommendations: document.getElementById('grid-recommendations'),
  gridSongsPlaylists: document.getElementById('grid-songs-playlists'),
  btnSleepTimer: document.getElementById('btn-sleep-timer'),
  sleepTimerText: document.getElementById('sleep-timer-text'),
  btnFullscreen: document.getElementById('btn-fullscreen'),
  btnBookmark: document.getElementById('btn-bookmark'),
  btnShare: document.getElementById('btn-share'),
  btnAddNote: document.getElementById('btn-add-note'),
  videoTitle: document.getElementById('video-title'),
  channelName: document.getElementById('channel-name'),
  badgeVideoDuration: document.getElementById('badge-video-duration'),
  videoNotesStrip: document.getElementById('video-notes-strip'),
  notesChipsContainer: document.getElementById('notes-chips-container'),
  btnExportNotes: document.getElementById('btn-export-notes'),
  tabBtnSearch: document.getElementById('tab-btn-search'),
  searchResultCount: document.getElementById('search-result-count'),
  searchPaneHeading: document.getElementById('search-pane-heading'),
  searchLoadingIndicator: document.getElementById('search-loading-indicator'),
  gridSearch: document.getElementById('grid-search'),
  historyCount: document.getElementById('history-count'),
  savedCount: document.getElementById('saved-count'),
  totalNotesCount: document.getElementById('total-notes-count'),
  btnClearHistory: document.getElementById('btn-clear-history'),
  btnClearSaved: document.getElementById('btn-clear-saved'),
  btnClearAllNotes: document.getElementById('btn-clear-all-notes'),
  toastContainer: document.getElementById('toast-container'),
  modalShortcuts: document.getElementById('modal-shortcuts'),
  modalAddNote: document.getElementById('modal-add-note'),
  inputNoteTime: document.getElementById('input-note-time'),
  inputNoteText: document.getElementById('input-note-text'),
  btnSaveNoteConfirm: document.getElementById('btn-save-note-confirm'),
  modalPomodoro: document.getElementById('modal-pomodoro'),
  pomodoroLiveDisplay: document.getElementById('pomodoro-live-display'),
  pomoCountdown: document.getElementById('pomo-countdown'),
  tabButtons: document.querySelectorAll('.tab-btn'),
  enginePills: document.querySelectorAll('.engine-pill'),
  playerArena: document.getElementById('player-arena'),
  btnBackToFeed: document.getElementById('btn-back-to-feed'),
  btnBackHomeSearch: document.getElementById('btn-back-home-search'),
  gridAll: document.getElementById('grid-all'),
  gridRecommendations: document.getElementById('grid-recommendations'),
  tabBtnAll: document.getElementById('tab-btn-all')
};

// ==========================================
// Initialization (Bulletproof & Safe)
// ==========================================
function initApp() {
  try { initCuratedGrids(); } catch (e) { console.error('initCuratedGrids error:', e); }
  try { initTabs(); } catch (e) { console.error('initTabs error:', e); }
  try { loadPreferences(); } catch (e) { console.error('loadPreferences error:', e); }
  try { initAutoplayState(); } catch (e) { console.error('initAutoplayState error:', e); }
  try { initEventListeners(); } catch (e) { console.error('initEventListeners error:', e); }
  try { updateLibraryCounts(); } catch (e) { console.error('updateLibraryCounts error:', e); }
  try { renderHistoryGrid(); } catch (e) { console.error('renderHistoryGrid error:', e); }
  try { renderRecentHistoryShelf(); } catch (e) { console.error('renderRecentHistoryShelf error:', e); }
  try { renderSavedGrid(); } catch (e) { console.error('renderSavedGrid error:', e); }
  try { renderAllNotesGrid(); } catch (e) { console.error('renderAllNotesGrid error:', e); }

  // If URL has ?v= param, auto play it in Watch Page Mode!
  const urlParams = new URLSearchParams(window.location.search);
  const paramVideo = urlParams.get('v') || urlParams.get('id');
  if (paramVideo) {
    const extracted = extractYouTubeId(paramVideo);
    if (extracted) {
      loadVideo(extracted, true);
      return;
    }
  }

  // If URL has search query ?q=
  const paramQuery = urlParams.get('q') || urlParams.get('search');
  if (paramQuery) {
    if (DOM.videoInput) DOM.videoInput.value = paramQuery;
    handleSearch(paramQuery);
    return;
  }

  // YouTube Homepage Style: By default, keep player closed and show All feed!
  if (DOM.playerArena) DOM.playerArena.style.display = 'none';
  switchTab('all');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ==========================================
// Video URL & ID Extraction
// ==========================================
function extractYouTubeId(input) {
  if (!input) return null;
  const cleaned = input.trim();

  // Direct 11-character alphanumeric YouTube ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(cleaned)) {
    return cleaned;
  }

  const regexPatterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/i,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/live\/([a-zA-Z0-9_-]{11})/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/i,
    /(?:https?:\/\/)?(?:www\.)?youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{11})/i,
    /(?:https?:\/\/)?m\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/i
  ];

  for (const pattern of regexPatterns) {
    const match = cleaned.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  try {
    const urlObj = new URL(cleaned);
    const vParam = urlObj.searchParams.get('v');
    if (vParam && /^[a-zA-Z0-9_-]{11}$/.test(vParam)) {
      return vParam;
    }
  } catch (e) {}

  return null;
}

// ==========================================
// Bulletproof Player Mounting (Never Blocks!)
// ==========================================
function getEmbedUrl(videoId, engine = AppState.engine, startSeconds = 0) {
  const startParam = startSeconds > 0 ? `&start=${startSeconds}` : '';
  const loopParam = AppState.isLooping ? `&loop=1&playlist=${videoId}` : '';

  switch (engine) {
    case 'youtube':
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1${startParam}${loopParam}`;
    case 'yewtu':
    case 'invidious-1':
      return `https://yewtu.be/embed/${videoId}?autoplay=1${startParam}`;
    case 'piped':
    case 'piped-1':
      return `https://piped.video/embed/${videoId}?autoplay=1${startParam}`;
    case 'nocookie':
    default:
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1${startParam}${loopParam}`;
  }
}

function mountPlayer(videoId, startSeconds = 0) {
  showLoader(true);

  const embedUrl = getEmbedUrl(videoId, AppState.engine, startSeconds);

  // Directly render iframe (Clean, fast, no postMessage handshake crash)
  DOM.videoContainer.innerHTML = `
    <div id="player-progress-bar" class="player-progress-bar active"></div>
    <iframe 
      id="pure-iframe" 
      src="${embedUrl}" 
      title="PureStream Video Player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; screen-wake-lock" 
      allowfullscreen
    ></iframe>
    <video id="wake-lock-heartbeat" loop playsinline muted style="display:none; width:1px; height:1px;"></video>
  `;

  // Update DOM reference
  DOM.playerProgressBar = document.getElementById('player-progress-bar');

  const iframe = document.getElementById('pure-iframe');
  if (iframe) {
    iframe.onload = () => showLoader(false);
  }
  // Safety timeout: Always hide progress line within 800ms
  setTimeout(() => showLoader(false), 800);
}

function showLoader(visible) {
  if (DOM.playerProgressBar) {
    if (visible) DOM.playerProgressBar.classList.add('active');
    else DOM.playerProgressBar.classList.remove('active');
  }
}

// ==========================================
// Video Loading, Smart Resume & Playback
// ==========================================
function startPlaybackTimer() {
  if (AppState.playbackTimer) clearInterval(AppState.playbackTimer);
  AppState.playbackTimer = setInterval(() => {
    AppState.currentPlaybackSeconds = (AppState.currentPlaybackSeconds || 0) + 1;
    // Auto-save progress every 5 seconds for smart resume
    if (AppState.currentPlaybackSeconds % 5 === 0 && AppState.currentVideoId) {
      saveCurrentProgress(AppState.currentVideoId, AppState.currentPlaybackSeconds);
    }
    // Fallback: If duration is known and playback reached end of video, trigger autoplay
    if (AppState.currentDuration > 5 && AppState.currentPlaybackSeconds >= AppState.currentDuration) {
      handleVideoEnded();
    }
  }, 1000);
}

function saveCurrentProgress(videoId, seconds) {
  if (!videoId || seconds < 5) return;
  const map = getProgressMap();
  map[videoId] = {
    seconds: Math.floor(seconds),
    timeStr: formatSecondsToTime(seconds),
    updatedAt: Date.now()
  };
  localStorage.setItem('purestream_progress', JSON.stringify(map));
}

function sendIframeCommand(func, args = []) {
  const iframe = document.getElementById('pure-iframe');
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: func,
        args: args
      }), '*');
    } catch (e) {
      console.warn('Iframe command dispatch failed:', e);
    }
  }
}

function seekVideo(deltaSeconds) {
  const newSeconds = Math.max(0, (AppState.currentPlaybackSeconds || 0) + deltaSeconds);
  AppState.currentPlaybackSeconds = newSeconds;

  sendIframeCommand('seekTo', [newSeconds, true]);

  saveCurrentProgress(AppState.currentVideoId, newSeconds);
  showToast(`${deltaSeconds > 0 ? '⏩ +10s' : '⏪ -10s'} (${formatSecondsToTime(newSeconds)})`, 'info');
}

// ==========================================
// Screen Wake Lock (Phone Screen Lock Prevention)
// ==========================================
let screenWakeLock = null;

async function enableScreenWakeLock() {
  // 1. Try modern Screen Wake Lock API
  if ('wakeLock' in navigator) {
    try {
      if (screenWakeLock !== null && !screenWakeLock.released) {
        updateWakeBadge(true);
        return;
      }
      screenWakeLock = await navigator.wakeLock.request('screen');
      screenWakeLock.addEventListener('release', () => {
        screenWakeLock = null;
        updateWakeBadge(false);
      });
      updateWakeBadge(true);
      return;
    } catch (err) {
      console.warn('Screen Wake Lock request failed:', err);
    }
  }

  // 2. Fallback: Hidden media heartbeat prevents mobile sleep
  fallbackHeartbeatLock();
}

function fallbackHeartbeatLock() {
  const video = DOM.wakeLockHeartbeat || document.getElementById('wake-lock-heartbeat');
  if (video) {
    try {
      if (!video.srcObject && !video.src) {
        // Use lightweight 1x1 canvas stream - valid on all modern mobile browsers
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, 1, 1);
        }
        if (typeof canvas.captureStream === 'function') {
          video.srcObject = canvas.captureStream(1);
        } else {
          video.src = 'data:video/mp4;base64,AAAAHGZ0eXBNNEVWIExpYmRhdmkxLjAuMQAAAAZpdGVtAAAAAGNvZGMAAAA';
        }
      }
      video.play().then(() => updateWakeBadge(true)).catch(() => {});
    } catch (e) {}
  }
}

function updateWakeBadge(isActive) {
  const badge = DOM.screenWakeBadge || document.getElementById('screen-wake-badge');
  const badgeText = DOM.wakeBadgeText || document.getElementById('wake-badge-text');
  if (!badge) return;

  if (isActive) {
    badge.classList.add('active');
    if (badgeText) badgeText.textContent = '🔆 Screen Awake: ON';
  } else {
    badge.classList.remove('active');
    if (badgeText) badgeText.textContent = 'Screen Awake: Off';
  }
}

function closePlayerAndBackToFeed() {
  if (DOM.playerArena) DOM.playerArena.style.display = 'none';
  const iframe = document.getElementById('pure-iframe');
  if (iframe) iframe.src = 'about:blank';
  if (AppState.playbackTimer) clearInterval(AppState.playbackTimer);

  stopBackgroundAudioSession();
  AppState.isPlaying = false;
  AppState.isUserPaused = true;
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';

  try {
    const newUrl = new URL(window.location);
    newUrl.searchParams.delete('v');
    newUrl.searchParams.delete('id');
    window.history.replaceState({}, '', newUrl);
  } catch (e) {}

  // If there are search results, keep search tab active; otherwise go to 'all'
  if (DOM.gridSearch && DOM.gridSearch.children.length > 0 && DOM.tabBtnSearch && DOM.tabBtnSearch.style.display !== 'none') {
    switchTab('search');
  } else {
    switchTab('all');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadVideo(videoId, triggerAutoScroll = true, customTitle = null, customChannel = null, customThumb = null) {
  if (!videoId) return;

  cancelAutoplayCountdown();
  AppState.currentDuration = 0;

  // Make watch page player visible
  if (DOM.playerArena) {
    DOM.playerArena.style.display = 'block';
  }

  AppState.currentVideoId = videoId;
  if (customTitle) AppState.currentTitle = customTitle;
  if (customChannel) AppState.currentChannel = customChannel;
  if (customThumb) AppState.currentThumb = customThumb;

  // Immediately display title & channel if provided
  if (DOM.videoTitle && customTitle) DOM.videoTitle.textContent = customTitle;
  if (DOM.channelName && customChannel) DOM.channelName.textContent = customChannel;
  if (customTitle) document.title = `${customTitle} — PureStream`;

  try {
    localStorage.setItem('purestream_last_video_id', videoId);
  } catch (e) {}

  AppState.currentPlaybackSeconds = AppState.targetResumeSeconds || 0;
  startPlaybackTimer();
  enableScreenWakeLock();

  // Activate continuous background audio & lock screen media controls
  AppState.isPlaying = true;
  AppState.isUserPaused = false;
  startBackgroundAudioSession();
  updateMediaSession(AppState.currentTitle, AppState.currentChannel, AppState.currentThumb);
  updateOledTrackInfo();

  // Check saved progress for Smart Resume
  checkSmartResume(videoId);

  // Update URL state without page reload
  try {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('v', videoId);
    window.history.replaceState({}, '', newUrl);
  } catch (e) {}

  // Mount player immediately
  mountPlayer(videoId, AppState.targetResumeSeconds);

  // Render recommendations under the player
  renderRecommendations(videoId);

  // Fetch live video metadata asynchronously to refine if missing
  fetchVideoMetadata(videoId);

  // Update UI bookmark status
  updateBookmarkButtonState(videoId);

  // Render notes for this video
  renderVideoNotesStrip(videoId);

  // Record into watch history immediately with metadata
  addToHistory(videoId, customTitle, customChannel, customThumb);

  if (triggerAutoScroll && DOM.playerWrapper) {
    DOM.playerWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  showToast('▶️ Video Loading in Ad-Free High Quality Mode', 'success');
}

// Switch Stream Engine
function switchEngine(engine) {
  AppState.engine = engine;

  DOM.enginePills.forEach(pill => {
    if (pill.dataset.engine === engine) pill.classList.add('active');
    else pill.classList.remove('active');
  });

  mountPlayer(AppState.currentVideoId);
  showToast(`⚡ Switched to Engine: ${engine.toUpperCase()}`, 'info');
}

// 100% Guaranteed Cinema Popout
function openCinemaPopout() {
  const popoutUrl = `https://www.youtube.com/embed/${AppState.currentVideoId}?autoplay=1&modestbranding=1&rel=0`;
  const popWindow = window.open(
    popoutUrl, 
    'PureStreamCinema', 
    'width=1100,height=650,menubar=no,toolbar=no,location=no,status=no,resizable=yes'
  );
  if (popWindow) {
    showToast('🍿 Opened Cinema Popout Window (Zero Restrictions!)', 'success');
  } else {
    showToast('Popup blocker active. Please allow browser popups for this site!', 'warning');
  }
}

// ==========================================
// Smart Resume (Pick Up Where You Paused)
// ==========================================
function getProgressMap() {
  try {
    return JSON.parse(localStorage.getItem('purestream_progress') || '{}');
  } catch (e) {
    return {};
  }
}

function checkSmartResume(videoId) {
  const map = getProgressMap();
  const savedSec = map[videoId]?.seconds || 0;

  if (savedSec > 35) {
    DOM.resumeTimeStr.textContent = formatSecondsToTime(savedSec);
    DOM.resumeBanner.style.display = 'flex';

    DOM.btnResumeAccept.onclick = () => {
      AppState.targetResumeSeconds = savedSec;
      mountPlayer(videoId, savedSec);
      DOM.resumeBanner.style.display = 'none';
      showToast(`▶️ Resumed from ${formatSecondsToTime(savedSec)}`, 'success');
    };

    DOM.btnResumeDismiss.onclick = () => {
      DOM.resumeBanner.style.display = 'none';
      AppState.targetResumeSeconds = 0;
      mountPlayer(videoId, 0);
    };
  } else {
    DOM.resumeBanner.style.display = 'none';
  }
}

// ==========================================
// DIRECT YOUTUBE SEARCH & AUTOCOMPLETE
// ==========================================
let suggestDebounce = null;

async function handleSearch(query) {
  if (!query || !query.trim()) {
    showToast('Please enter a search query!', 'warning');
    if (DOM.videoInput) DOM.videoInput.focus();
    return;
  }

  const q = query.trim();
  if (DOM.searchSuggestions) DOM.searchSuggestions.style.display = 'none';

  // If user pasted a direct YouTube link or ID, just play it immediately!
  const directId = extractYouTubeId(q);
  if (directId) {
    loadVideo(directId, true);
    if (DOM.videoInput) DOM.videoInput.value = '';
    if (DOM.btnClearInput) DOM.btnClearInput.style.display = 'none';
    return;
  }

  // Hide player arena so search results appear prominently at the very top!
  if (DOM.playerArena) DOM.playerArena.style.display = 'none';
  const iframe = document.getElementById('pure-iframe');
  if (iframe) iframe.src = 'about:blank';
  if (AppState.playbackTimer) clearInterval(AppState.playbackTimer);

  // Otherwise, perform direct search!
  const longOnly = DOM.checkLongOnly ? DOM.checkLongOnly.checked : false;
  DOM.tabBtnSearch.style.display = 'inline-flex';
  switchTab('search');
  DOM.searchPaneHeading.textContent = `Live YouTube Results for: "${q}" ${longOnly ? '(Long Videos & Marathons)' : ''}`;
  DOM.searchLoadingIndicator.style.display = 'flex';
  DOM.gridSearch.innerHTML = '';

  // Scroll to top smoothly so user immediately sees search results list!
  window.scrollTo({ top: 0, behavior: 'smooth' });

  try {
    // 1. Try local or Vercel server API
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&longOnly=${longOnly ? '1' : '0'}`);
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.results) && data.results.length > 0) {
        DOM.searchLoadingIndicator.style.display = 'none';
        renderSearchResults(data.results);
        return;
      }
    }
  } catch (err) {
    console.warn('Primary search API unreachable, falling back to public mirrors:', err);
  }

  // 2. Client-side fallback if primary returned 0 results or had an error
  await performFallbackSearch(q, longOnly);
}

async function performFallbackSearch(query, longOnly) {
  const publicMirrors = [
    'https://yewtu.be',
    'https://iv.ggtyler.dev',
    'https://inv.nadeko.net',
    'https://invidious.nerdvpn.de',
    'https://invidious.jing.rocks'
  ];
  let videos = [];

  for (const mirror of publicMirrors) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);
      const res = await fetch(`${mirror}/api/v1/search?q=${encodeURIComponent(query)}`, { 
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      clearTimeout(timeout);

      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw) && raw.length > 0) {
          videos = raw.filter(item => item.type === 'video').map(v => ({
            id: v.videoId,
            title: v.title || '',
            channel: v.author || '',
            duration: formatSecondsToTime(v.lengthSeconds || 0),
            durationSec: v.lengthSeconds || 0,
            isLong: (v.lengthSeconds || 0) >= 1200,
            views: `${(v.viewCount || 0).toLocaleString()} views`,
            thumb: v.videoThumbnails?.slice(-1)[0]?.url || `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`
          }));
          if (videos.length > 0) break;
        }
      }
    } catch (e) {}
  }

  DOM.searchLoadingIndicator.style.display = 'none';
  if (longOnly && videos.length > 0) {
    const filtered = videos.filter(v => v.isLong);
    renderSearchResults(filtered.length > 0 ? filtered : videos);
  } else {
    renderSearchResults(videos);
  }
}

function renderSearchResults(videos) {
  AppState.lastSearchResults = Array.isArray(videos) ? videos : [];
  DOM.gridSearch.innerHTML = '';
  DOM.searchResultCount.textContent = videos.length;

  if (videos.length === 0) {
    DOM.gridSearch.innerHTML = `
      <div class="empty-state">
        <p>No results found. Try searching for another topic or song!</p>
        <p style="font-size:0.8rem; margin-top:6px;">💡 Tip: Search by topic or artist (e.g. "Physics Wallah", "Arijit Singh", "Python Course")</p>
      </div>
    `;
    return;
  }

  videos.forEach(video => {
    DOM.gridSearch.appendChild(createVideoCardElement({
      id: video.id,
      title: video.title,
      channel: video.channel,
      duration: video.duration,
      quality: video.isLong ? '⏳ Marathon' : '1080p',
      category: video.isLong ? 'Long Video' : 'Video',
      thumb: video.thumb
    }));
  });

  showToast(`🎯 Found ${videos.length} videos! Click any to play Ad-Free.`, 'success');
}

// Auto-Suggest Dropdown
DOM.videoInput.addEventListener('input', () => {
  const val = DOM.videoInput.value.trim();
  DOM.btnClearInput.style.display = val.length > 0 ? 'inline-flex' : 'none';

  if (val.length < 2) {
    DOM.searchSuggestions.style.display = 'none';
    return;
  }

  clearTimeout(suggestDebounce);
  suggestDebounce = setTimeout(async () => {
    try {
      const res = await fetch(`/api/suggest?q=${encodeURIComponent(val)}`);
      if (res.ok) {
        const suggestions = await res.json();
        renderSuggestions(suggestions);
      }
    } catch (e) {
      DOM.searchSuggestions.style.display = 'none';
    }
  }, 200);
});

function renderSuggestions(list) {
  if (!list || list.length === 0) {
    DOM.searchSuggestions.style.display = 'none';
    return;
  }

  DOM.searchSuggestions.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'suggest-item';
    div.innerHTML = `<span class="suggest-icon">🔍</span><span>${escapeHtml(item)}</span>`;
    
    const selectSuggestion = (e) => {
      e.preventDefault();
      DOM.videoInput.value = item;
      DOM.searchSuggestions.style.display = 'none';
      if (DOM.videoInput) DOM.videoInput.blur();
      handleSearch(item);
    };

    div.addEventListener('pointerdown', selectSuggestion);
    div.addEventListener('click', selectSuggestion);
    DOM.searchSuggestions.appendChild(div);
  });
  DOM.searchSuggestions.style.display = 'block';
}

// Close suggestions on click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#search-form') && !e.target.closest('.search-input-wrapper')) {
    DOM.searchSuggestions.style.display = 'none';
  }
});

// ==========================================
// Lecture Timestamp Notes System
// ==========================================
function getNotes() {
  try {
    return JSON.parse(localStorage.getItem('purestream_notes') || '[]');
  } catch (e) {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem('purestream_notes', JSON.stringify(notes));
  updateLibraryCounts();
  renderVideoNotesStrip(AppState.currentVideoId);
  renderAllNotesGrid();
}

function parseTimeToSeconds(timeStr) {
  if (!timeStr) return 0;
  const parts = timeStr.trim().split(':').map(p => parseInt(p, 10));
  if (parts.some(isNaN)) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] || 0;
}

function openAddNoteModal() {
  DOM.inputNoteTime.value = formatSecondsToTime(AppState.currentPlaybackSeconds || 0);
  DOM.inputNoteText.value = '';
  DOM.modalAddNote.classList.add('active');
  setTimeout(() => DOM.inputNoteText.focus(), 100);

  DOM.btnSaveNoteConfirm.onclick = () => {
    const timeVal = DOM.inputNoteTime.value.trim();
    const textVal = DOM.inputNoteText.value.trim();
    if (!textVal) {
      showToast('Please enter note text!', 'warning');
      return;
    }

    const sec = parseTimeToSeconds(timeVal);
    const notes = getNotes();
    notes.unshift({
      id: 'note_' + Date.now(),
      videoId: AppState.currentVideoId,
      videoTitle: AppState.currentTitle,
      seconds: sec,
      timeStr: timeVal || '00:00',
      text: textVal,
      createdAt: Date.now()
    });

    saveNotes(notes);
    DOM.modalAddNote.classList.remove('active');
    showToast(`📝 Note saved at ${timeVal}!`, 'success');
  };
}

function renderVideoNotesStrip(videoId) {
  const notes = getNotes().filter(n => n.videoId === videoId);
  if (notes.length === 0) {
    DOM.videoNotesStrip.style.display = 'none';
    return;
  }

  DOM.videoNotesStrip.style.display = 'block';
  DOM.notesChipsContainer.innerHTML = '';

  notes.forEach(note => {
    const chip = document.createElement('div');
    chip.className = 'note-chip';
    chip.innerHTML = `
      <span class="note-time-badge">${note.timeStr}</span>
      <span>${escapeHtml(note.text)}</span>
      <span class="note-chip-del" title="Delete note">✕</span>
    `;

    chip.addEventListener('click', (e) => {
      if (e.target.classList.contains('note-chip-del')) {
        e.stopPropagation();
        deleteNote(note.id);
        return;
      }
      // Jump to this timestamp
      mountPlayer(AppState.currentVideoId, note.seconds);
      showToast(`⏩ Jumped to ${note.timeStr}`, 'info');
    });

    DOM.notesChipsContainer.appendChild(chip);
  });
}

function renderAllNotesGrid() {
  const container = document.getElementById('all-notes-list');
  if (!container) return;
  const notes = getNotes();
  container.innerHTML = '';

  if (notes.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No timestamp notes saved yet.</p>
        <p style="font-size:0.8rem; margin-top:4px;">Click "+ Note" below the player while watching to bookmark timestamps!</p>
      </div>
    `;
    return;
  }

  notes.forEach(note => {
    const card = document.createElement('div');
    card.className = 'note-item-card';
    card.innerHTML = `
      <div class="note-item-main">
        <span class="note-item-time">${note.timeStr}</span>
        <div class="note-item-content">
          <span class="note-item-title">${escapeHtml(note.text)}</span>
          <span class="note-item-video-name">📺 ${escapeHtml(note.videoTitle || 'Lecture')}</span>
        </div>
      </div>
      <button class="pill-btn danger note-del-btn" style="padding:0.3rem 0.6rem;">Delete</button>
    `;

    card.querySelector('.note-item-main').addEventListener('click', () => {
      AppState.targetResumeSeconds = note.seconds;
      loadVideo(note.videoId, true);
    });

    card.querySelector('.note-del-btn').addEventListener('click', () => {
      deleteNote(note.id);
    });

    container.appendChild(card);
  });
}

function deleteNote(noteId) {
  const notes = getNotes().filter(n => n.id !== noteId);
  saveNotes(notes);
  showToast('Note deleted', 'info');
}

function clearAllNotes() {
  if (confirm('Are you sure you want to delete all timestamp notes?')) {
    saveNotes([]);
    showToast('All timestamp notes deleted', 'info');
  }
}

function exportNotesAsFile() {
  const notes = getNotes().filter(n => n.videoId === AppState.currentVideoId);
  if (notes.length === 0) {
    showToast('No notes available for this video.', 'warning');
    return;
  }

  let fileContent = `========================================================\n`;
  fileContent += `PureStream Lecture Notes\n`;
  fileContent += `Lecture: ${AppState.currentTitle}\n`;
  fileContent += `Channel: ${AppState.currentChannel}\n`;
  fileContent += `Date: ${new Date().toLocaleString()}\n`;
  fileContent += `========================================================\n\n`;

  notes.forEach((n, idx) => {
    fileContent += `${idx + 1}. [${n.timeStr}] ${n.text}\n`;
    fileContent += `   Link: https://youtu.be/${n.videoId}?t=${n.seconds}\n\n`;
  });

  const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Lecture_Notes_${AppState.currentVideoId}.txt`;
  a.click();
  showToast('📄 Lecture Notes text file downloaded!', 'success');
}

// ==========================================
// Pomodoro Study Timer
// ==========================================
function startPomodoro(minutes, breakMins = 5) {
  if (minutes === 0) {
    stopPomodoro();
    showToast('Pomodoro Timer Stopped', 'info');
    return;
  }

  stopPomodoro();
  const totalSec = minutes * 60;
  AppState.pomodoro.isRunning = true;
  AppState.pomodoro.totalSeconds = totalSec;
  AppState.pomodoro.remainingSeconds = totalSec;
  AppState.pomodoro.mode = 'focus';

  DOM.pomodoroLiveDisplay.style.display = 'block';
  DOM.modalPomodoro.classList.remove('active');
  updatePomodoroDisplay();

  AppState.pomodoro.interval = setInterval(() => {
    AppState.pomodoro.remainingSeconds--;
    updatePomodoroDisplay();

    if (AppState.pomodoro.remainingSeconds <= 0) {
      clearInterval(AppState.pomodoro.interval);
      playChimeSound();

      if (AppState.pomodoro.mode === 'focus') {
        showToast(`🎉 Focus time complete! Take a ${breakMins} minute break!`, 'success');
        startPomodoro(breakMins, 0);
        AppState.pomodoro.mode = 'break';
      } else {
        showToast('⏰ Break finished! Ready for next study sprint?', 'info');
        stopPomodoro();
      }
    }
  }, 1000);

  showToast(`⏱️ ${minutes} Minutes Study Timer Started! Happy Learning!`, 'success');
}

function stopPomodoro() {
  if (AppState.pomodoro.interval) {
    clearInterval(AppState.pomodoro.interval);
  }
  AppState.pomodoro.isRunning = false;
  DOM.pomodoroHeaderText.textContent = 'Study Timer';
  DOM.btnPomodoroToggle.classList.remove('active');
  DOM.pomodoroLiveDisplay.style.display = 'none';
}

function updatePomodoroDisplay() {
  const m = Math.floor(AppState.pomodoro.remainingSeconds / 60);
  const s = AppState.pomodoro.remainingSeconds % 60;
  const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  DOM.pomoCountdown.textContent = str;
  DOM.pomodoroHeaderText.textContent = `${str} (${AppState.pomodoro.mode})`;
  DOM.btnPomodoroToggle.classList.add('active');
}

function playChimeSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch (e) {}
}

// ==========================================
// Screen-Off Background Audio & OLED Mode
// ==========================================
let keepAliveAudioCtx = null;
function initAudioContextKeepAlive() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!keepAliveAudioCtx) {
      keepAliveAudioCtx = new AudioCtx();
      const sampleRate = keepAliveAudioCtx.sampleRate;
      const buffer = keepAliveAudioCtx.createBuffer(1, sampleRate * 4, sampleRate);
      const source = keepAliveAudioCtx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      const gain = keepAliveAudioCtx.createGain();
      gain.gain.value = 0.0001; // inaudible keep-alive
      source.connect(gain);
      gain.connect(keepAliveAudioCtx.destination);
      source.start();
    }
    if (keepAliveAudioCtx.state === 'suspended') {
      keepAliveAudioCtx.resume();
    }
  } catch (e) {}
}

let cachedSilentBlobUrl = null;
function createSilentAudioBlobUrl() {
  if (cachedSilentBlobUrl) return cachedSilentBlobUrl;
  try {
    const sampleRate = 8000;
    const numSamples = sampleRate * 10; // 10 seconds of silence
    const buffer = new ArrayBuffer(44 + numSamples);
    const view = new DataView(buffer);
    view.setUint32(0, 0x52494646, false); // "RIFF"
    view.setUint32(4, 36 + numSamples, true);
    view.setUint32(8, 0x57415645, false); // "WAVE"
    view.setUint32(12, 0x666d7420, false); // "fmt "
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate, true);
    view.setUint16(32, 1, true);
    view.setUint16(34, 8, true);
    view.setUint32(36, 0x64617461, false); // "data"
    view.setUint32(40, numSamples, true);
    const u8 = new Uint8Array(buffer, 44, numSamples);
    u8.fill(128); // 8-bit PCM silence
    const blob = new Blob([buffer], { type: 'audio/wav' });
    cachedSilentBlobUrl = URL.createObjectURL(blob);
    return cachedSilentBlobUrl;
  } catch (e) {
    console.warn('Silent audio generation failed:', e);
    return '';
  }
}

function startBackgroundAudioSession() {
  const audio = DOM.bgAudioAnchor || document.getElementById('bg-audio-anchor');
  if (audio) {
    if (!audio.src) {
      const blobUrl = createSilentAudioBlobUrl();
      if (blobUrl) audio.src = blobUrl;
    }
    audio.play().catch(() => {});
  }
  initAudioContextKeepAlive();
  AppState.isPlaying = true;
  AppState.isUserPaused = false;
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = 'playing';
  }
  updateOledPlayPauseBtn(true);
}

function stopBackgroundAudioSession() {
  const audio = DOM.bgAudioAnchor || document.getElementById('bg-audio-anchor');
  if (audio) {
    try { audio.pause(); } catch (e) {}
  }
  AppState.isPlaying = false;
  AppState.isUserPaused = true;
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = 'paused';
  }
  updateOledPlayPauseBtn(false);
}

function updateMediaSession(title, channel, thumb) {
  if (!('mediaSession' in navigator)) return;
  try {
    const artworkList = [];
    const validThumb = thumb || AppState.currentThumb || `https://i.ytimg.com/vi/${AppState.currentVideoId}/hqdefault.jpg`;
    if (validThumb) {
      artworkList.push(
        { src: validThumb, sizes: '96x96', type: 'image/jpeg' },
        { src: validThumb, sizes: '128x128', type: 'image/jpeg' },
        { src: validThumb, sizes: '192x192', type: 'image/jpeg' },
        { src: validThumb, sizes: '256x256', type: 'image/jpeg' },
        { src: validThumb, sizes: '384x384', type: 'image/jpeg' },
        { src: validThumb, sizes: '512x512', type: 'image/jpeg' }
      );
    }

    navigator.mediaSession.metadata = new MediaMetadata({
      title: title || AppState.currentTitle || 'PureStream Music & Study',
      artist: channel || AppState.currentChannel || 'PureStream YouTube Player',
      album: 'PureStream Ad-Free Hub',
      artwork: artworkList
    });

    navigator.mediaSession.playbackState = AppState.isPlaying ? 'playing' : 'paused';

    const actionHandlers = [
      ['play', () => {
        AppState.isPlaying = true;
        AppState.isUserPaused = false;
        startBackgroundAudioSession();
        sendIframeCommand('playVideo');
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
        updateOledPlayPauseBtn(true);
      }],
      ['pause', () => {
        AppState.isPlaying = false;
        AppState.isUserPaused = true;
        stopBackgroundAudioSession();
        sendIframeCommand('pauseVideo');
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
        updateOledPlayPauseBtn(false);
      }],
      ['seekbackward', (details) => {
        seekVideo(-(details && details.seekOffset ? details.seekOffset : 10));
      }],
      ['seekforward', (details) => {
        seekVideo(details && details.seekOffset ? details.seekOffset : 10);
      }],
      ['previoustrack', () => {
        playPreviousAutoplayVideo();
      }],
      ['nexttrack', () => {
        playNextAutoplayVideo();
      }],
      ['stop', () => {
        AppState.isPlaying = false;
        AppState.isUserPaused = true;
        stopBackgroundAudioSession();
        sendIframeCommand('pauseVideo');
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
      }]
    ];

    actionHandlers.forEach(([action, handler]) => {
      try {
        navigator.mediaSession.setActionHandler(action, handler);
      } catch (e) {}
    });
  } catch (err) {
    console.warn('MediaSession registration error:', err);
  }
}

function togglePlayPause() {
  if (AppState.isPlaying) {
    AppState.isPlaying = false;
    AppState.isUserPaused = true;
    stopBackgroundAudioSession();
    sendIframeCommand('pauseVideo');
    updateOledPlayPauseBtn(false);
    showToast('⏸️ Playback Paused', 'info');
  } else {
    AppState.isPlaying = true;
    AppState.isUserPaused = false;
    startBackgroundAudioSession();
    sendIframeCommand('playVideo');
    updateOledPlayPauseBtn(true);
    showToast('▶️ Playback Resumed', 'success');
  }
}

function updateOledPlayPauseBtn(isPlaying) {
  const icon = DOM.oledPlayIcon || document.getElementById('oled-play-icon');
  if (icon) {
    if (isPlaying) {
      icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    } else {
      icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
  }
}

function updateOledTrackInfo() {
  const titleEl = DOM.oledVideoTitle || document.getElementById('oled-video-title');
  const channelEl = DOM.oledChannelName || document.getElementById('oled-channel-name');
  if (titleEl) {
    titleEl.textContent = AppState.currentTitle || 'PureStream Music';
  }
  if (channelEl) {
    channelEl.textContent = AppState.currentChannel || 'Ad-Free Playback Active';
  }
}

let oledClockInterval = null;
function startOledClock() {
  updateOledClockDisplay();
  if (oledClockInterval) clearInterval(oledClockInterval);
  oledClockInterval = setInterval(updateOledClockDisplay, 1000);
}

function stopOledClock() {
  if (oledClockInterval) {
    clearInterval(oledClockInterval);
    oledClockInterval = null;
  }
}

function updateOledClockDisplay() {
  const clockEl = DOM.oledClock || document.getElementById('oled-clock');
  const dateEl = DOM.oledDate || document.getElementById('oled-date');
  if (!clockEl) return;
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  clockEl.innerHTML = `${hours}:${minutes} <span class="oled-ampm">${ampm}</span>`;
  
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  }
}

function toggleAudioMode(forceState) {
  if (typeof forceState === 'boolean') {
    AppState.audioMode = forceState;
  } else {
    AppState.audioMode = !AppState.audioMode;
  }

  const overlay = DOM.audioFocusOverlay || document.getElementById('audio-focus-overlay');
  const btn = DOM.btnAudioMode || document.getElementById('btn-audio-mode');
  const playerScreenOffBtn = DOM.btnPlayerScreenOff || document.getElementById('btn-player-screen-off');

  if (AppState.audioMode) {
    // If no video is currently loaded, load a top relaxing music video
    if (!AppState.currentVideoId || (DOM.playerArena && DOM.playerArena.style.display === 'none')) {
      loadVideo('k3Gnd0wUluw', false, 'Arijit Singh Mashup 2024 | Nonstop Jukebox', 'Rolex Music');
    }
    if (overlay) overlay.style.display = 'flex';
    if (btn) {
      btn.classList.add('active');
      const txt = btn.querySelector('.btn-text');
      if (txt) txt.textContent = 'Music: ON';
    }
    if (playerScreenOffBtn) playerScreenOffBtn.classList.add('active');

    updateOledTrackInfo();
    startOledClock();
    enableScreenWakeLock();
    startBackgroundAudioSession();
    sendIframeCommand('playVideo');
    updateOledPlayPauseBtn(true);
    showToast('🎧 OLED Screen-Off Mode Active — 0% Pixel Power & Pocket Protected', 'success');
  } else {
    if (overlay) overlay.style.display = 'none';
    if (btn) {
      btn.classList.remove('active');
      const txt = btn.querySelector('.btn-text');
      if (txt) txt.textContent = 'Music Mode';
    }
    if (playerScreenOffBtn) playerScreenOffBtn.classList.remove('active');
    stopOledClock();
    showToast('🔆 Video screen restored', 'info');
  }
}

// Anti-Pause Screen-Lock Interceptors & Recovery
let wasPlayingBeforeLock = false;
let lockResumeTimer = null;

function showLockResumePrompt() {
  const widget = DOM.lockResumeWidget || document.getElementById('lock-resume-widget');
  if (!widget) return;
  const titleEl = DOM.lockResumeTitle || document.getElementById('lock-resume-title');
  if (titleEl) {
    titleEl.textContent = AppState.currentTitle || 'PureStream Song';
  }
  widget.style.display = 'flex';
  if (lockResumeTimer) clearTimeout(lockResumeTimer);
  lockResumeTimer = setTimeout(() => {
    hideLockResumePrompt();
  }, 9000);
}

function hideLockResumePrompt() {
  const widget = DOM.lockResumeWidget || document.getElementById('lock-resume-widget');
  if (widget) {
    widget.style.display = 'none';
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // Phone locked or screen turned off
    if (AppState.isPlaying && !AppState.isUserPaused && AppState.currentVideoId) {
      wasPlayingBeforeLock = true;
      const audio = DOM.bgAudioAnchor || document.getElementById('bg-audio-anchor');
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
      sendIframeCommand('playVideo');
    }
  } else if (document.visibilityState === 'visible') {
    // Phone screen turned on / unlocked / tab focused
    enableScreenWakeLock();
    if (wasPlayingBeforeLock && AppState.currentVideoId) {
      sendIframeCommand('playVideo');
      startBackgroundAudioSession();
      // Show one-tap resume widget in case mobile browser restricted automatic audio unpause
      showLockResumePrompt();
    }
  }
}, true);

window.addEventListener('pagehide', () => {
  if (AppState.isPlaying && !AppState.isUserPaused && AppState.currentVideoId) {
    wasPlayingBeforeLock = true;
    sendIframeCommand('playVideo');
  }
}, true);

// ==========================================
// Video Metadata & Info
// ==========================================
async function fetchVideoMetadata(videoId) {
  const oEmbedUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;
  try {
    const res = await fetch(oEmbedUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.title) {
        AppState.currentTitle = data.title;
        AppState.currentChannel = data.author_name || 'YouTube Educator';
        AppState.currentThumb = data.thumbnail_url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

        if (DOM.videoTitle) DOM.videoTitle.textContent = data.title;
        if (DOM.channelName) DOM.channelName.textContent = AppState.currentChannel;
        document.title = `${data.title} — PureStream (Ad-Free Study)`;

        updateMediaSession(AppState.currentTitle, AppState.currentChannel, AppState.currentThumb);
        updateOledTrackInfo();
        updateHistoryTitle(videoId, data.title, AppState.currentChannel, AppState.currentThumb);
        return;
      }
    }
  } catch (err) {}

  if (!AppState.currentTitle || AppState.currentTitle.startsWith('Playing [')) {
    if (DOM.videoTitle) DOM.videoTitle.textContent = `Playing [${videoId}] (No-Ads Mode)`;
  }
  if (!AppState.currentChannel) {
    if (DOM.channelName) DOM.channelName.textContent = 'Ad-Free Lecture / Song';
  }
  document.title = `${AppState.currentTitle || 'PureStream'} — PureStream`;
}

// ==========================================
// User Controls (Loop, Sleep Timer, Theater)
// ==========================================
function toggleLoop() {
  AppState.isLooping = !AppState.isLooping;
  mountPlayer(AppState.currentVideoId);
  if (AppState.isLooping) {
    DOM.btnLoopToggle.classList.add('active');
    DOM.btnLoopToggle.querySelector('span').textContent = 'Loop: ON';
    showToast('🔄 Video Loop Enabled (Auto Replay)', 'success');
  } else {
    DOM.btnLoopToggle.classList.remove('active');
    DOM.btnLoopToggle.querySelector('span').textContent = 'Loop: Off';
    showToast('Loop Disabled', 'info');
  }
}

function cycleSleepTimer() {
  const options = [0, 15, 30, 45, 60, 90, 120];
  const currentIndex = options.indexOf(AppState.sleepTimerRemaining);
  const nextMinutes = options[(currentIndex + 1) % options.length];

  if (AppState.sleepTimerTimeout) {
    clearTimeout(AppState.sleepTimerTimeout);
    AppState.sleepTimerTimeout = null;
  }

  AppState.sleepTimerRemaining = nextMinutes;

  if (nextMinutes === 0) {
    DOM.btnSleepTimer.classList.remove('active');
    DOM.sleepTimerText.textContent = 'Timer';
    showToast('💤 Sleep Timer Off', 'info');
  } else {
    DOM.btnSleepTimer.classList.add('active');
    DOM.sleepTimerText.textContent = `${nextMinutes}m`;
    showToast(`💤 Sleep Timer Set: Auto-stop in ${nextMinutes} minutes`, 'success');

    AppState.sleepTimerTimeout = setTimeout(() => {
      // Clear iframe to stop playback
      DOM.videoContainer.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#fff;font-size:1.1rem;">💤 Sleep Timer Finished. Good Night!</div>';
      DOM.btnSleepTimer.classList.remove('active');
      DOM.sleepTimerText.textContent = 'Timer';
      AppState.sleepTimerRemaining = 0;
      showToast('💤 Sleep Timer Finished: Playback Paused. Good night!', 'warning');
    }, nextMinutes * 60 * 1000);
  }
}

function toggleTheaterMode() {
  AppState.theaterMode = !AppState.theaterMode;
  if (AppState.theaterMode) {
    document.body.classList.add('theater-mode');
    DOM.btnTheaterToggle.classList.add('active');
    showToast('🖥️ Cinema Theater Mode: ON', 'info');
  } else {
    document.body.classList.remove('theater-mode');
    DOM.btnTheaterToggle.classList.remove('active');
    showToast('Theater Mode: Standard', 'info');
  }
}

function toggleFullscreen() {
  const elem = DOM.videoContainer;
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// ==========================================
// Local Storage: Library (History & Saved)
// ==========================================
function getHistory() {
  try {
    return JSON.parse(localStorage.getItem('purestream_history') || '[]');
  } catch (e) {
    return [];
  }
}

function saveHistory(list) {
  localStorage.setItem('purestream_history', JSON.stringify(list.slice(0, 50)));
  updateLibraryCounts();
}

function addToHistory(videoId, title = null, channel = null, thumb = null) {
  const history = getHistory().filter(item => item.id !== videoId);
  const finalTitle = title || AppState.currentTitle || `YouTube Video [${videoId}]`;
  const finalChannel = channel || AppState.currentChannel || 'PureStream';
  const finalThumb = thumb || AppState.currentThumb || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  history.unshift({
    id: videoId,
    title: finalTitle,
    channel: finalChannel,
    thumb: finalThumb,
    timestamp: Date.now()
  });
  saveHistory(history);
  renderHistoryGrid();
  renderRecentHistoryShelf();
}

function removeFromHistory(videoId) {
  const history = getHistory().filter(item => item.id !== videoId);
  saveHistory(history);
  renderHistoryGrid();
  renderRecentHistoryShelf();
  showToast('Removed from history', 'info');
}

function renderRecentHistoryShelf() {
  const shelf = document.getElementById('recent-history-shelf');
  const countEl = document.getElementById('shelf-history-count');
  const carousel = document.getElementById('recent-history-carousel');
  if (!shelf || !carousel) return;

  const history = getHistory();
  if (history.length === 0) {
    shelf.style.display = 'none';
    return;
  }

  shelf.style.display = 'block';
  if (countEl) countEl.textContent = history.length;
  carousel.innerHTML = '';

  const progressMap = getProgressMap();
  const recentItems = history.slice(0, 12); // Show top 12 recent

  recentItems.forEach(item => {
    const prog = progressMap[item.id];
    const card = document.createElement('div');
    card.className = 'shelf-card';
    card.title = `${item.title} (Click to continue watching)`;

    const progressHtml = prog && prog.seconds ? `
      <div class="shelf-progress-line" style="width: 50%;"></div>
    ` : '';

    const timeLabel = prog && prog.timeStr ? `⏱️ Resumes at ${prog.timeStr}` : 'Watched';

    card.innerHTML = `
      <button class="shelf-card-del" title="Remove from History" data-id="${item.id}">✕</button>
      <div class="shelf-thumb-wrapper">
        <img class="shelf-thumb" src="${item.thumb || `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}" alt="${escapeHtml(item.title)}" loading="lazy">
        ${progressHtml}
      </div>
      <div class="shelf-card-body">
        <h4 class="shelf-card-title">${escapeHtml(item.title)}</h4>
        <span class="shelf-card-channel">${escapeHtml(item.channel || 'YouTube')}</span>
        <span class="shelf-card-time">${timeLabel}</span>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.shelf-card-del')) {
        e.stopPropagation();
        removeFromHistory(item.id);
        return;
      }
      if (prog && prog.seconds) {
        AppState.targetResumeSeconds = prog.seconds;
      }
      loadVideo(item.id, true, item.title, item.channel, item.thumb);
    });

    carousel.appendChild(card);
  });
}

function updateHistoryTitle(videoId, title, channel, thumb) {
  const history = getHistory();
  const item = history.find(i => i.id === videoId);
  if (item) {
    item.title = title;
    item.channel = channel;
    item.thumb = thumb;
    saveHistory(history);
    renderHistoryGrid();
    renderRecentHistoryShelf();
  }
}

function clearHistory() {
  if (confirm('Are you sure you want to clear your entire watch history?')) {
    localStorage.removeItem('purestream_history');
    localStorage.removeItem('purestream_progress');
    updateLibraryCounts();
    renderHistoryGrid();
    renderRecentHistoryShelf();
    showToast('Watch History Cleared', 'info');
  }
}

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem('purestream_saved') || '[]');
  } catch (e) {
    return [];
  }
}

function saveSaved(list) {
  localStorage.setItem('purestream_saved', JSON.stringify(list));
  updateLibraryCounts();
}

function toggleBookmark() {
  const videoId = AppState.currentVideoId;
  const saved = getSaved();
  const existsIndex = saved.findIndex(item => item.id === videoId);

  if (existsIndex >= 0) {
    saved.splice(existsIndex, 1);
    saveSaved(saved);
    updateBookmarkButtonState(videoId);
    renderSavedGrid();
    showToast('Removed from Saved Watchlist', 'info');
  } else {
    saved.unshift({
      id: videoId,
      title: AppState.currentTitle,
      channel: AppState.currentChannel,
      thumb: AppState.currentThumb,
      savedAt: Date.now()
    });
    saveSaved(saved);
    updateBookmarkButtonState(videoId);
    renderSavedGrid();
    showToast('⭐ Saved to Watchlist (Watch Later)', 'success');
  }
}

function updateBookmarkButtonState(videoId) {
  const saved = getSaved();
  const isSaved = saved.some(item => item.id === videoId);
  if (isSaved) {
    DOM.btnBookmark.classList.add('active');
    DOM.btnBookmark.querySelector('span').textContent = 'Saved ⭐';
  } else {
    DOM.btnBookmark.classList.remove('active');
    DOM.btnBookmark.querySelector('span').textContent = 'Save';
  }
}

function clearSaved() {
  if (confirm('Are you sure you want to delete all saved videos?')) {
    localStorage.removeItem('purestream_saved');
    updateLibraryCounts();
    renderSavedGrid();
    updateBookmarkButtonState(AppState.currentVideoId);
    showToast('Saved List Cleared', 'info');
  }
}

function updateLibraryCounts() {
  const hList = getHistory();
  const sList = getSaved();
  const nList = getNotes();
  if (DOM.historyCount) DOM.historyCount.textContent = hList.length;
  if (DOM.savedCount) DOM.savedCount.textContent = sList.length;
  if (DOM.totalNotesCount) DOM.totalNotesCount.textContent = nList.length;
}

// ==========================================
// Rendering Video Cards & Grids
// ==========================================
function createVideoCardElement(video) {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.dataset.id = video.id;

  const durationClass = (video.isLong || (video.duration && video.duration.split(':').length >= 3)) ? 'card-duration-badge long-badge' : 'card-duration-badge';
  const durationBadge = video.duration ? `<span class="${durationClass}">⏱️ ${video.duration}</span>` : '';
  const qualityBadge = video.quality ? `<span class="card-quality-badge">${video.quality}</span>` : '';
  const categoryTag = video.category ? `<span class="card-category-tag">${video.category}</span>` : '';
  const viewsText = video.views || '1.5M views';
  const initial = (video.channel || 'Y').trim().charAt(0).toUpperCase();

  card.innerHTML = `
    <div class="card-thumb-wrapper">
      <img class="card-thumb" src="${video.thumb || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}" alt="${escapeHtml(video.title)}" loading="lazy">
      ${qualityBadge}
      ${durationBadge}
      <div class="card-play-overlay">
        <div class="card-play-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-header-row">
        <div class="card-channel-avatar" title="${escapeHtml(video.channel || 'Channel')}">${initial}</div>
        <div class="card-title-col">
          <h3 class="card-title" title="${escapeHtml(video.title)}">${escapeHtml(video.title)}</h3>
          <div class="card-channel-row">
            <span class="card-channel">${escapeHtml(video.channel || 'YouTube Educator')}</span>
            <span class="card-verified-badge" title="Verified">✓</span>
          </div>
          <div class="card-sub-meta">
            <span class="card-views">${viewsText}</span>
            <span class="meta-dot">•</span>
            ${categoryTag}
          </div>
        </div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    loadVideo(video.id, true, video.title, video.channel, video.thumb);
  });

  return card;
}

// ==========================================
// Curated Playlists & Up Next Queue Engine
// ==========================================
function createPlaylistCardElement(playlist) {
  const card = document.createElement('div');
  card.className = 'video-card is-playlist';
  card.dataset.playlistId = playlist.id;

  const totalTracks = playlist.videos ? playlist.videos.length : (playlist.trackCount || 5);

  card.innerHTML = `
    <div class="card-thumb-wrapper">
      <img src="${playlist.thumb}" alt="${escapeHtml(playlist.title)}" class="card-thumb" loading="lazy" />
      <div class="thumb-overlay-playlist">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z"/>
        </svg>
        <span>${totalTracks} TRACKS</span>
      </div>
      <div class="card-badges">
        <span class="badge-playlist-tag">📑 PLAYLIST</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-header-row">
        <div class="card-channel-avatar" style="background:#00e5ff; color:#000; font-weight:800; font-size:0.75rem;">▶</div>
        <div class="card-title-col">
          <h3 class="card-title" title="${escapeHtml(playlist.title)}">${escapeHtml(playlist.title)}</h3>
          <div class="card-channel-row">
            <span class="card-channel">${escapeHtml(playlist.channel)}</span>
            <span class="card-verified-badge" title="Verified">✓</span>
          </div>
          <div class="card-meta-row">
            <span>Non-stop Mix • ${totalTracks} Songs</span>
          </div>
        </div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    loadPlaylist(playlist.id, 0);
  });

  return card;
}

function loadPlaylist(playlistId, startTrackIndex = 0) {
  const playlist = CURATED_PLAYLISTS.find(p => p.id === playlistId);
  if (!playlist || !playlist.videos || playlist.videos.length === 0) return;

  AppState.activePlaylist = {
    ...playlist,
    currentIndex: Math.max(0, Math.min(startTrackIndex, playlist.videos.length - 1))
  };
  AppState.playlistAutoplay = true;

  renderActivePlaylistPanel();

  const track = playlist.videos[AppState.activePlaylist.currentIndex];
  loadVideo(track.id, true, track.title, track.channel, track.thumb);

  showToast(`📑 Now Playing Playlist: ${playlist.title} (Track ${AppState.activePlaylist.currentIndex + 1}/${playlist.videos.length})`, 'success');
}

function renderActivePlaylistPanel() {
  const panel = DOM.activePlaylistPanel || document.getElementById('active-playlist-panel');
  if (!panel) return;

  if (!AppState.activePlaylist || !AppState.activePlaylist.videos) {
    panel.style.display = 'none';
    return;
  }

  const pl = AppState.activePlaylist;
  panel.style.display = 'block';

  const titleEl = DOM.activePlaylistTitle || document.getElementById('active-playlist-title');
  const channelEl = DOM.playlistChannelLabel || document.getElementById('playlist-channel-label');
  const indicatorEl = DOM.playlistTrackIndicator || document.getElementById('playlist-track-indicator');
  const autoplayBtn = DOM.btnPlaylistAutoplay || document.getElementById('btn-playlist-autoplay');
  const itemsContainer = DOM.activePlaylistItems || document.getElementById('active-playlist-items');

  if (titleEl) titleEl.textContent = pl.title;
  if (channelEl) channelEl.textContent = pl.channel || 'PureStream Music';
  if (indicatorEl) indicatorEl.textContent = `Track ${pl.currentIndex + 1} of ${pl.videos.length}`;

  if (autoplayBtn) {
    if (AppState.playlistAutoplay) {
      autoplayBtn.classList.add('active');
      autoplayBtn.querySelector('span:last-child').textContent = 'Autoplay Next';
    } else {
      autoplayBtn.classList.remove('active');
      autoplayBtn.querySelector('span:last-child').textContent = 'Autoplay: OFF';
    }
  }

  if (itemsContainer) {
    itemsContainer.innerHTML = '';
    pl.videos.forEach((track, idx) => {
      const isCurrent = idx === pl.currentIndex;
      const item = document.createElement('div');
      item.className = `playlist-track-item ${isCurrent ? 'is-active' : ''}`;
      item.dataset.index = idx;
      item.title = `Click to play directly: ${track.title}`;

      item.innerHTML = `
        <span class="track-item-num">${isCurrent ? '▶' : (idx + 1)}</span>
        <img src="${track.thumb || `https://i.ytimg.com/vi/${track.id}/hqdefault.jpg`}" alt="${escapeHtml(track.title)}" class="track-item-thumb" loading="lazy" />
        <div class="track-item-meta">
          <span class="track-item-title">${escapeHtml(track.title)}</span>
          <span class="track-item-channel">${escapeHtml(track.channel || '')} • ${track.duration || ''}</span>
        </div>
      `;

      item.addEventListener('click', () => {
        playPlaylistItemByIndex(idx);
      });

      itemsContainer.appendChild(item);
    });

    const activeEl = itemsContainer.children[pl.currentIndex];
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }
}

function playPlaylistItemByIndex(index) {
  if (!AppState.activePlaylist || !AppState.activePlaylist.videos[index]) return;
  AppState.activePlaylist.currentIndex = index;
  const track = AppState.activePlaylist.videos[index];

  const indicatorEl = DOM.playlistTrackIndicator || document.getElementById('playlist-track-indicator');
  if (indicatorEl) {
    indicatorEl.textContent = `Track ${index + 1} of ${AppState.activePlaylist.videos.length}`;
  }

  const itemsContainer = DOM.activePlaylistItems || document.getElementById('active-playlist-items');
  if (itemsContainer) {
    Array.from(itemsContainer.children).forEach((child, i) => {
      if (i === index) {
        child.classList.add('is-active');
        const num = child.querySelector('.track-item-num');
        if (num) num.textContent = '▶';
        child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        child.classList.remove('is-active');
        const num = child.querySelector('.track-item-num');
        if (num) num.textContent = String(i + 1);
      }
    });
  }

  loadVideo(track.id, false, track.title, track.channel, track.thumb);
  showToast(`▶️ Playing: ${track.title}`, 'info');
}

function playNextPlaylistItem() {
  if (AppState.activePlaylist && AppState.activePlaylist.videos) {
    const nextIdx = (AppState.activePlaylist.currentIndex + 1) % AppState.activePlaylist.videos.length;
    playPlaylistItemByIndex(nextIdx);
  } else {
    playNextAutoplayVideo();
  }
}

function playPreviousPlaylistItem() {
  if (AppState.activePlaylist && AppState.activePlaylist.videos) {
    const len = AppState.activePlaylist.videos.length;
    const prevIdx = (AppState.activePlaylist.currentIndex - 1 + len) % len;
    playPlaylistItemByIndex(prevIdx);
  } else {
    playPreviousAutoplayVideo();
  }
}

// ==========================================
// YouTube-Style Continuous Autoplay System
// ==========================================
let autoplayCountdownTimer = null;
let autoplayCountdownSeconds = 4;
let currentPendingNextVideo = null;
let isAutoplayTransitioning = false;

function initAutoplayState() {
  updateAutoplayButtonUI();
}

function updateAutoplayButtonUI() {
  const btn = DOM.btnAutoplayToggle || document.getElementById('btn-autoplay-toggle');
  if (!btn) return;
  const badge = btn.querySelector('.autoplay-switch-badge');
  if (AppState.autoplay) {
    btn.classList.add('active');
    btn.title = 'Autoplay is ON: Next video will start automatically';
    if (badge) badge.textContent = 'ON';
  } else {
    btn.classList.remove('active');
    btn.title = 'Autoplay is OFF: Videos will stop when finished';
    if (badge) badge.textContent = 'OFF';
  }
}

function toggleAutoplay(forceState) {
  if (typeof forceState === 'boolean') {
    AppState.autoplay = forceState;
  } else {
    AppState.autoplay = !AppState.autoplay;
  }
  AppState.playlistAutoplay = AppState.autoplay;
  try {
    localStorage.setItem('purestream_autoplay', AppState.autoplay ? '1' : '0');
  } catch (e) {}

  updateAutoplayButtonUI();
  if (DOM.btnPlaylistAutoplay) {
    if (AppState.autoplay) {
      DOM.btnPlaylistAutoplay.classList.add('active');
      const label = DOM.btnPlaylistAutoplay.querySelector('span:last-child');
      if (label) label.textContent = 'Autoplay Next';
    } else {
      DOM.btnPlaylistAutoplay.classList.remove('active');
      const label = DOM.btnPlaylistAutoplay.querySelector('span:last-child');
      if (label) label.textContent = 'Autoplay: OFF';
    }
  }

  if (AppState.autoplay) {
    showToast('🔁 Autoplay Next Video: ON (YouTube Style)', 'success');
  } else {
    cancelAutoplayCountdown();
    showToast('Autoplay Next Video: OFF', 'info');
  }
}

function getNextAutoplayVideo() {
  const currentId = AppState.currentVideoId;

  // 1. If currently in an active playlist, pick the next playlist track
  if (AppState.activePlaylist && Array.isArray(AppState.activePlaylist.videos) && AppState.activePlaylist.videos.length > 0) {
    const pl = AppState.activePlaylist;
    const nextIdx = (pl.currentIndex + 1) % pl.videos.length;
    const nextItem = pl.videos[nextIdx];
    if (nextItem) {
      return {
        ...nextItem,
        source: 'playlist',
        playlistIndex: nextIdx
      };
    }
  }

  // 2. If user searched and clicked a video from search results, pick the next search result
  if (Array.isArray(AppState.lastSearchResults) && AppState.lastSearchResults.length > 0) {
    const currIdx = AppState.lastSearchResults.findIndex(v => v.id === currentId);
    if (currIdx >= 0 && currIdx + 1 < AppState.lastSearchResults.length) {
      return {
        ...AppState.lastSearchResults[currIdx + 1],
        source: 'search'
      };
    }
  }

  // 3. Find next video from the current category's queue
  const category = getVideoCategory(currentId, AppState.currentTitle, AppState.currentChannel);
  let categoryPool = [];
  if (category === 'music') {
    categoryPool = [...(CURATED_VIDEOS.songs || []), ...(CURATED_VIDEOS.lofi || [])];
  } else if (category === 'coding') {
    categoryPool = CURATED_VIDEOS.coding || [];
  } else if (category === 'study') {
    categoryPool = [...(CURATED_VIDEOS.study || []), ...(CURATED_VIDEOS.upsc || [])];
  } else {
    categoryPool = getAllCuratedVideos();
  }

  const poolIdx = categoryPool.findIndex(v => v.id === currentId);
  if (poolIdx >= 0 && poolIdx + 1 < categoryPool.length) {
    return { ...categoryPool[poolIdx + 1], source: 'category' };
  } else if (categoryPool.length > 0) {
    const candidate = categoryPool.find(v => v.id !== currentId) || categoryPool[0];
    if (candidate) return { ...candidate, source: 'category' };
  }

  // 4. Fallback to all curated videos
  const allList = getAllCuratedVideos();
  const allIdx = allList.findIndex(v => v.id === currentId);
  if (allIdx >= 0 && allIdx + 1 < allList.length) {
    return { ...allList[allIdx + 1], source: 'all' };
  }

  return allList.find(v => v.id !== currentId) || allList[0] || null;
}

function handleVideoEnded() {
  if (isAutoplayTransitioning) return;

  // 1. If Loop is active, replay current video
  if (AppState.isLooping) {
    sendIframeCommand('seekTo', [0, true]);
    sendIframeCommand('playVideo');
    return;
  }

  // 2. If Autoplay is disabled, do nothing
  if (!AppState.autoplay) {
    return;
  }

  // 3. Find next video
  const nextVideo = getNextAutoplayVideo();
  if (!nextVideo || !nextVideo.id) {
    return;
  }

  currentPendingNextVideo = nextVideo;

  // 4. In OLED Screen-Off (Music) Mode, seamlessly play next track with 1s pause
  if (AppState.audioMode) {
    isAutoplayTransitioning = true;
    showToast(`🎵 Next: ${nextVideo.title}`, 'info');
    setTimeout(() => {
      isAutoplayTransitioning = false;
      executeAutoplayNext(nextVideo);
    }, 1000);
    return;
  }

  // 5. In normal video mode, start the YouTube-style countdown overlay
  startAutoplayCountdown(nextVideo);
}

function startAutoplayCountdown(nextVideo) {
  cancelAutoplayCountdown();
  currentPendingNextVideo = nextVideo;

  const overlay = DOM.autoplayCountdownOverlay || document.getElementById('autoplay-countdown-overlay');
  if (!overlay) {
    executeAutoplayNext(nextVideo);
    return;
  }

  const thumbEl = DOM.autoplayNextThumb || document.getElementById('autoplay-next-thumb');
  const titleEl = DOM.autoplayNextTitle || document.getElementById('autoplay-next-title');
  const channelEl = DOM.autoplayNextChannel || document.getElementById('autoplay-next-channel');
  const timerEl = DOM.autoplayCountdownTimer || document.getElementById('autoplay-countdown-timer');
  const progressBar = DOM.autoplayProgressBar || document.getElementById('autoplay-progress-bar');

  if (thumbEl) thumbEl.src = nextVideo.thumb || `https://i.ytimg.com/vi/${nextVideo.id}/hqdefault.jpg`;
  if (titleEl) titleEl.textContent = nextVideo.title || 'Next Video';
  if (channelEl) channelEl.textContent = nextVideo.channel || 'Up Next';

  autoplayCountdownSeconds = 4;
  if (timerEl) timerEl.textContent = `Playing in ${autoplayCountdownSeconds}s...`;

  if (progressBar) {
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    setTimeout(() => {
      progressBar.style.transition = 'width 4s linear';
      progressBar.style.width = '100%';
    }, 50);
  }

  overlay.style.display = 'flex';

  autoplayCountdownTimer = setInterval(() => {
    autoplayCountdownSeconds -= 1;
    if (timerEl) {
      timerEl.textContent = autoplayCountdownSeconds > 0 ? `Playing in ${autoplayCountdownSeconds}s...` : 'Starting...';
    }

    if (autoplayCountdownSeconds <= 0) {
      cancelAutoplayCountdown();
      executeAutoplayNext(nextVideo);
    }
  }, 1000);
}

function cancelAutoplayCountdown() {
  if (autoplayCountdownTimer) {
    clearInterval(autoplayCountdownTimer);
    autoplayCountdownTimer = null;
  }
  currentPendingNextVideo = null;
  const overlay = DOM.autoplayCountdownOverlay || document.getElementById('autoplay-countdown-overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}

function executeAutoplayNext(nextVideo) {
  cancelAutoplayCountdown();
  if (!nextVideo || !nextVideo.id) return;

  if (nextVideo.source === 'playlist' && typeof nextVideo.playlistIndex === 'number' && AppState.activePlaylist) {
    AppState.activePlaylist.currentIndex = nextVideo.playlistIndex;
    renderActivePlaylistPanel();
  }

  loadVideo(nextVideo.id, false, nextVideo.title, nextVideo.channel, nextVideo.thumb);
  showToast(`▶️ Up Next: ${nextVideo.title}`, 'success');
}

function playNextAutoplayVideo() {
  cancelAutoplayCountdown();
  const nextVideo = getNextAutoplayVideo();
  if (nextVideo) {
    executeAutoplayNext(nextVideo);
  } else {
    showToast('No more videos in queue', 'info');
  }
}

function playPreviousAutoplayVideo() {
  cancelAutoplayCountdown();
  if (AppState.activePlaylist) {
    playPreviousPlaylistItem();
    return;
  }
  const history = getHistory();
  if (history && history.length > 1) {
    const prev = history[1]; // Most recent previous item
    loadVideo(prev.id, false, prev.title, prev.channel, prev.thumb);
    showToast(`⏮️ Previous: ${prev.title}`, 'info');
    return;
  }
  seekVideo(-15);
}

function getVideoCategory(videoId, title = '', channel = '') {
  for (const cat of Object.keys(CURATED_VIDEOS)) {
    if (CURATED_VIDEOS[cat].some(v => v.id === videoId)) {
      if (cat === 'songs' || cat === 'lofi') return 'music';
      return cat;
    }
  }
  for (const pl of CURATED_PLAYLISTS) {
    if (pl.videos && pl.videos.some(v => v.id === videoId)) {
      if (pl.category === 'songs' || pl.category === 'lofi') return 'music';
      return pl.category;
    }
  }
  const text = `${title} ${channel}`.toLowerCase();
  if (/(song|music|mashup|jukebox|audio|lofi|acoustic|lyrics|arijit|anuv|pasoori|barsaat|romance|gravero|bollywood|coke studio|beats|singer|hits|singer|album)/i.test(text)) {
    return 'music';
  }
  if (/(code|coding|python|javascript|web dev|developer|programming|html|css|react|ai|tech|software|chai aur code|codewithharry)/i.test(text)) {
    return 'coding';
  }
  if (/(physics|chemistry|neet|jee|math|revision|oneshot|one shot|study|lecture|drishti|upsc|exam|alakh)/i.test(text)) {
    return 'study';
  }
  return 'general';
}

function renderRecommendations(currentId = null) {
  const container = DOM.gridRecommendations || document.getElementById('grid-recommendations');
  if (!container) return;
  container.innerHTML = '';

  const id = currentId || AppState.currentVideoId;
  const category = getVideoCategory(id, AppState.currentTitle, AppState.currentChannel);
  const filter = AppState.recommendationFilter || 'all';

  const heading = DOM.recommendationsHeading || document.getElementById('recommendations-heading');
  const subtext = DOM.recommendationsSubtext || document.getElementById('recommendations-subtext');
  if (heading && subtext) {
    if (category === 'music') {
      heading.textContent = '🎵 Up Next & Related Songs';
      subtext.textContent = 'Non-stop songs and music mixes • Click any song or playlist to play directly';
    } else if (category === 'coding') {
      heading.textContent = '💻 Related Coding Tutorials & Bootcamps';
      subtext.textContent = 'Developer roadmaps and programming courses';
    } else if (category === 'study') {
      heading.textContent = '📚 Related Lectures & One-Shot Marathons';
      subtext.textContent = 'Full chapter revisions and concept marathons';
    } else {
      heading.textContent = '✨ Up Next / Recommended Videos';
      subtext.textContent = 'Click any video or playlist to play instantly without ads';
    }
  }

  let relevantPlaylists = [];
  if (category === 'music') {
    relevantPlaylists = CURATED_PLAYLISTS.filter(p => p.category === 'songs' || p.category === 'lofi');
  } else if (category === 'coding') {
    relevantPlaylists = CURATED_PLAYLISTS.filter(p => p.category === 'coding');
  } else if (category === 'study') {
    relevantPlaylists = CURATED_PLAYLISTS.filter(p => p.category === 'study');
  } else {
    relevantPlaylists = CURATED_PLAYLISTS;
  }

  let relevantVideos = [];
  if (category === 'music') {
    const songList = [...(CURATED_VIDEOS.songs || []), ...(CURATED_VIDEOS.lofi || [])];
    relevantVideos = songList.filter(v => v.id !== id);
  } else if (category === 'coding') {
    relevantVideos = (CURATED_VIDEOS.coding || []).filter(v => v.id !== id);
  } else if (category === 'study') {
    const studyList = [...(CURATED_VIDEOS.study || []), ...(CURATED_VIDEOS.upsc || [])];
    relevantVideos = studyList.filter(v => v.id !== id);
  } else {
    relevantVideos = getAllCuratedVideos().filter(v => v.id !== id);
  }

  if (filter === 'playlists') {
    relevantPlaylists.forEach(pl => container.appendChild(createPlaylistCardElement(pl)));
  } else if (filter === 'songs') {
    relevantVideos.slice(0, 10).forEach(v => container.appendChild(createVideoCardElement(v)));
  } else {
    relevantPlaylists.forEach(pl => container.appendChild(createPlaylistCardElement(pl)));
    relevantVideos.slice(0, 8).forEach(v => container.appendChild(createVideoCardElement(v)));
  }

  // Auto-Attach Playlist Queue if none active and playing music
  if (!AppState.activePlaylist && category === 'music') {
    const matchingPl = CURATED_PLAYLISTS.find(p => p.videos && p.videos.some(v => v.id === id)) 
      || CURATED_PLAYLISTS[0];
    if (matchingPl) {
      const trackIdx = matchingPl.videos.findIndex(v => v.id === id);
      AppState.activePlaylist = {
        ...matchingPl,
        currentIndex: trackIdx >= 0 ? trackIdx : 0
      };
      renderActivePlaylistPanel();
    }
  } else if (AppState.activePlaylist) {
    renderActivePlaylistPanel();
  }
}

function initCuratedGrids() {
  const allContainer = document.getElementById('grid-all');
  if (allContainer) {
    allContainer.innerHTML = '';
    // Show top playlists on home feed
    CURATED_PLAYLISTS.slice(0, 2).forEach(pl => {
      allContainer.appendChild(createPlaylistCardElement(pl));
    });
    const allList = getAllCuratedVideos();
    allList.forEach(item => {
      allContainer.appendChild(createVideoCardElement(item));
    });
  }

  // Populate curated playlists in Songs tab
  const songsPlaylistsContainer = document.getElementById('grid-songs-playlists');
  if (songsPlaylistsContainer) {
    songsPlaylistsContainer.innerHTML = '';
    const musicPlaylists = CURATED_PLAYLISTS.filter(p => p.category === 'songs' || p.category === 'lofi');
    musicPlaylists.forEach(pl => {
      songsPlaylistsContainer.appendChild(createPlaylistCardElement(pl));
    });
  }

  ['study', 'coding', 'songs', 'lofi', 'upsc'].forEach(category => {
    const container = document.getElementById(`grid-${category}`);
    if (container && CURATED_VIDEOS[category]) {
      container.innerHTML = '';
      CURATED_VIDEOS[category].forEach(item => {
        container.appendChild(createVideoCardElement(item));
      });
    }
  });

  renderRecommendations();
}

function renderHistoryGrid() {
  const container = document.getElementById('grid-history');
  if (!container) return;
  const history = getHistory();
  const map = getProgressMap();
  container.innerHTML = '';

  if (history.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Your watch history is currently empty.</p>
        <p style="font-size:0.8rem; margin-top:4px;">Search for any lecture or song using the search bar above!</p>
      </div>
    `;
    return;
  }

  history.forEach(item => {
    const prog = map[item.id];
    const durationLabel = prog ? `Watched till ${prog.timeStr}` : 'Watched';
    container.appendChild(createVideoCardElement({
      ...item,
      duration: durationLabel,
      category: 'Resume Available'
    }));
  });
}

function renderSavedGrid() {
  const container = document.getElementById('grid-saved');
  if (!container) return;
  const saved = getSaved();
  container.innerHTML = '';

  if (saved.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>You have not saved any videos yet.</p>
        <p style="font-size:0.8rem; margin-top:4px;">Click the "Save" button below the player to bookmark your favorites.</p>
      </div>
    `;
    return;
  }

  saved.forEach(item => {
    container.appendChild(createVideoCardElement({
      ...item,
      category: 'Saved'
    }));
  });
}

// ==========================================
// Tabs Controller
// ==========================================
function initTabs() {
  DOM.tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });
}

function switchTab(targetTab) {
  DOM.tabButtons.forEach(b => {
    if (b.dataset.tab === targetTab) b.classList.add('active');
    else b.classList.remove('active');
  });

  // Sync mobile bottom dock items
  document.querySelectorAll('.mobile-nav-item').forEach(mBtn => {
    if (mBtn.dataset.tab === targetTab) {
      mBtn.classList.add('active');
    } else if (mBtn.dataset.tab) {
      mBtn.classList.remove('active');
    }
  });

  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const activePane = document.getElementById(`pane-${targetTab}`);
  if (activePane) activePane.classList.add('active');
}

function initMobileBottomNav() {
  const mNavAll = document.getElementById('m-nav-all');
  const mNavStudy = document.getElementById('m-nav-study');
  const mNavCoding = document.getElementById('m-nav-coding');
  const mNavSongs = document.getElementById('m-nav-songs');
  const mNavHistory = document.getElementById('m-nav-history');
  const mNavSearch = document.getElementById('m-nav-search');

  const scrollToTabs = () => {
    const tabsSec = document.querySelector('.content-tabs-section');
    if (tabsSec) {
      tabsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (mNavAll) {
    mNavAll.addEventListener('click', () => {
      switchTab('all');
      scrollToTabs();
    });
  }
  if (mNavStudy) {
    mNavStudy.addEventListener('click', () => {
      switchTab('study');
      scrollToTabs();
    });
  }
  if (mNavCoding) {
    mNavCoding.addEventListener('click', () => {
      switchTab('coding');
      scrollToTabs();
    });
  }
  if (mNavSongs) {
    mNavSongs.addEventListener('click', () => {
      switchTab('songs');
      scrollToTabs();
    });
  }
  if (mNavHistory) {
    mNavHistory.addEventListener('click', () => {
      switchTab('history');
      scrollToTabs();
    });
  }
  if (mNavSearch) {
    mNavSearch.addEventListener('click', () => {
      const searchSec = document.getElementById('search-section');
      if (searchSec) {
        searchSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => {
        if (DOM.videoInput) {
          DOM.videoInput.focus();
          DOM.videoInput.select();
        }
      }, 300);
    });
  }
}

// ==========================================
// Event Listeners Setup
// ==========================================
function initEventListeners() {
  const btnHome = document.getElementById('btn-home');
  const brandLogo = document.querySelector('.brand-logo');
  const navigateToHomeFeed = () => {
    closePlayerAndBackToFeed();
    switchTab('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (btnHome) btnHome.addEventListener('click', navigateToHomeFeed);
  if (brandLogo) brandLogo.addEventListener('click', (e) => {
    e.preventDefault();
    navigateToHomeFeed();
  });

  // Watch View Back to Feed Button
  if (DOM.btnBackToFeed) {
    DOM.btnBackToFeed.addEventListener('click', closePlayerAndBackToFeed);
  }

  // Back to Home from Search Results
  if (DOM.btnBackHomeSearch) {
    DOM.btnBackHomeSearch.addEventListener('click', () => {
      switchTab('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Touch Rewind & Forward (-10s / +10s)
  const btnTouchRewind = document.getElementById('btn-touch-rewind');
  const btnTouchForward = document.getElementById('btn-touch-forward');
  if (btnTouchRewind) {
    btnTouchRewind.addEventListener('click', () => seekVideo(-10));
  }
  if (btnTouchForward) {
    btnTouchForward.addEventListener('click', () => seekVideo(10));
  }

  // Mobile Bottom App Dock
  initMobileBottomNav();

  // Engine quick pills
  DOM.enginePills.forEach(pill => {
    pill.addEventListener('click', () => {
      if (pill.dataset.engine) {
        switchEngine(pill.dataset.engine);
      }
    });
  });

  // Cinema Popout Fix button
  if (DOM.btnPopoutPlayer) {
    DOM.btnPopoutPlayer.addEventListener('click', openCinemaPopout);
  }

  // Random Video Button (YouTube style fresh recommendation)
  const btnRandom = document.getElementById('btn-random-video');
  if (btnRandom) {
    btnRandom.addEventListener('click', playRandomVideo);
  }

  // View All History Button
  const btnViewAllHistory = document.getElementById('btn-view-all-history');
  if (btnViewAllHistory) {
    btnViewAllHistory.addEventListener('click', () => {
      switchTab('history');
      const tabsSec = document.querySelector('.content-tabs-section');
      if (tabsSec) tabsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Search Form Submit (Works on Mobile Keyboard Search Button + Desktop Enter Key)
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (DOM.videoInput) {
        DOM.videoInput.blur(); // Dismiss mobile soft keyboard
        handleSearch(DOM.videoInput.value);
      }
    });
  }

  // Search Submit Button Click
  DOM.btnSearchSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (DOM.videoInput) {
      DOM.videoInput.blur();
      handleSearch(DOM.videoInput.value);
    }
  });

  DOM.videoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      DOM.videoInput.blur();
      handleSearch(DOM.videoInput.value);
    }
  });

  // Screen Wake Lock & Background Audio Activation on first interaction (required by mobile browsers)
  const initMobileAudioAndWakeLock = () => {
    enableScreenWakeLock();
    startBackgroundAudioSession();
  };
  document.addEventListener('pointerdown', initMobileAudioAndWakeLock, { once: true });
  document.addEventListener('touchstart', initMobileAudioAndWakeLock, { once: true, passive: true });

  // Clear Input
  DOM.btnClearInput.addEventListener('click', () => {
    DOM.videoInput.value = '';
    DOM.btnClearInput.style.display = 'none';
    DOM.searchSuggestions.style.display = 'none';
    DOM.videoInput.focus();
  });

  // Paste from Clipboard
  DOM.btnPaste.addEventListener('click', async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        DOM.videoInput.value = text;
        DOM.btnClearInput.style.display = 'inline-flex';
        handleSearch(text);
      }
    } catch (err) {
      showToast('Clipboard access denied. Please paste manually into the search bar (Ctrl+V)', 'warning');
      DOM.videoInput.focus();
    }
  });

  // Quick Study Tags Click
  document.querySelectorAll('.study-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query;
      DOM.videoInput.value = query;
      handleSearch(query);
    });
  });

  // Music & OLED Screen-Off Mode Listeners
  if (DOM.btnAudioMode) DOM.btnAudioMode.addEventListener('click', () => toggleAudioMode());
  if (DOM.btnPlayerScreenOff) DOM.btnPlayerScreenOff.addEventListener('click', () => toggleAudioMode());
  if (DOM.btnBannerScreenOff) DOM.btnBannerScreenOff.addEventListener('click', () => toggleAudioMode(true));
  if (DOM.btnExitAudioMode) DOM.btnExitAudioMode.addEventListener('click', () => toggleAudioMode(false));
  if (DOM.btnOledPlayPause) DOM.btnOledPlayPause.addEventListener('click', togglePlayPause);
  if (DOM.btnOledRewind) DOM.btnOledRewind.addEventListener('click', () => seekVideo(-10));
  if (DOM.btnOledForward) DOM.btnOledForward.addEventListener('click', () => seekVideo(10));

  // Lock Resume Action Handlers
  if (DOM.btnLockResumeAction) {
    DOM.btnLockResumeAction.addEventListener('click', () => {
      sendIframeCommand('playVideo');
      startBackgroundAudioSession();
      hideLockResumePrompt();
      showToast('▶️ Resumed Playing', 'success');
    });
  }
  if (DOM.btnLockResumeDismiss) {
    DOM.btnLockResumeDismiss.addEventListener('click', () => {
      hideLockResumePrompt();
    });
  }

  // Double-tap anywhere on OLED overlay (except buttons) to wake screen
  if (DOM.audioFocusOverlay) {
    let lastOledTap = 0;
    const handleOledTap = (e) => {
      if (e.target.closest('button')) return;
      const now = Date.now();
      if (now - lastOledTap < 380) {
        toggleAudioMode(false);
      }
      lastOledTap = now;
    };
    DOM.audioFocusOverlay.addEventListener('click', handleOledTap);
    DOM.audioFocusOverlay.addEventListener('touchend', handleOledTap);
  }

  // Playlist Queue Navigation & Autoplay
  if (DOM.btnPlaylistPrev) DOM.btnPlaylistPrev.addEventListener('click', playPreviousPlaylistItem);
  if (DOM.btnPlaylistNext) DOM.btnPlaylistNext.addEventListener('click', playNextPlaylistItem);
  if (DOM.btnPlaylistAutoplay) {
    DOM.btnPlaylistAutoplay.addEventListener('click', () => {
      AppState.playlistAutoplay = !AppState.playlistAutoplay;
      if (AppState.playlistAutoplay) {
        DOM.btnPlaylistAutoplay.classList.add('active');
        DOM.btnPlaylistAutoplay.querySelector('span:last-child').textContent = 'Autoplay Next';
        showToast('🔁 Playlist Autoplay: ON', 'info');
      } else {
        DOM.btnPlaylistAutoplay.classList.remove('active');
        DOM.btnPlaylistAutoplay.querySelector('span:last-child').textContent = 'Autoplay: OFF';
        showToast('Autoplay: OFF', 'info');
      }
    });
  }
  if (DOM.btnPlaylistClose) {
    DOM.btnPlaylistClose.addEventListener('click', () => {
      if (DOM.activePlaylistPanel) DOM.activePlaylistPanel.style.display = 'none';
      AppState.activePlaylist = null;
      showToast('Playlist queue hidden', 'info');
    });
  }

  // Recommendations Filter Pills (All / Songs / Playlists)
  document.querySelectorAll('.rec-filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.rec-filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.recommendationFilter = pill.dataset.filter || 'all';
      renderRecommendations(AppState.currentVideoId);
    });
  });

  // Autoplay Next Toggle & Countdown Action Handlers
  if (DOM.btnAutoplayToggle) {
    DOM.btnAutoplayToggle.addEventListener('click', () => toggleAutoplay());
  }
  if (DOM.btnAutoplayCancel) {
    DOM.btnAutoplayCancel.addEventListener('click', () => {
      cancelAutoplayCountdown();
      showToast('Autoplay cancelled', 'info');
    });
  }
  if (DOM.btnAutoplayPlaynow) {
    DOM.btnAutoplayPlaynow.addEventListener('click', () => {
      if (currentPendingNextVideo) {
        executeAutoplayNext(currentPendingNextVideo);
      } else {
        playNextAutoplayVideo();
      }
    });
  }

  // YouTube Iframe PostMessage Listener for Autoplay Next Track
  window.addEventListener('message', (event) => {
    if (!event.data) return;
    try {
      let data = event.data;
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
      if (data && data.event === 'onStateChange') {
        const state = data.info; // 0 = ended, 1 = playing, 2 = paused
        if (state === 0) {
          handleVideoEnded();
        } else if (state === 1) {
          cancelAutoplayCountdown();
          AppState.isPlaying = true;
          AppState.isUserPaused = false;
          wasPlayingBeforeLock = false;
          hideLockResumePrompt();
          startBackgroundAudioSession();
        } else if (state === 2) {
          if (document.visibilityState === 'visible' && !wasPlayingBeforeLock) {
            AppState.isPlaying = false;
          }
        }
      } else if (data && data.event === 'infoDelivery' && data.info) {
        if (typeof data.info.duration === 'number' && data.info.duration > 0) {
          AppState.currentDuration = data.info.duration;
        }
        if (typeof data.info.currentTime === 'number') {
          AppState.currentPlaybackSeconds = Math.floor(data.info.currentTime);
          // If playback reached near end of duration (within 0.8s), trigger video end
          if (AppState.currentDuration > 5 && data.info.currentTime >= AppState.currentDuration - 0.8) {
            handleVideoEnded();
          }
        }
        if (data.info.playerState === 0) {
          handleVideoEnded();
        } else if (data.info.playerState === 1) {
          cancelAutoplayCountdown();
          AppState.isPlaying = true;
          AppState.isUserPaused = false;
        }
      }
    } catch (e) {}
  });

  // Pomodoro
  DOM.btnPomodoroToggle.addEventListener('click', () => {
    DOM.modalPomodoro.classList.add('active');
  });

  document.querySelectorAll('.pomo-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.dataset.minutes, 10);
      const brk = parseInt(btn.dataset.break || '5', 10);
      startPomodoro(mins, brk);
    });
  });

  // Add Timestamp Note
  DOM.btnAddNote.addEventListener('click', openAddNoteModal);
  DOM.btnExportNotes.addEventListener('click', exportNotesAsFile);

  // Clear buttons
  if (DOM.btnClearHistory) DOM.btnClearHistory.addEventListener('click', clearHistory);
  if (DOM.btnClearSaved) DOM.btnClearSaved.addEventListener('click', clearSaved);
  if (DOM.btnClearAllNotes) DOM.btnClearAllNotes.addEventListener('click', clearAllNotes);

  // Loop, Sleep Timer, Theater, Fullscreen, Bookmark, Share
  if (DOM.btnLoopToggle) DOM.btnLoopToggle.addEventListener('click', toggleLoop);
  if (DOM.btnSleepTimer) DOM.btnSleepTimer.addEventListener('click', cycleSleepTimer);
  if (DOM.btnAmbientToggle) {
    DOM.btnAmbientToggle.addEventListener('click', () => {
      AppState.ambientGlow = !AppState.ambientGlow;
      localStorage.setItem('purestream_ambient', AppState.ambientGlow ? '1' : '0');
      updateAmbientGlow();
      showToast(AppState.ambientGlow ? '✨ Ambient Cinema Glow: ON' : 'Ambient Glow: OFF', 'info');
    });
  }
  if (DOM.btnTheaterToggle) DOM.btnTheaterToggle.addEventListener('click', toggleTheaterMode);
  if (DOM.btnFullscreen) DOM.btnFullscreen.addEventListener('click', toggleFullscreen);
  if (DOM.btnBookmark) DOM.btnBookmark.addEventListener('click', toggleBookmark);
  if (DOM.btnShare) DOM.btnShare.addEventListener('click', shareVideo);

  // Keyboard Shortcuts modal
  if (DOM.btnShortcuts && DOM.modalShortcuts) {
    DOM.btnShortcuts.addEventListener('click', () => {
      DOM.modalShortcuts.classList.add('active');
    });
  }

  // Modals close
  document.querySelectorAll('.modal-close, .modal-backdrop').forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (e.target === elem || elem.classList.contains('modal-close')) {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
      }
    });
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', handleGlobalKeydown);
}

function handleGlobalKeydown(e) {
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    return;
  }

  const key = e.key.toLowerCase();
  switch (key) {
    case 'f':
      e.preventDefault();
      toggleFullscreen();
      break;

    case 't':
      e.preventDefault();
      toggleTheaterMode();
      break;

    case 'p':
      e.preventDefault();
      openCinemaPopout();
      break;

    case 'n':
      e.preventDefault();
      openAddNoteModal();
      break;

    case '?':
      DOM.modalShortcuts.classList.toggle('active');
      break;

    case 'escape':
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
      if (DOM.playerArena && DOM.playerArena.style.display !== 'none') {
        closePlayerAndBackToFeed();
      }
      if (AppState.theaterMode) toggleTheaterMode();
      break;
  }
}

function shareVideo() {
  const shareUrl = `${window.location.origin}${window.location.pathname}?v=${AppState.currentVideoId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast('🔗 Clean Share Link copied to clipboard!', 'success');
    }).catch(() => {
      prompt('Copy link:', shareUrl);
    });
  } else {
    prompt('Copy link:', shareUrl);
  }
}

function formatSecondsToTime(totalSeconds) {
  if (!totalSeconds || isNaN(totalSeconds)) return '00:00';
  const sec = Math.floor(totalSeconds);
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;

  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateAmbientGlow() {
  if (!AppState.ambientGlow) {
    if (document.body) document.body.classList.add('ambient-off');
    if (DOM.btnAmbientToggle) {
      DOM.btnAmbientToggle.classList.remove('active');
      const text = DOM.btnAmbientToggle.querySelector('.btn-text');
      if (text) text.textContent = 'Glow: OFF';
    }
    return;
  }

  if (document.body) document.body.classList.remove('ambient-off');
  if (DOM.btnAmbientToggle) {
    DOM.btnAmbientToggle.classList.add('active');
    const text = DOM.btnAmbientToggle.querySelector('.btn-text');
    if (text) text.textContent = 'Glow: ON';
  }
}

function loadPreferences() {
  const savedAmbient = localStorage.getItem('purestream_ambient');
  if (savedAmbient !== null) {
    AppState.ambientGlow = savedAmbient === '1';
  }
  updateAmbientGlow();
}

function showToast(message, type = 'info') {
  if (!DOM.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}
