import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  ArrowRight, Instagram, Linkedin, Mail, Compass, Cpu, Users, ImageOff,
} from 'lucide-react'
import backgroundImage from '../assets/images/landing-image.jpeg'

const EASE = [0.22, 0.61, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

// Shared reveal props so every section animates identically
const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
}

const dynamicWords = ['SMEC', 'Innovation', 'Technology', 'Engineering']

const features = [
  {
    title: 'Our Direction',
    desc: 'We build a strong technical ecosystem on campus where students learn beyond textbooks and contribute to real technological advancement.',
    icon: Compass,
  },
  {
    title: 'Our Purpose',
    desc: 'Technical workshops, industry interactions and hands-on projects that nurture leadership, teamwork and problem-solving skills.',
    icon: Cpu,
  },
  {
    title: 'Our Community',
    desc: 'A collaborative student community where ideas turn into projects and members grow together through mentorship and shared curiosity.',
    icon: Users,
  },
]

const stats = [
  { value: '30+', label: 'Active Members' },
  { value: '2', label: 'Events & Workshops' },
  { value: '1', label: 'Active Chapters' },
  { value: 'Global', label: 'Professional Network' },
]

const steps = [
  { n: '01', title: 'Explore Societies', desc: 'Browse CS, CASS and more to find the community that fits you best.' },
  { n: '02', title: 'Register for Events', desc: 'Sign up for workshops, seminars and competitions throughout the year.' },
  { n: '03', title: 'Join & Participate', desc: 'Become a member, build projects, and grow alongside fellow innovators.' },
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/ieee.smec/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ieee-smec-student-branch/', Icon: Linkedin },
  { label: 'Email', href: 'mailto:ieee.smec.stb99107@gmail.com', Icon: Mail },
]

function HomeEventPoster() {
  const [imgErr, setImgErr] = useState(false)

  if (imgErr) {
    return (
      <div className="w-full h-full bg-brand-700 flex flex-col items-center justify-center gap-3 p-6 text-center select-none">
        <ImageOff className="w-8 h-8 text-white/70" />
        <span className="type-eyebrow text-white/90">Genesis Ideathon Poster</span>
      </div>
    )
  }

  return (
    <img
      src="/Event images/Genesis.png"
      alt="Genesis Ideathon"
      onError={() => setImgErr(true)}
      className="w-full h-full object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
    />
  )
}

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!showModal) return
    const onKey = (e) => e.key === 'Escape' && setShowModal(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showModal])

  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg txt-primary app-grid-bg transition-colors duration-base ease-brand overflow-x-hidden">
      <div className="relative w-full max-w-shell mx-auto flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pt-nav pb-6 sm:pb-8">

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative mt-4 sm:mt-6 h-[calc(100svh-140px)] min-h-[520px] flex flex-col overflow-hidden rounded-panel border border-light-border dark:border-dark-border shadow-e3"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="hero-scrim z-10" />

          {/* Ambient brand glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 18, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="ambient-glow top-10 left-[8%] w-72 h-72 bg-brand-400/25"
            />
            <motion.div
              animate={{ y: [0, 36, 0], x: [0, -22, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="ambient-glow bottom-12 right-[12%] w-[28rem] h-[28rem] bg-brand-500/20"
            />
          </div>

          <div className="relative z-30 flex-grow flex flex-col items-center justify-center text-center px-5 sm:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="w-full max-w-4xl flex flex-col items-center"
            >
              <p className="type-eyebrow text-white/85 mb-5 flex flex-col gap-1.5 items-center">
                <span className="block">IEEE Student Branch</span>
                <span className="block text-[0.95em] opacity-80">St. Martin&rsquo;s Engineering College</span>
              </p>

              <h1 className="type-display text-white mb-6 uppercase">
                <span className="block">Advancing</span>
                <span className="block text-brand-300 min-h-[1.05em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="inline-block whitespace-nowrap"
                    >
                      {dynamicWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <p className="type-body-lg text-white/85 max-w-[46ch] mb-9">
                Join the world&rsquo;s largest technical professional organization and be part of the
                future of technology innovation.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-stretch sm:items-center justify-center"
              >
                <motion.div variants={itemVariants} className="sm:w-auto">
                  <Link to="/about/society" className="btn btn-primary btn-lg btn-block group">
                    Explore Societies
                    <ArrowRight className="w-4 h-4 transition-transform duration-base ease-brand group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants} className="sm:w-auto">
                  <button onClick={() => setShowModal(true)} className="btn btn-on-media btn-lg btn-block">
                    Join IEEE SMEC
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <button
            onClick={() => document.getElementById('ieee-intro')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 rounded-pill"
            aria-label="Scroll to content"
          >
            <motion.span
              className="flex w-6 h-10 items-start justify-center rounded-pill border-2 border-white/50 p-1.5 transition-colors duration-base ease-brand hover:border-white"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.span
                className="w-1 h-2 rounded-pill bg-white"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.span>
          </button>
        </section>

        {/* ── MISSION STRIP ──────────────────────────────────────────────── */}
        <section id="ieee-intro" className="panel panel-pad-sm">
          <motion.div {...reveal} transition={{ duration: 0.5, ease: EASE }} className="max-w-3xl mx-auto text-center">
            <p className="type-h3 txt-brand mb-3">Advancing technology for the benefit of humanity.</p>
            <p className="type-body txt-secondary">
              IEEE is the world&rsquo;s largest technical professional organization dedicated to advancing
              technology for the benefit of humanity, and IEEE SB SMEC brings that mission to campus.
            </p>
          </motion.div>
        </section>

        {/* ── WHY IEEE SB SMEC ───────────────────────────────────────────── */}
        <section id="why-choose" className="panel panel-pad">
          <div className="ambient-glow top-1/3 left-[4%] w-72 h-72 bg-brand-400/8" />
          <div className="ambient-glow bottom-0 right-[8%] w-64 h-64 bg-brand-500/8" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <motion.div {...reveal} transition={{ duration: 0.5, ease: EASE }} className="section-head">
                <span className="type-eyebrow txt-muted">Why join us</span>
                <h2 className="type-h2 txt-primary">
                  The launchpad for your{' '}
                  <span className="txt-brand">professional journey</span>
                </h2>
                <p className="section-lede">
                  IEEE Student Branch, SMEC is a vibrant, student-led community dedicated to helping driven
                  individuals unlock their full potential. Build career skills, expand your network, and shape
                  exciting initiatives from the ground up.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={itemVariants} className="card card-pad">
                    <p className="type-h2 txt-brand leading-none">{stat.value}</p>
                    <p className="type-eyebrow txt-muted mt-2.5">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex items-center gap-2.5">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="icon-btn"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — feature cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="flex flex-col gap-4"
            >
              {features.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="card card-pad card-interactive flex items-start gap-4"
                >
                  <span className="icon-tile icon-tile-brand">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="type-h3 txt-primary mb-1.5">{item.title}</h3>
                    <p className="type-body-sm txt-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── LATEST EVENT ───────────────────────────────────────────────── */}
        <section className="panel-muted panel-pad">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 pb-8 mb-8 border-b border-light-border dark:border-dark-border">
            <motion.div {...reveal} transition={{ duration: 0.5, ease: EASE }} className="section-head">
              <span className="type-eyebrow txt-muted">Happening now</span>
              <h2 className="type-h2 txt-primary">Our Upcoming Events</h2>
              <p className="section-lede">
                Discover what&rsquo;s happening at IEEE SB SMEC and register for our flagship workshops and hackathons.
              </p>
            </motion.div>
            <Link to="/explore" className="btn btn-secondary btn-sm shrink-0 self-start sm:self-auto">
              View all events
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 group media-frame w-full h-[260px] sm:h-[340px] shadow-e2">
              <HomeEventPoster />
            </div>

            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="chip chip-brand">Flagship __e____n</span>
              <h3 className="type-h2 txt-primary mt-4">Genesis 2026</h3>
              <p className="type-body txt-secondary mt-4">
              <strong className="font-semibold txt-primary">Genesis 2026</strong> is coming.
              <br />
              We could tell you what it's about... but where's the fun in that? 😉
              <br />
              For now, all we'll say is this: if you enjoy solving problems, thinking
              differently, and building something meaningful, you won't want to miss it. But can you guess what it is ? 😉😁
              <br />
              <br />
              Save the date — <strong className="font-semibold txt-primary"> _,_ August 2026</strong>.
              <br />
              We'll reveal everything soon, along with registration details and we will update registration link further.
              </p>
              {/* Replace href with the Google Form registration link */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-8 group"
              >
                Register Now
                <ArrowRight className="w-4 h-4 transition-transform duration-base ease-brand group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* ── GETTING STARTED ────────────────────────────────────────────── */}
        <section className="panel panel-pad">
          <motion.div {...reveal} transition={{ duration: 0.5, ease: EASE }} className="section-head items-center text-center mb-12">
            <span className="type-eyebrow txt-muted">Get started</span>
            <h2 className="type-h2 txt-primary">Getting involved is as easy as 1-2-3</h2>
          </motion.div>

          <div className="relative grid sm:grid-cols-3 gap-10 sm:gap-8">
            <div
              aria-hidden="true"
              className="hidden sm:block absolute top-7 left-[16.667%] right-[16.667%] border-t-2 border-dashed border-light-border dark:border-dark-border"
            />
            {steps.map((step, idx) => (
              <motion.div
                key={step.n}
                {...reveal}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 w-14 h-14 rounded-pill flex items-center justify-center mb-5 font-heading font-bold text-base bg-light-surface dark:bg-dark-surface border-2 border-brand-600 dark:border-brand-400 txt-brand shadow-e1">
                  {step.n}
                </span>
                <h3 className="type-h3 txt-primary mb-2">{step.title}</h3>
                <p className="type-body-sm txt-secondary max-w-[30ch]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section id="contact" className="panel panel-pad text-center">
          <div className="ambient-glow -top-10 left-1/2 -translate-x-1/2 w-[32rem] h-64 bg-brand-500/8" />
          <motion.div {...reveal} transition={{ duration: 0.5, ease: EASE }} className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
            <h2 className="type-h1 txt-primary">
              Ready to <span className="txt-brand">join IEEE?</span>
            </h2>
            <p className="type-body-lg txt-secondary">
              Become part of our vibrant community and accelerate your professional journey in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
              <Link to="/contact" className="btn btn-primary group">
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform duration-base ease-brand group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── Join modal ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgb(0_12_22/0.62)] backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-modal-title"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative w-full max-w-md overflow-hidden rounded-panel border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-e4"
            >
              <div className="ambient-glow -top-16 -right-16 w-40 h-40 bg-brand-400/15" />

              <div className="relative z-10 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h2 id="join-modal-title" className="type-h2 txt-primary">Join IEEE SMEC</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="icon-btn w-9 h-9 shrink-0"
                    aria-label="Close dialog"
                  >
                    <span className="text-xl leading-none">&times;</span>
                  </button>
                </div>

                <p className="type-body-sm txt-secondary">
                  Join the world&rsquo;s largest technical professional organization and connect with thousands of
                  innovators, engineers, and industry leaders worldwide.
                </p>

                <div className="mt-5 rounded-card border border-light-border dark:border-dark-border bg-light-surface-alt dark:bg-dark-surface-alt p-4">
                  <p className="type-eyebrow txt-muted mb-3">Key benefits</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      'Access to workshops & seminars',
                      'Global networking opportunities',
                      'IEEE Xplore digital library access',
                      'Career opportunities & certifications',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 type-body-sm txt-secondary">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-pill bg-brand-500 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-5 border-t border-light-border dark:border-dark-border flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="type-body-sm font-semibold txt-secondary">Membership type</span>
                    <span className="chip chip-brand">Student Member</span>
                  </div>
                  <button
                    onClick={() => {
                      window.open('https://forms.gle/735sZgWhqZm86SCz6', '_blank')
                      setShowModal(false)
                    }}
                    className="btn btn-primary btn-block"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
