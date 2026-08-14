import { useState, useEffect, useRef } from 'react'
import { Menu, X, Sun, Moon, ChevronDown, Users, Building2, Calendar, Image, BookOpen } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/ieee-smec-logo.png'
import logoDark from '../assets/images/IEEE logo 2.png'
import HeaderPopup from './HeaderPopup'

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
  const dropdownTimeoutRef = useRef(null)

  const scrollToTopIfHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  const handleDropdownEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setOpenDropdown(name)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveMobileDropdown(null)
  }

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const aboutItems = [
    { title: 'Team - SMEC', desc: "Meet our dedicated SMEC team.", to: '/about/team', icon: Users },
    { title: 'Society', desc: 'Explore our IEEE societies.', to: '/about/society', icon: Building2 },
  ]

  const exploreItems = [
    { title: 'Events', desc: 'Upcoming workshops, seminars and competitions.', to: '/explore', icon: Calendar },
    { title: 'Gallery', desc: 'Photos and highlights from past events.', to: '/gallery', icon: Image },
    { title: 'Blog', desc: 'Read highlights, reviews and stories from past events.', to: '/blog', icon: BookOpen },
  ]

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Explore', path: '/explore' },
    { name: 'Contact', path: '/contact' },
  ]

  const isLinkActive = (linkName) => {
    const currentPath = location.pathname
    if (linkName === 'Home') return currentPath === '/'
    if (linkName === 'About Us') return currentPath.startsWith('/about')
    if (linkName === 'Explore') return currentPath === '/explore' || currentPath === '/gallery' || currentPath.startsWith('/blog')
    if (linkName === 'Contact') return currentPath === '/contact'
    return false
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full z-50 bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border shadow-e1 transition-colors duration-base ease-brand"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px] sm:h-20">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center">
            <Link
              to="/"
              className="flex items-center rounded-control shrink-0"
              onClick={scrollToTopIfHome}
              aria-label="IEEE SMEC — home"
            >
              <motion.img
                src={isDark ? logoDark : logo}
                alt="IEEE SMEC Logo"
                className="h-9 sm:h-11 w-auto"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              />
            </Link>
          </div>

          {/* Center: Desktop links */}
          <div className="hidden lg:flex items-center justify-center gap-1">
            {links.map((link) => {
              const hasDropdown = link.name === 'About Us' || link.name === 'Explore'
              const isActive = isLinkActive(link.name)
              const linkClasses = `relative px-4 py-2 text-sm font-semibold rounded-pill flex items-center gap-1.5 transition-all duration-base ease-brand ${
                isActive
                  ? 'text-brand-600 dark:text-brand-300 bg-brand-600/8 dark:bg-brand-400/10'
                  : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-600 dark:hover:text-brand-300 hover:bg-light-surface-alt dark:hover:bg-dark-surface-alt'
              }`

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {!hasDropdown ? (
                    <Link
                      to={link.path}
                      onClick={link.path === '/' ? scrollToTopIfHome : undefined}
                      className={linkClasses}
                    >
                      <span>{link.name}</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className={linkClasses}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-base ease-brand ${openDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}

                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-pill bg-brand-600 dark:bg-brand-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {hasDropdown && (
                    <HeaderPopup
                      open={openDropdown === link.name}
                      onClose={() => setOpenDropdown(null)}
                      items={link.name === 'About Us' ? aboutItems : exploreItems}
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <button
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex"
              >
                {isDark ? <Sun size={18} className="text-ieee-gold" /> : <Moon size={18} className="text-brand-600" />}
              </motion.span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="icon-btn lg:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="lg:hidden overflow-hidden relative z-50 bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border shadow-e2"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className="px-4 py-3.5 space-y-1.5 bg-white dark:bg-dark-surface">
          {links.map((link) => {
            const hasDropdown = link.name === 'About Us' || link.name === 'Explore'
            const dropdownItemsList = link.name === 'About Us' ? aboutItems : exploreItems
            const isDropdownOpen = activeMobileDropdown === link.name
            const isActive = isLinkActive(link.name)
            const rowClasses = `w-full flex justify-between items-center py-3 px-4 text-base font-bold rounded-control transition-colors duration-base ease-brand ${
              isActive
                ? 'text-brand-600 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50/50 dark:hover:bg-brand-900/10'
            }`

              return (
                <div key={link.path}>
                  {!hasDropdown ? (
                    <Link
                      to={link.path}
                      className={rowClasses}
                      onClick={() => {
                        setIsOpen(false)
                        setActiveMobileDropdown(null)
                        if (link.path === '/') scrollToTopIfHome()
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        type="button"
                        onClick={() => setActiveMobileDropdown(isDropdownOpen ? null : link.name)}
                        className={rowClasses}
                        aria-expanded={isDropdownOpen}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-base ease-brand ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: isDropdownOpen ? 'auto' : 0, opacity: isDropdownOpen ? 1 : 0 }}
                        className="overflow-hidden"
                        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                      >
                        <div className="mt-1 ml-4 pl-3 border-l border-light-border dark:border-dark-border space-y-1">
                          {dropdownItemsList.map((item, idx) => {
                            const ItemIcon = item.icon
                            const isSubActive = location.pathname === item.to
                            return (
                              <Link
                                key={idx}
                                to={item.to}
                                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-control transition-colors duration-base ease-brand ${
                                  isSubActive
                                    ? 'text-brand-600 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                                    : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50/50 dark:hover:bg-brand-900/10'
                                }`}
                                onClick={() => {
                                  setIsOpen(false)
                                  setActiveMobileDropdown(null)
                                }}
                              >
                                <span
                                  className={`icon-tile w-8 h-8 rounded-control-sm ${
                                    isSubActive ? 'icon-tile-brand' : 'icon-tile-neutral'
                                  }`}
                                >
                                  <ItemIcon size={15} />
                                </span>
                                <span>{item.title}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-[72px] sm:top-20 bg-[rgb(0_12_22/0.45)] backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
