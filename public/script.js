/**
 * PureStream — Student Study & Music Hub (Direct Search & Long Videos)
 * Engine, Multi-Source Player, Timestamp Notes, Pomodoro, and YouTube Search
 */

// ==========================================
// Verified 100% Working Long Videos & Jukeboxes
// ==========================================
const CURATED_VIDEOS = {
  study: [
    {
      id: 'qDZik-DcQJA',
      title: 'Complete Class 12th PHYSICS in 1 Shot | Concepts + PYQs Marathon',
      channel: 'Physics Wallah - Alakh Pandey',
      duration: '11:55:01',
      quality: '1080p FHD',
      category: 'PW 12h Mega Marathon',
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
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/e-GKLde9V9s/hqdefault.jpg'
    }
  ],
  coding: [
    {
      id: 'rfscVS0vtbw',
      title: 'Learn Python - Full Course for Beginners [Tutorial 4+ Hours]',
      channel: 'freeCodeCamp.org',
      duration: '4:26:52',
      quality: '1080p 60fps',
      category: 'Python Complete',
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
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg'
    },
    {
      id: 'W6NZfCO5SIk',
      title: 'JavaScript Course for Beginners – Your First Web Applications',
      channel: 'freeCodeCamp.org',
      duration: '3:26:43',
      quality: '1080p 60fps',
      category: 'JavaScript 3.5h',
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
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg'
    },
    {
      id: 'm4-HM_sCvtQ',
      title: 'Full Stack Web Development Roadmap & Core Fundamentals Explained',
      channel: 'Fireship',
      duration: '11:40',
      quality: '1080p FHD',
      category: 'Web Dev Roadmap',
      isLong: false,
      thumb: 'https://i.ytimg.com/vi/m4-HM_sCvtQ/hqdefault.jpg'
    }
  ],
  songs: [
    {
      id: 'fzXV2_vm-6g',
      title: 'Arijit Singh Mashup 2024 | Nonstop - Jukebox | Bollywood Hits',
      channel: 'Rolex Music',
      duration: '51:01',
      quality: '1080p HD',
      category: 'Arijit Singh Hits',
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
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/zeVWTY31Vn8/hqdefault.jpg'
    },
    {
      id: 'zoFLbJ_09aM',
      title: 'Mind Relax Lofi Mashup | Mind Relaxing Songs for Focus & Sleep',
      channel: 'Relaxing Beats',
      duration: '29:33',
      quality: '1080p HD',
      category: 'Hindi Lofi',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/zoFLbJ_09aM/hqdefault.jpg'
    },
    {
      id: 't3NOpF5ieBo',
      title: 'Lofi Bollywood Mashup ❤️ | Classic vs Modern Melodies',
      channel: 'Gravero Lofi',
      duration: '24:38',
      quality: '1080p HD',
      category: 'Bollywood Lofi',
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/t3NOpF5ieBo/hqdefault.jpg'
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
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg'
    },
    {
      id: 'WPni755-Krg',
      title: 'Study Music Alpha Waves: Relaxing Studying Music, Brain Power (3 Hours)',
      channel: 'Yellow Brick Cinema',
      duration: '3:00:00',
      quality: '1080p FHD',
      category: 'Alpha Waves (3h)',
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
      isLong: true,
      thumb: 'https://i.ytimg.com/vi/BKJNLAExaQI/hqdefault.jpg'
    },
    {
      id: 'NaaBWqNC_sQ',
      title: 'मध्य कालीन इतिहास | गुलाम वंश 🔥 | Khan Sir History Special Class',
      channel: 'Khan GS Research Centre',
      duration: '1:15:25',
      quality: '1080p FHD',
      category: 'Khan Sir Special',
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
      isLong: false,
      thumb: 'https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg'
    }
  ]
};

// ==========================================
// Dynamic Video Helpers (YouTube Style Diversity)
// ==========================================
function getAllCuratedVideos() {
  const all = [];
  const seen = new Set();
  Object.values(CURATED_VIDEOS).forEach(catList => {
    if (Array.isArray(catList)) {
      catList.forEach(vid => {
        if (vid && vid.id && !seen.has(vid.id)) {
          seen.add(vid.id);
          all.push(vid);
        }
      });
    }
  });
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
  const all = getAllCuratedVideos();
  if (all.length === 0) return;
  const candidates = all.filter(v => v.id !== AppState.currentVideoId);
  const pool = candidates.length > 0 ? candidates : all;
  const picked = pool[Math.floor(Math.random() * pool.length)];

  showToast(`🎲 Naya Video: "${picked.title.slice(0, 38)}..."`, 'info');
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
  resumeBanner: document.getElementById('resume-banner'),
  resumeTimeStr: document.getElementById('resume-time-str'),
  btnResumeAccept: document.getElementById('btn-resume-accept'),
  btnResumeDismiss: document.getElementById('btn-resume-dismiss'),
  audioFocusOverlay: document.getElementById('audio-focus-overlay'),
  btnExitAudioMode: document.getElementById('btn-exit-audio-mode'),
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
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadPreferences();
  initCuratedGrids();
  initTabs();
  initEventListeners();
  updateLibraryCounts();
  renderHistoryGrid();
  renderRecentHistoryShelf();
  renderSavedGrid();
  renderAllNotesGrid();

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
});

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

function seekVideo(deltaSeconds) {
  const newSeconds = Math.max(0, (AppState.currentPlaybackSeconds || 0) + deltaSeconds);
  AppState.currentPlaybackSeconds = newSeconds;

  const iframe = document.getElementById('pure-iframe');
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'seekTo',
        args: [newSeconds, true]
      }), '*');
    } catch (e) {}
  }

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
      if (!video.src) {
        video.src = 'data:video/mp4;base64,AAAAHGZ0eXBNNEVWIExpYmRhdmkxLjAuMQAAAAZpdGVtAAAAAGNvZGMAAAA';
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
    showToast('Popup blocker active. Browser popup allow karein!', 'warning');
  }
}

// ==========================================
// Smart Resume (जहाँ छोड़ा था वहीं से शुरू)
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
    showToast('Kripya search karne ke liye kuch likhein!', 'warning');
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
  DOM.gridSearch.innerHTML = '';
  DOM.searchResultCount.textContent = videos.length;

  if (videos.length === 0) {
    DOM.gridSearch.innerHTML = `
      <div class="empty-state">
        <p>Koi results nahi mile. Dusra topic ya gaane ka naam try karein!</p>
        <p style="font-size:0.8rem; margin-top:6px;">💡 Tip: Sirf topic likhein (jaise "PW Physics", "Arijit Mashup", "UPSC History")</p>
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
      showToast('Kripya note text likhein!', 'warning');
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
        <p>Aapne abhi tak koi timestamp notes save nahi kiye hain.</p>
        <p style="font-size:0.8rem; margin-top:4px;">Video dekhte waqt "+ Add Note" button dabayein!</p>
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
  if (confirm('Aap saare timestamp notes delete karna chahte hain?')) {
    saveNotes([]);
    showToast('Saare notes delete kar diye gaye', 'info');
  }
}

function exportNotesAsFile() {
  const notes = getNotes().filter(n => n.videoId === AppState.currentVideoId);
  if (notes.length === 0) {
    showToast('Is video ke liye koi notes nahi hain.', 'warning');
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
// Audio / Distraction-Free Focus Mode
// ==========================================
function toggleAudioMode() {
  AppState.audioMode = !AppState.audioMode;
  if (AppState.audioMode) {
    DOM.audioFocusOverlay.style.display = 'flex';
    DOM.btnAudioMode.classList.add('active');
    DOM.btnAudioMode.querySelector('.btn-text').textContent = 'Audio: ON';
    showToast('🎧 Distraction-Free Audio Mode Active', 'info');
  } else {
    DOM.audioFocusOverlay.style.display = 'none';
    DOM.btnAudioMode.classList.remove('active');
    DOM.btnAudioMode.querySelector('.btn-text').textContent = 'Focus Mode';
    showToast('Video screen restored', 'info');
  }
}

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
    showToast('🔄 Video Loop Enabled (गाना/म्यूजिक बार-बार बजेगा)', 'success');
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
      showToast('💤 Sleep Timer Finished: Playback Paused. Shubh Ratri!', 'warning');
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
  showToast('Video history se hata diya gaya', 'info');
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
      <button class="shelf-card-del" title="History se hatayein" data-id="${item.id}">✕</button>
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
  if (confirm('Aap apna pura watch history clear karna chahte hain?')) {
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
  if (confirm('Aap apne saare Saved Videos delete karna chahte hain?')) {
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
      <h3 class="card-title" title="${escapeHtml(video.title)}">${escapeHtml(video.title)}</h3>
      <div class="card-meta">
        <span class="card-channel">${escapeHtml(video.channel || 'YouTube Educator')}</span>
        ${categoryTag}
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    loadVideo(video.id, true, video.title, video.channel, video.thumb);
  });

  return card;
}

function initCuratedGrids() {
  const allContainer = document.getElementById('grid-all');
  if (allContainer) {
    allContainer.innerHTML = '';
    const allList = getAllCuratedVideos();
    allList.forEach(item => {
      allContainer.appendChild(createVideoCardElement(item));
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

function renderRecommendations(currentId = null) {
  const container = document.getElementById('grid-recommendations');
  if (!container) return;
  container.innerHTML = '';
  const allList = getAllCuratedVideos().filter(v => v.id !== currentId);
  const picked = allList.slice(0, 8);
  picked.forEach(item => {
    container.appendChild(createVideoCardElement(item));
  });
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
        <p>Aapka watch history abhi khali hai.</p>
        <p style="font-size:0.8rem; margin-top:4px;">Direct search se koi bhi lecture ya gaana search karein!</p>
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
        <p>Aapne abhi tak koi video save nahi kiya hai.</p>
        <p style="font-size:0.8rem; margin-top:4px;">Player ke niche "Save" button daba kar playlist banayein.</p>
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

  // Screen Wake Lock Activation on first interaction (required by mobile browsers)
  document.addEventListener('pointerdown', enableScreenWakeLock, { once: true });
  document.addEventListener('touchstart', enableScreenWakeLock, { once: true, passive: true });

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
      showToast('Clipboard access nahi mila. Manually search box me paste karein (Ctrl+V)', 'warning');
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

  // Audio Mode
  DOM.btnAudioMode.addEventListener('click', toggleAudioMode);
  DOM.btnExitAudioMode.addEventListener('click', toggleAudioMode);

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
  DOM.btnLoopToggle.addEventListener('click', toggleLoop);
  DOM.btnSleepTimer.addEventListener('click', cycleSleepTimer);
  DOM.btnAmbientToggle.addEventListener('click', () => {
    AppState.ambientGlow = !AppState.ambientGlow;
    localStorage.setItem('purestream_ambient', AppState.ambientGlow ? '1' : '0');
    updateAmbientGlow();
    showToast(AppState.ambientGlow ? '✨ Ambient Cinema Glow: ON' : 'Ambient Glow: OFF', 'info');
  });
  DOM.btnTheaterToggle.addEventListener('click', toggleTheaterMode);
  DOM.btnFullscreen.addEventListener('click', toggleFullscreen);
  DOM.btnBookmark.addEventListener('click', toggleBookmark);
  DOM.btnShare.addEventListener('click', shareVideo);

  // Keyboard Shortcuts modal
  DOM.btnShortcuts.addEventListener('click', () => {
    DOM.modalShortcuts.classList.add('active');
  });

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
      prompt('Link copy karein:', shareUrl);
    });
  } else {
    prompt('Link copy karein:', shareUrl);
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
    document.body.classList.add('ambient-off');
    DOM.btnAmbientToggle.classList.remove('active');
    DOM.btnAmbientToggle.querySelector('.btn-text').textContent = 'Glow: OFF';
    return;
  }

  document.body.classList.remove('ambient-off');
  DOM.btnAmbientToggle.classList.add('active');
  DOM.btnAmbientToggle.querySelector('.btn-text').textContent = 'Glow: ON';
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
