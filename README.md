# Sri Punyamurthy Vari's Wedding Invitation — Digital Wedding Card

A traditional, elegant, and mobile-friendly Indian digital wedding invitation
website for the auspicious wedding of:

### Auspicious Wedding of Chi. Sivaramu & Chi. Sou. Manasa Lakshmi

Celebrate the sacred union of **CHI. SIVARAMU, M.Tech.** and
**CHI. SOU. MANASA LAKSHMI, B.Tech.**

Designed with the regal aesthetics of a traditional Telugu wedding invitation
card: royal purple, deep maroon, auspicious golden accents, scalloped temple
arch, Lord Ganesha blessings, mango leaves toranam, and hanging brass deepams.

---

## ✨ Features

- **Tap to Open Invitation:** Authentic card experience where guests can tap
  the welcome envelope or the "Open Wedding Invitation" button, greeted with
  a celebratory golden and floral petal shower.
- **Bilingual Support (తెలుగు | English):** Instant language switching
  between Telugu and English without page refresh, persisted across sessions
  in `localStorage`.
- **Auspicious Muhurtham Countdown:** Real-time countdown timer tracking
  Days, Hours, Minutes, and Seconds until the sacred Makara Lagnam on
  Wednesday, November 25, 2026.
- **Calendar Integration:**
  - One-tap "Add to Google Calendar"
  - Downloadable Apple / Outlook `.ics` calendar file
- **Venue & Directions:**
  - Official venue address: *Sri Vasavi Sadan (Ammavarishala), Kadapa*
  - "Get Directions" with Google Maps navigation
  - "Copy Venue Address" with instant feedback toast
  - Interactive Google Maps embed
- **WhatsApp & Social Sharing:**
  - One-click WhatsApp sharing with prefilled invitation message
  - "Copy Invitation Link" button with confirmation feedback
  - Native Web Share API integration on mobile devices
- **Call-to-Action Family Contacts:** Direct telephone dial links for
  Groom's parents (`9701786589`, `7981085876`).
- **No Photo Gallery:** 100% focused on traditional card typography,
  sacred blessings, family heritage, and ceremony details as specified.
- **Fully Responsive & Accessible:** Optimized for all screen sizes from
  mobile phones (Android & iPhone) to tablets and widescreen 4K displays.

---

## 🎨 Color Palette & Traditional Theme

| Element | Color Hex | Role |
| :--- | :--- | :--- |
| Royal Purple | `#54245F` | Regal background gradient |
| Deep Maroon | `#6D1735` | Traditional wedding card border & accents |
| Golden Yellow | `#D9AE45` | Sacred borders, dividers & calligraphy |
| Cream / Parchment | `#FFF8E8` | Inner invitation card reading surface |
| Traditional Green | `#386641` | Mango leaves (Toranam) & auspicious accents |
| Crisp White | `#FFFFFF` | High contrast badges & cards |

---

## 📂 Project Structure

```text
├── public/
│   ├── audio/
│   │   └── wedding-music.mp3        # Background shehnai audio
│   └── images/
│       └── cover-ganesha.png        # Traditional cover artwork
├── src/
│   ├── components/
│   │   ├── ComplimentsSection.jsx   # Best compliments from family
│   │   ├── CountdownTimer.jsx       # Days, hours, minutes, seconds timer
│   │   ├── CoupleNames.jsx          # Chi. Sivaramu & Chi. Sou. Manasa Lakshmi
│   │   ├── FamilyDetails.jsx        # Parents, designation, address, cell
│   │   ├── Footer.jsx               # Auspicious closing & replay button
│   │   ├── LanguageSwitcher.jsx     # "తెలుగు | English" switcher pill
│   │   ├── Sumuhurtham.jsx          # Sacred muhurtham & calendar actions
│   │   ├── SvgAssets.jsx            # Lord Ganesha, Toran, Deepams, Arch
│   │   ├── VenueSection.jsx         # Sri Vasavi Sadan, Kadapa with map embed
│   │   ├── WelcomeScreen.jsx        # Tap to open welcome card & invocation
│   │   └── WhatsAppShare.jsx        # WhatsApp prefilled share & link copy
│   ├── config/
│   │   └── weddingConfig.js         # Centralized wedding details & constants
│   ├── i18n/
│   │   └── translations.js          # Telugu & English centralized dictionary
│   ├── styles/
│   │   ├── global.css               # Design tokens, variables & typography
│   │   ├── invitation.css           # Traditional card styling & gold accents
│   │   └── responsive.css           # Mobile & tablet responsive breakpoints
│   ├── App.jsx                      # Main app controller & petal confetti
│   └── main.jsx                     # Application entrypoint
├── index.html                       # HTML5 template with Google Telugu fonts
├── jsconfig.json                    # JavaScript compiler options
├── package.json                     # Dependencies & scripts
├── vite.config.js                   # Vite configuration
└── README.md                        # Documentation
```

---

## 🚀 Installation & Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Local Development Server

```bash
npm run dev
```

Open your browser and navigate to <http://localhost:3000>.

### 3. Build for Production

```bash
npm run build
```

The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build Locally

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Vercel / Netlify / GitHub Pages

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- The project is fully static and client-side, requiring no backend server.

---

## 💍 Wedding Event Details Summary

- **Groom:** CHI. SIVARAMU, M.Tech.
  - Parents: Smt. Punyamurthy Sridevi & Sri. Punyamurthy Sambasivudu
    (Rtd., A.O., Agrl., College, Mahanandi)
  - Address: 30/638-J, Industrial Estates, Moolasagaram, NANDYAL,
    Nandyal District.
  - Contact: 9701786589, 7981085876
- **Bride:** CHI. SOU. MANASA LAKSHMI, B.Tech.
  - Parents: Only D/o. Smt. Somisetty Susila Sri. Somisetty Narasimha Rao,
    KADAPA
- **Date & Sumuhurtham:**
  - Wednesday, the 25th of November, 2026
  - 10:30 a.m. to 11:30 a.m. in Makara Lagnam
- **Venue:**
  - Sri Vasavi Sadan (Ammavarishala), Kadapa – 516 001, Andhra Pradesh
- **Compliments:**
  - With Best Compliments From: Near & Dear (ఆత్మీయుల శుభాకాంక్షలతో)
