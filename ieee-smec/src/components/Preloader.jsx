import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoLight from '../assets/images/ieee-smec-logo.png'
import logoDark from '../assets/images/IEEE logo 2.png'
import desktopHero from '../assets/images/landing-image.png'
import mobileHero from '../assets/images/landing-mobile.png'
import genesisLandingBg from '../assets/images/genesislanding1.webp'
import genesisMobileBg from '../assets/images/genesis-mobile1.webp'

const EASE_SMOOTH = [0.16, 1, 0.3, 1]

const CRITICAL_IMAGES = [
  '/loader.svg',
  '/ieee.svg',
  logoLight,
  logoDark,
  desktopHero,
  mobileHero,
  genesisLandingBg,
  genesisMobileBg,
  '/Event images/genesis-event.webp',
]

export default function Preloader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('DOWNLOADING MODULES...')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let isMounted = true

    // Preload & decode critical images in parallel
    const preloadImages = () => {
      const promises = CRITICAL_IMAGES.map((src) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = () => {
            if ('decode' in img) {
              img.decode().then(resolve).catch(resolve)
            } else {
              resolve()
            }
          }
          img.onerror = resolve
        })
      })

      const docReadyPromise = new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve()
        } else {
          window.addEventListener('load', resolve, { once: true })
        }
      })

      return Promise.all([...promises, docReadyPromise])
    }

    const targetDuration = 4000
    const startTime = performance.now()

    let animationFrameId
    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime
      const calculated = Math.min(Math.floor((elapsed / targetDuration) * 100), 99)

      if (isMounted) {
        setProgress((prev) => Math.max(prev, calculated))

        if (calculated < 28) {
          setStatusText('DOWNLOADING MODULES...')
        } else if (calculated < 62) {
          setStatusText('SYNCING IEEE SMEC MODULES...')
        } else if (calculated < 88) {
          setStatusText('PREPARING HIGH-PERFORMANCE ASSETS...')
        } else if (calculated < 99) {
          setStatusText('READY FOR LAUNCHING IEEE SMEC')
        } else {
          setStatusText('LAUNCHING IEEE SMEC...')
        }
      }

      if (elapsed < targetDuration) {
        animationFrameId = requestAnimationFrame(updateProgress)
      }
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    Promise.all([
      preloadImages(),
      new Promise((res) => setTimeout(res, targetDuration)),
    ]).then(() => {
      if (!isMounted) return
      setProgress(100)
      setStatusText('READY FOR LAUNCHING IEEE SMEC')

      setTimeout(() => {
        if (!isMounted) return
        setIsDone(true)

        if (onLoadingComplete) {
          onLoadingComplete()
        }
      }, 350)
    })

    return () => {
      isMounted = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="fullscreen-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.55, ease: 'easeInOut' },
          }}
          className="fixed inset-0 w-full h-full z-[99999] flex flex-col items-center justify-center bg-[#020617] overflow-hidden select-none touch-none"
        >
          {/* ── Realistic, Subtle Ambient Blue Atmosphere ── */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Soft, realistic breathing ambient glow (toned down for subtle luxury) */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.22, 0.38, 0.22],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-[32rem] sm:w-[50rem] h-[32rem] sm:h-[50rem] rounded-full bg-gradient-to-r from-blue-700/20 via-cyan-500/25 to-sky-600/20 blur-[130px]"
            />
            <div className="absolute w-[18rem] sm:w-[30rem] h-[18rem] sm:h-[30rem] rounded-full bg-cyan-400/18 blur-[80px]" />
          </div>

          {/* ── Central Main Logo Display ── */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xl px-4 sm:px-6">

            {/* Floating Container */}
            <motion.div
              animate={{
                y: [-4, 4, -4],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex flex-col items-center justify-center mb-8 sm:mb-10 w-full"
            >
              {/* ── Refined Background Orbital Rings ── */}
              
              {/* Outer Pulsing Subtle Ring */}
              <div className="absolute -inset-8 sm:-inset-16 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{
                    scale: [0.98, 1.03, 0.98],
                    opacity: [0.18, 0.35, 0.18],
                  }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-[340px] sm:w-[480px] md:w-[580px] h-[340px] sm:h-[480px] md:h-[580px] rounded-full border border-dashed border-cyan-400/25"
                />
              </div>

              {/* Rotating Holographic Arc 1 */}
              <div className="absolute -inset-6 sm:-inset-12 flex items-center justify-center pointer-events-none">
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="w-[310px] sm:w-[440px] md:w-[520px] h-[310px] sm:h-[440px] md:h-[520px]"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.18)"
                    strokeWidth="1"
                    strokeDasharray="14 10 4 10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="url(#arcGrad1)"
                    strokeWidth="1.8"
                    strokeDasharray="24 65"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="arcGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>

              {/* Counter-Rotating Inner Arc 2 */}
              <div className="absolute -inset-4 sm:-inset-8 flex items-center justify-center pointer-events-none">
                <motion.svg
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="w-[280px] sm:w-[400px] md:w-[470px] h-[280px] sm:h-[400px] md:h-[470px]"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(0, 168, 255, 0.15)"
                    strokeWidth="0.8"
                    strokeDasharray="5 8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.6"
                    strokeDasharray="14 75"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </div>

              {/* Subtle Blue Glow Halo under the Card */}
              <div className="absolute -inset-3 sm:-inset-5 rounded-3xl bg-gradient-to-r from-blue-600/25 via-cyan-400/30 to-sky-500/25 blur-xl pointer-events-none" />

              {/* Modern Frosted Logo Card with Subtle Border Beam */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#05132d]/85 via-[#030919]/90 to-[#01040f] border border-cyan-400/30 backdrop-blur-2xl p-5 sm:p-7 md:p-8 shadow-[0_0_35px_rgba(0,130,200,0.25)] overflow-hidden">
                
                {/* ── Border Beam Light Streak ── */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -inset-[100%] pointer-events-none opacity-40"
                  style={{
                    background:
                      'conic-gradient(from 0deg at 50% 50%, transparent 0deg, #38bdf8 60deg, #60a5fa 90deg, transparent 140deg)',
                  }}
                />

                {/* Inner Card Layer */}
                <div className="absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#061737]/80 via-[#030b1e]/90 to-[#010614]" />

                {/* 4 Corner Tech Brackets */}
                <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/70 shadow-[0_0_5px_#38bdf8] rounded-tl-sm z-10" />
                <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/70 shadow-[0_0_5px_#38bdf8] rounded-tr-sm z-10" />
                <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400/70 shadow-[0_0_5px_#38bdf8] rounded-bl-sm z-10" />
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400/70 shadow-[0_0_5px_#38bdf8] rounded-br-sm z-10" />

                {/* Laser Light Shimmer Sweep */}
                <motion.div
                  initial={{ x: '-150%' }}
                  animate={{ x: '250%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent skew-x-[-25deg] pointer-events-none z-10"
                />

                {/* The SVG Logo Asset with left-to-right wipe */}
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                  animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                  transition={{ duration: 1.1, ease: EASE_SMOOTH, delay: 0.1 }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <img
                    src="/loader.svg"
                    alt="IEEE SMEC"
                    className="w-[82vw] max-w-[390px] sm:max-w-[450px] md:max-w-[480px] h-auto object-contain select-none pointer-events-none filter drop-shadow-[0_0_18px_rgba(56,189,248,0.5)]"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* ── Modern Telemetry Progress & Status Pill ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE_SMOOTH }}
              className="w-full max-w-[330px] sm:max-w-[420px] flex flex-col items-center gap-3"
            >
              {/* Progress Line with Glowing Head */}
              <div className="relative w-full h-1.5 sm:h-2 bg-slate-900/90 rounded-pill overflow-hidden p-[1px] border border-cyan-400/25 shadow-[0_0_10px_rgba(56,189,248,0.18)]">
                <motion.div
                  className="relative h-full bg-gradient-to-r from-brand-600 via-cyan-400 to-sky-300 rounded-pill shadow-[0_0_12px_rgba(56,189,248,0.85)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear', duration: 0.08 }}
                >
                  {/* Glowing head dot */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                </motion.div>
              </div>

              {/* Status Pill & Percentage */}
              <div className="w-full flex items-center justify-between px-1">
                {/* Status indicator */}
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] uppercase text-slate-300 truncate max-w-[210px] sm:max-w-[280px]">
                    {statusText}
                  </span>
                </div>

                {/* Percentage */}
                <span className="font-mono text-xs sm:text-sm font-bold text-cyan-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]">
                  {progress}%
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
