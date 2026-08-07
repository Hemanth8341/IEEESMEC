# IEEE SMEC Student Branch Website

![IEEE Logo](https://www.ieee.org/content/dam/ieee-org/ieee/web/org/ieee-logo.png)

A modern, professional website for the IEEE Student Branch at SMEC (Sreenidhi Institute of Science and Technology), built with cutting-edge web technologies.

## 🌟 Features

- **🎨 IEEE Official Colors**: Authentic IEEE blue (#00629B), gold (#FFA300), and link blue (#0063D7)
- **🌙 Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **🗺️ Interactive Map**: Google Maps integration showing SMEC campus location (GFRF+HQ Secunderabad, Telangana)
- **✨ Professional Animations**: Smooth Framer Motion animations and transitions
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 10.16.0
- **Routing**: React Router DOM 6.22.0
- **Icons**: Lucide React 0.356.0
- **UI Components**: DaisyUI 4.4.19

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ieee-smec-website.git
   cd ieee-smec-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Google Maps API Key** (Optional but recommended)
   - Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Maps JavaScript API
   - Replace `AIzaSyBFw0Qbyq9zTFTd-tUY6dOMLD0k9XKTQ0` in `src/components/MapComponent.jsx` with your API key

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The website will automatically reload when you make changes

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
ieee-smec/
├── public/
│   ├── Event images/       # Event flyers and banners
│   ├── Gallery images/     # Highlights and snapshots
│   ├── Team images/        # Faculty and student headshots
│   └── ieee.svg            # Site favicon logo
├── src/
│   ├── assets/             # Bundled visual assets
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with active route layout animations
│   │   ├── Layout.jsx          # Shell containing header, footer, and scroll-to-top FAB
│   │   ├── GradientBg.jsx      # Dynamic canvas color shifts
│   │   ├── MapComponent.jsx    # Embed coordinates & campus navigation fallback
│   │   └── PageTransition.jsx  # Frame entry/exit routing transitions
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with word cycle animation & Spotlight event
│   │   ├── Team.jsx            # Vision declaration, faculty profiles, and student catalog
│   │   ├── Society.jsx         # Info blocks for chapters (CS, CASS)
│   │   ├── Explore.jsx         # Horizontal timeline agenda of upcoming/concluded events
│   │   ├── Gallery.jsx         # Memory collection bento grid with submit prompt
│   │   └── Contact.jsx         # Campus directions & messaging form
│   ├── App.jsx                 # Route configurations and scroll controller
│   ├── main.jsx                # DOM mounting entry
│   └── index.css               # Google Fonts config & customized scrollbars
├── vercel.json                 # Routing rewrites configuration for SPAs on Vercel
├── tailwind.config.js          # Design token colors and animations
├── vite.config.js              # Rollup bundler setup
├── package.json                # Dependency packages
└── README.md                   # This documentation
```

## 🌙 Design System & Theme Styling

The website follows a unified design language built on Tailwind CSS tokens:
- **Font Stack**: Headings render in **Outfit** (modern geometric sans-serif) and body text in **Inter** (highly readable neutral sans-serif) via Google Fonts.
- **IEEE Brand Colors**: `#00629B` (IEEE Blue), `#F5A623` (Gold), `#0082C8` (Link Blue), `#41B6E6` (Accent Light Blue).
- **Responsive Layout**: Designed for ultra-wide, standard desktop, tablet, and mobile screens. Features dynamic badge overlays on images, keeping date grids structured even on small phone viewports.
- **Theme Transitions**: Class-based theme toggling synchronizes layouts, maps, scrollbars, and icons across light and dark modes with local cache retention.

## 🚀 Deployment

The project is optimized for static hosting platforms. For detailed instructions on deploying to **Vercel** (with routing fixes), please refer to our deployment guide:

👉 **[Vercel Deployment Guide (guide.md)](file:///c:/Users/heman/OneDrive/Desktop/ieee-web/ieee-smec/guide.md)**

### Build for Production Locally

```bash
npm run build
```

This compiles the static assets into the `dist/` directory, ready to be hosted on Netlify, GitHub Pages, or Vercel.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**IEEE Student Branch - SMEC**
- **Location**: SMEC Campus, Secunderabad, Telangana, India
- **WhatsApp**: [+91 9014476351](https://wa.me/919014476351)
- **Email**: `ieee.smec.stb99107@gmail.com`

---

**Built with ❤️ for the IEEE SMEC Student Branch Community**

