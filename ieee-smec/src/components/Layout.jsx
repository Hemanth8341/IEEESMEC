import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import GradientBg from './GradientBg'
import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/ieee-smec-logo.png'
import logoDark from '../assets/images/IEEE logo 2.png'

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Events', to: '/explore' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const resourceLinks = [
  { label: 'IEEE.org', href: 'https://www.ieee.org/' },
  { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/' },
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/ieee.smec/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ieee-smec-student-branch/', Icon: Linkedin },
  { label: 'Email', href: 'mailto:ieee.smec.stb99107@gmail.com', Icon: Mail },
]

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg txt-primary flex flex-col transition-colors duration-base ease-brand">
      <Navbar />
      <GradientBg />

      <main className="relative z-10 flex-grow">{children}</main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface transition-colors duration-base ease-brand">
        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4">
            {/* Top Row: Logo, Copyright, and Social Media Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <img src={isDark ? logoDark : logo} alt="IEEE SMEC Logo" className="h-7 w-auto" />
                <span className="text-[11px] text-slate-500 dark:text-dark-text-muted font-semibold sm:border-l sm:border-slate-300 sm:dark:border-dark-border sm:pl-3">
                  © 2026 IEEE Student Branch – SMEC. All rights reserved.
                </span>
              </div>

              {/* Right: Social Media Buttons */}
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="p-2 text-slate-400 hover:text-brand-600 dark:text-dark-text-secondary dark:hover:text-brand-300 transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Row: Inline Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-black/5 dark:border-white/5 text-[11px] text-slate-500 dark:text-dark-text-secondary font-semibold">
              {/* Left: Navigation links */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                {primaryLinks.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Right: Resource links */}
              <div className="flex justify-center gap-x-4">
                {resourceLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 rounded-pill bg-brand-600 hover:bg-brand-500 text-white shadow-e3 hover:shadow-e4 flex items-center justify-center transition-colors duration-base ease-brand"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
