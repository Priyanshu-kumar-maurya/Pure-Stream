# 🎓 PureStream — Ad-Free Student Study & Music Hub

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://pure-stream-wine.vercel.app)
[![No Ads](https://img.shields.io/badge/YouTube-100%25%20Ad--Free-red?style=for-the-badge&logo=youtube)](https://pure-stream-wine.vercel.app)
[![Mobile Friendly](https://img.shields.io/badge/PWA-Mobile%20Optimized-blue?style=for-the-badge&logo=android)](https://pure-stream-wine.vercel.app)
[![GitHub Repositories](https://img.shields.io/badge/GitHub-Dual%20Push%20Active-black?style=for-the-badge&logo=github)](https://github.com/codex-priyanshu/Pure-Stream)

> **Students aur Music lovers ke liye 100% Ad-Free, High-Quality (1080p FHD) platform.**  
> Yahan aap lambe lectures (One-Shot revision, Marathons) aur gaane (Non-Stop Jukebox, Lofi) bina kisi ad disturbance ke dekh aur sun sakte hain.  
> **YouTube par jakar link copy-paste karne ka jhanjhat khatam — seedhe website par direct YouTube search karein!**

---

## 🌐 Live Website Link
🔗 **[https://pure-stream-wine.vercel.app](https://pure-stream-wine.vercel.app)**  
*(Mobile, Tablet aur PC sabhi par chalta hai)*

---

## 🌟 Naye Features & Updates

### 1. 🎲 YouTube Style Dynamic Feed (Har Bar Naya Video)
- Pehle website open karne par har bar same video dikhta tha. Ab YouTube feed ki tarah **har refresh par naya aur fresh video recommendation** auto-load hota hai (Study, Coding, Music, Lofi, UPSC me se).
- Player controls ke upar **"🎲 Naya Video (Random)"** button diya gaya hai — 1 click me naya video play karein!

### 2. 🕒 Aapka Watch History (Continue Watching Shelf)
- Player ke theek upar **"🕒 Aapka Watch History"** horizontal carousel shelf add kiya gaya hai.
- Jo bhi video aap chalayenge (chahe Search se ho ya Curated list se), uska Title, Channel aur Thumbnail instantly save ho jata hai.
- **Red Progress Bar & Resume Time:** Video kitna dekha gaya tha wahan red progress line aur `⏱️ Resumes at MM:SS` dikhta hai. Click karte hi lecture wahi se resume ho jata hai.
- Kisi video ko history se hatane ke liye card par **✕** button diya gaya hai.

### 3. 🔍 Direct YouTube Search (No Link Copy Needed)
- Search bar me kisi bhi topic, chapter ya gaane ka naam likhein:
  - *Jaise:* `Physics Wallah Class 12 One Shot`, `Arijit Singh 3 Hr Jukebox`, `Python Full Course 10 Hours`, `Khan Sir GS Marathon`.
- Type karte hi **Live YouTube Auto-Suggestions** milte hain.
- Enter ya Search dabate hi results **Search Results** tab me load ho jate hain aur page auto-scroll ho jata hai.

### 4. 📱 Mobile Friendly & PWA App Experience
- **Bottom App Dock:** Mobile par phone app ki tarah niche bottom dock (`📚 Study`, `💻 Coding`, `🔍 Search`, `🎵 Music`, `🕒 History`) diya gaya hai.
- **Touch Rewind & Forward:** Phone screen par video ke dono side **⏪ 10s** aur **10s ⏩** ke touch buttons hain.
- **Add to Home Screen:** Browser menu me jakar *"Add to Home Screen"* karein, ye bina URL bar ke full native app ban jata hai.

### 5. 🔆 Screen Wake Lock (Screen Lock Nahi Hogi)
- Lambe lectures dekhte waqt aksar phone ki screen sleep/lock ho jati hai.
- PureStream me **Screen Wake Lock API + Heartbeat Fallback** integrated hai jisse lecture chalte waqt phone ki screen kabhi band nahi hogi (`🔆 Screen Awake: ON`).

### 6. ⏳ "Long Videos Only" Filter (Lambe Lectures & Marathons)
- Search karte waqt **"Long Videos Only"** switch on rakhein.
- Isse faltu ke Shorts aur clips filter ho jate hain aur sirf **20 minute se lekar 12 ghante tak ke complete lectures, one-shot revision marathons aur full song albums** aate hain.

### 7. ⏱️ Smart Resume (Jahan Chhoda Tha, Wahi Se Shuru)
- Lambe lectures ke liye auto-progress tracker.
- Browser secretly aapka exact second yaad rakhta hai. Wapas aane par prompt milta hai:  
  `"⏱️ Resumed from 01:24:30"`

### 8. 📝 Lecture Timestamp Notes (With Export)
- Lecture dekhte waqt jaise hi koi formula ya concept aaye:
  - **"+ Add Note"** dabayein (ya keyboard par `N` dabayein).
  - Video ke niche clickable timestamp badge ban jayega (`[01:15:20]`).
  - Us timestamp par click karte hi video direct usi point par jump karega.
  - Padhai ke baad **"Export Notes (.txt)"** button se saare notes text file me download karein.

### 9. ⏱️ Pomodoro Study Timer (25m / 50m)
- Concentration badhane ke liye scientific Pomodoro timer:
  - 25 Mins Focus + 5 Mins Break (Standard)
  - 50 Mins Deep Study + 10 Mins Break (Marathon)
  - Session khatam hone par sweet chime alert bajta hai.

### 10. 🍿 Cinema Popout (100% Restriction-Free Player)
- Agar koi video embed restrictions ki wajah se block ho, to **"🍿 Cinema Popout"** button dabayein — bina ads ke separate clean cinema window me 100% chalega.

---

## 🚀 Kaise Chalayein? (How to Run Locally)

### 1. Direct Search Server (`start.bat`):
1. Project folder me jayein.
2. **`start.bat`** par double click karein.
3. Automatically local search backend ke saath `http://localhost:3000` browser me khul jayega!

### 2. Standalone Browser Open:
- Bina server ke chalane ke liye direct **`index.html`** ko kisi bhi browser me open karein. Client-side fallback search automatically work karega!

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Kaam |
|----------|------|
| `Space` / `K` | Play / Pause |
| `N` | Quick Timestamp Note Add Karein |
| `F` | Fullscreen Toggle |
| `T` | Cinema Theater Mode Toggle |
| `P` | Cinema Popout Window |
| `J` / `L` | 10 Second Peeche / Aage Seek |
| `←` / `→` | 5 Second Peeche / Aage Seek |
| `?` | Keyboard Shortcuts Modal |

---

## 📂 Project Architecture

```
pure-tube/
├── index.html          # Main HTML structure with Watch History Shelf & Mobile Dock
├── style.css           # Premium Dark Cyberpunk Theme & Mobile Responsive CSS
├── script.js           # Player Engine, Wake Lock, History, Search & Resume Logic
├── server.js           # Node.js local proxy server with YouTube Scraper & Suggest API
├── start.bat           # 1-Click launcher for Windows
├── manifest.json       # Progressive Web App (PWA) manifest
├── icon.svg            # App icon
├── vercel.json         # Vercel deployment routes configuration
├── api/
│   ├── search.js       # Vercel Serverless Function for Live YouTube search
│   └── suggest.js      # Vercel Serverless Function for search auto-suggestions
└── public/             # Static production build files for Vercel CDN
```

---

## 🔗 GitHub Remotes (Dual Push Configured)
Dono repositories me ek saath latest code push hota hai:
1. [codex-priyanshu / Pure-Stream](https://github.com/codex-priyanshu/Pure-Stream)
2. [Priyanshu-kumar-maurya / Pure-Stream](https://github.com/Priyanshu-kumar-maurya/Pure-Stream)

---

## 📜 License
MIT License • Banaya gaya hai sabhi students ke liye taaki wo bina ads aur distraction ke padh sakein! 🎓
