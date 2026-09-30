# 🎓 PureStream — Distraction-Free Student Study & Music Hub

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://pure-stream-wine.vercel.app)
[![No Ads](https://img.shields.io/badge/YouTube-100%25%20Ad--Free-red?style=for-the-badge&logo=youtube)](https://pure-stream-wine.vercel.app)
[![Mobile Friendly](https://img.shields.io/badge/PWA-Mobile%20Optimized-blue?style=for-the-badge&logo=android)](https://pure-stream-wine.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub Repositories](https://img.shields.io/badge/GitHub-Dual%20Push%20Active-black?style=for-the-badge&logo=github)](https://github.com/codex-priyanshu/Pure-Stream)

> **PureStream** is a lightweight, high-performance web platform tailored for students, developers, and music lovers. It offers 100% ad-free, high-definition (up to 4K / 1080p FHD) streaming for long-form lectures, marathon revisions, coding courses, and continuous music jukeboxes.  
> **No need to copy-paste YouTube URLs manually — search directly inside the application!**

---

## 🌐 Live Application
Experience the live application here:  
👉 **[https://pure-stream-wine.vercel.app](https://pure-stream-wine.vercel.app)**  
*(Fully responsive on Mobile, Tablet, and Desktop)*

---

## 🚀 Key Features

### 1. 🎲 YouTube-Style Dynamic Home Recommendations
- Automatically serves a **fresh, diverse video recommendation on every visit or page refresh** (curated from study marathons, coding tutorials, Lofi beats, and UPSC lectures).
- Features a **"🎲 Random Video"** button above the player for instant one-click discovery without repetitive defaults.

### 2. 🕒 "Continue Watching" Watch History Shelf
- Prominent horizontal carousel shelf positioned right above the player.
- **Instant Metadata Capture:** Automatically records video titles, channels, and thumbnails the moment any video is selected.
- **Smart Progress Indicators:** Displays a red progress bar and an exact resume label (e.g., `⏱️ Resumes at 01:24:15`).
- **One-Click Resume & Item Management:** Click any past video to jump directly to where you left off, or remove it using the hover delete button (`✕`).

### 3. 🔍 Direct YouTube Search & Live Suggestions
- Search directly for any topic, educator, or song (e.g., *Physics Wallah Class 12*, *Python 10-Hour Course*, *Arijit Singh Jukebox*).
- Provides instant **real-time query auto-suggestions**.
- Automatically loads full search result cards with smooth scrolling, without requiring external YouTube links.

### 4. 📱 Mobile First & Progressive Web App (PWA)
- **App-Like Bottom Dock:** Fast navigation dock on mobile screens (`📚 Study`, `💻 Coding`, `🔍 Search`, `🎵 Music`, `🕒 History`).
- **Touch Seek Buttons:** Dedicated on-screen `⏪ 10s` and `10s ⏩` buttons for quick touch navigation during lectures.
- **Installable PWA:** Can be added to your mobile home screen ("Add to Home Screen") to launch as a standalone fullscreen native app without browser URL bars.

### 5. 🔆 Screen Wake Lock (Prevents Mobile Sleep)
- Keeps mobile and desktop screens awake continuously while watching long educational marathons (`🔆 Screen Awake: ON`).
- Combines the modern Screen Wake Lock API with a low-power heartbeat fallback.

### 6. ⏳ "Long Videos Only" Marathon Filter
- Dedicated filter toggle that excludes short clips and distraction-heavy Shorts.
- Surfaces comprehensive **1-shot revisions, multi-hour bootcamps, and full album jukeboxes (20 minutes to 12+ hours)**.

### 7. ⏱️ Smart Resume Engine
- Silently saves playback progress every 5 seconds to local browser storage.
- Automatically prompts to resume multi-hour lectures exactly where you left off upon return.

### 8. 📝 Lecture Timestamp Notes System
- Take timestamped notes during study sessions with a single keypress (`N` or `+ Add Note`).
- Generates interactive, clickable timestamp badges (e.g., `[01:15:20]`) under the player that instantly jump to that point in the lecture.
- **Export Notes:** Download all your notes as a clean `.txt` study file with direct jump links.

### 9. ⏱️ Pomodoro Study Sprint Timer
- Built-in study timer supporting scientific focus intervals:
  - **25 Mins Focus + 5 Mins Break** (Standard sprint)
  - **50 Mins Deep Work + 10 Mins Break** (Marathon sprint)
  - Audible chime alerts on interval completion.

### 10. 🍿 Cinema Popout (100% Bypass)
- Opens an isolated, distraction-free popup player that guarantees 100% playback for videos with embedding restrictions.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|:---:|:---|
| <kbd>Space</kbd> / <kbd>K</kbd> | Toggle Play / Pause |
| <kbd>N</kbd> | Add Lecture Timestamp Note |
| <kbd>F</kbd> | Toggle Fullscreen Mode |
| <kbd>T</kbd> | Toggle Cinema Theater Mode |
| <kbd>P</kbd> | Open Cinema Popout Window |
| <kbd>J</kbd> / <kbd>L</kbd> | Seek Backward / Forward 10 Seconds |
| <kbd>←</kbd> / <kbd>→</kbd> | Seek Backward / Forward 5 Seconds |
| <kbd>?</kbd> | Display Keyboard Shortcuts Helper |

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** Semantic HTML5, Vanilla JavaScript (ES6+), Modern CSS3 (Cyberpunk Dark Theme, Custom Variables, Flexbox/Grid).
- **Player Integration:** YouTube No-Cookie Embed API, Multi-source fallback streaming (Invidious / Piped).
- **Backend API:** Node.js server with live YouTube search scrapers, auto-suggestion proxies, and Vercel Serverless Functions (`/api/search`, `/api/suggest`).
- **Data Persistence:** LocalStorage (zero tracking, complete user privacy, local note and history retention).

```
pure-tube/
├── index.html          # Main HTML structure with Watch History Shelf & Mobile Dock
├── style.css           # Responsive Dark Cyberpunk styling and UI animations
├── script.js           # Core player logic, dynamic recommendations, wake lock & history
├── server.js           # Local Node.js proxy server with live YouTube search scraper
├── start.bat           # 1-Click Windows execution script
├── manifest.json       # Progressive Web App (PWA) configuration
├── icon.svg            # Scalable vector application icon
├── vercel.json         # Vercel serverless routing and headers configuration
├── api/
│   ├── search.js       # Vercel serverless handler for direct search
│   └── suggest.js      # Vercel serverless handler for search query autocomplete
└── public/             # Production distribution files served by Vercel CDN
```

---

## 💻 Local Development Setup

### Option 1: Quick Windows Launcher (`start.bat`)
1. Clone or download the repository.
2. Double-click **`start.bat`**.
3. The server starts and launches `http://localhost:3000` automatically in your default browser.

### Option 2: Manual Node.js Startup
```bash
# Clone the repository
git clone https://github.com/codex-priyanshu/Pure-Stream.git
cd Pure-Stream

# Install dependencies (if any)
npm install

# Start the local development server
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Standalone Browser Mode
Double-click `index.html` to open directly in any browser. PureStream includes client-side public mirror fallbacks to perform searches even without running a local Node server!

---

## 🔗 GitHub Repositories (Dual-Push Active)
Both repositories are continuously synchronized:
- [codex-priyanshu / Pure-Stream](https://github.com/codex-priyanshu/Pure-Stream)
- [Priyanshu-kumar-maurya / Pure-Stream](https://github.com/Priyanshu-kumar-maurya/Pure-Stream)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).  
Built to empower students and lifelong learners worldwide with ad-free, uninterrupted education. 🎓
