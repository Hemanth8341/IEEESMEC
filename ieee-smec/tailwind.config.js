/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Brand ramp (single source of truth for every accent) ──────────
        brand: {
          50: '#EFF7FC',
          100: '#D9EDF8',
          200: '#B4DBF1',
          300: '#7FC3E7',
          400: '#41B6E6',
          500: '#0082C8',
          600: '#00629B',
          700: '#004F7C',
          800: '#003A5C',
          900: '#002941',
        },

        // Named brand aliases kept for existing markup
        'ieee-blue': '#00629B',   // brand-600 — primary
        'ieee-link': '#0082C8',   // brand-500 — hover / link
        'ieee-accent': '#41B6E6', // brand-400 — accent on dark
        'ieee-gold': '#F5A623',

        // ── Light theme neutrals ──────────────────────────────────────────
        'light-bg': '#F4F6FA',          // page canvas
        'light-surface': '#FFFFFF',     // cards & panels
        'light-surface-alt': '#EEF2F7', // inset / muted blocks
        'light-border': '#E3E8EF',
        'light-border-strong': '#CBD5E1',
        'light-text-primary': '#0F172A',
        'light-text-secondary': '#56637A',
        'light-text-muted': '#657084', // AA on both #FFF (5.00) and #EEF2F7 (4.44)

        // ── Dark theme neutrals (IEEE navy) ───────────────────────────────
        'dark-bg': '#00121F',
        'dark-surface': '#001E33',
        'dark-surface-alt': '#002943',
        'dark-border': '#0B3454',
        'dark-border-strong': '#14486F',
        'dark-text-primary': '#F1F6FA',
        'dark-text-secondary': '#9DB4C8',
        'dark-text-muted': '#7B94AC', // AA on bg (6.03), surface (5.41) and surface-alt (4.77)

        // ── State ─────────────────────────────────────────────────────────
        'success': '#16A34A',
        'warning': '#F59E0B',
        'error': '#DC2626',
        'info': '#0082C8',
      },

      // ── One radius language ─────────────────────────────────────────────
      borderRadius: {
        'control-sm': '0.5rem', // small icon tiles
        'control': '0.75rem', // inputs, small buttons, chips
        'card': '1.25rem',    // cards, tiles, images
        'panel': '2rem',      // page-level section shells
        'pill': '9999px',
      },

      // ── One shadow language (soft, layered, low-opacity) ────────────────
      boxShadow: {
        'e1': '0 1px 2px -1px rgb(15 23 42 / 0.06), 0 1px 3px 0 rgb(15 23 42 / 0.05)',
        'e2': '0 2px 4px -2px rgb(15 23 42 / 0.06), 0 6px 16px -4px rgb(15 23 42 / 0.08)',
        'e3': '0 4px 8px -4px rgb(15 23 42 / 0.08), 0 14px 32px -8px rgb(15 23 42 / 0.12)',
        'e4': '0 8px 16px -8px rgb(15 23 42 / 0.10), 0 28px 56px -12px rgb(15 23 42 / 0.18)',
        'focus': '0 0 0 3px rgb(0 130 200 / 0.28)',
      },

      // ── One animation language ──────────────────────────────────────────
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '400ms',
      },

      maxWidth: {
        'prose-tight': '58ch',
        'shell': '80rem',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
