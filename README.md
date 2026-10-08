# IEEE SMEC Student Branch Website

![IEEE Logo](https://www.ieee.org/content/dam/ieee-org/ieee/web/org/ieee-logo.png)

A modern, high-performance website for the **IEEE Student Branch at St. Martin's Engineering College (SMEC)**, built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 🌟 Key Features

- **🚀 Cinematic Holographic Preloader**: Real-time telemetry loading progress (`DOWNLOADING MODULES...` $\rightarrow$ `SYNCING IEEE SMEC MODULES...` $\rightarrow$ `READY FOR LAUNCHING IEEE SMEC`), asset parallel preloading/decoding, and smooth entry animations.
- **✨ Active Header Indicator & Live Scroll Progress**: Luminous glowing navbar active indicator and real-time spring-physics scroll progress bar at the top of the viewport.
- **🎨 Design System & IEEE Official Colors**: Curated IEEE navy `#00629B`, gold `#F5A623`, cyan `#38BDF8`, and link blue `#0082C8` palettes.
- **🌙 Dark/Light Mode**: Seamless theme switching with system preference detection and localStorage persistence.
- **📱 Fully Responsive & Mobile Optimized**: Zero scroll jitter on iOS (iPhone Safari) and Android with hardware-accelerated layouts.
- **📬 Dynamic Contact Form**: Integrated EmailJS messaging service with real-time field validation.
- **🗺️ Interactive Campus Map**: Embedded Google Maps geolocation for SMEC campus (Secunderabad, Telangana).
- **⚡ Lightning-Fast Performance**: Instant client-side routing, image decoding, and production bundle optimization with Vite.

---

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0 (SPA)
- **Build Tool**: Vite 5.x
- **Styling**: Tailwind CSS 3.4.1 (Custom design tokens & dark mode)
- **Animations**: Framer Motion 10.x
- **Routing**: React Router DOM 6.x
- **Icons**: Lucide React
- **Email Delivery**: EmailJS Browser SDK

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hemanth8341/IEEESMEC.git
   cd IEEESMEC/ieee-smec
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Populate `.env` with your EmailJS credentials:
     ```env
     VITE_APP_TITLE=IEEE SMEC Student Branch
     VITE_API_URL=http://localhost:5173
     VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
     ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles optimized production bundle into `dist/` |
| `npm run preview` | Locally previews production build |
| `npm run lint` | Runs ESLint syntax and code quality checks |

---

## 📁 Project Structure

```
ieee-smec/
├── .vscode/
│   └── settings.json       # Tailwind CSS IDE linting configuration
├── public/
│   ├── Event images/       # Event banners & posters
│   ├── Gallery images/     # Photo archives
│   ├── Team images/        # Faculty & committee headshots
│   ├── loader.svg          # Holographic brand loader graphic
│   └── ieee.svg            # Site favicon logo
├── src/
│   ├── assets/             # Brand logos & imagery
│   ├── components/
│   │   ├── Preloader.jsx       # Initial full-screen preloader with live telemetry
│   │   ├── Navbar.jsx          # Header with active glow indicator & scroll bar
│   │   ├── HeaderPopup.jsx     # Dropdown menu modal
│   │   ├── Layout.jsx          # App shell wrapper & footer
│   │   ├── GradientBg.jsx      # Ambient animated background
│   │   ├── MapComponent.jsx    # Campus geolocation map
│   │   └── PageTransition.jsx  # Route entrance transitions
│   ├── pages/
│   │   ├── Home.jsx            # Hero carousel, Genesis spotlight, roadmap
│   │   ├── Team.jsx            # Faculty advisors & student branch leads
│   │   ├── Society.jsx         # IEEE societies (CS, CASS, etc.)
│   │   ├── Explore.jsx         # Event schedules & registration
│   │   ├── Gallery.jsx         # Photo memories bento grid
│   │   ├── Blog.jsx            # Event reviews & technical articles
│   │   ├── BlogPost.jsx        # Dynamic single article view
│   │   └── Contact.jsx         # Contact form & social connections
│   ├── App.jsx                 # Routing configuration
│   ├── main.jsx                # React root mount entry point
│   └── index.css               # Base Tailwind layers & design system
├── .env.example                # Environment variable template
├── tailwind.config.js          # Design tokens & color palette
├── vite.config.js              # Vite bundler configuration
└── package.json
```

---

## 📞 Contact

**IEEE Student Branch — St. Martin's Engineering College (SMEC)**
- **Location**: SMEC Campus, Secunderabad, Telangana, India
- **Email**: `ieee.smec.stb99107@gmail.com`
- **Instagram**: [@ieee.smec](https://www.instagram.com/ieee.smec/)
- **LinkedIn**: [IEEE SMEC Student Branch](https://www.linkedin.com/company/ieee-smec-student-branch/)

---

**Built with ❤️ by IEEE SMEC Student Branch**
