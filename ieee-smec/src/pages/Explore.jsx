import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Clock, ChevronDown, CalendarX2, ImageOff, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'

const EASE = [0.22, 0.61, 0.36, 1]

const events = [
  {
    id: 1,
    title: 'IEEE Student Branch Inauguration',
    month: 'AUG',
    day: '08',
    date: '8th August 2026',
    time: '10:00 am — 12:40 pm',
    location: "Sardar Vallabhbhai Patel Auditorium, SMEC",
    description:
      'Launching a new academic year of innovation, technical excellence and professional growth 2026–2027.',
    image: '/Event images/Inauguration.png',
  },
  {
    id: 2,
    title: 'Genesis',
    month: 'AUG',
    day: '',
    date: '28th August 2026',
    time: '09:20 am — 4:00 pm',
    location: 'Sardar Vallabhbhai Patel Auditorium & Labs, SMEC',
    description:
  "Genesis 2026 is coming.\nWe could tell you what it's about... but where's the fun in that? 😉\nFor now, all we'll say is this: if you love coming up with ideas, solving real-world problems, and thinking outside the box, you won't want to miss it. Can you guess what's coming? 👀\nRegistrations will open soon — stay tuned!",
    image: '/Event images/Genesis.png',
  },
]

function EventPoster({ image, title, fit = 'w-full h-full object-cover' }) {
  const [imgErr, setImgErr] = useState(false)

  if (imgErr) {
    return (
      <div className="w-full h-full bg-brand-700 flex flex-col items-center justify-center gap-2.5 p-6 text-center select-none">
        <ImageOff className="w-7 h-7 text-white/70" />
        <span className="type-eyebrow text-white/90 line-clamp-2">{title} Poster</span>
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={title}
      onError={() => setImgErr(true)}
      className={`${fit} transition-transform duration-700 ease-brand group-hover:scale-[1.02]`}
    />
  )
}

export default function Explore() {
  const [selectedYear, setSelectedYear] = useState('2026')

  const filteredEvents = events.filter((event) => event.date.includes(selectedYear))

  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand">
        <PageHero
          eyebrow="join the journey"
          title="Events"
          lede="Whether you're here to learn a new skill, meet like-minded people, or challenge yourself, there's always something worth showing up for."
          image="/Event images/events-banner.webp"
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <section className="panel panel-pad">
            {/* Toolbar */}
            <div className="flex flex-wrap items-end justify-between gap-5 pb-6 mb-8 border-b border-light-border dark:border-dark-border">
              <div className="section-head">
                <span className="type-eyebrow txt-muted">Schedule</span>
                <h2 className="type-h2 txt-primary">Upcoming Events</h2>
              </div>

              <div className="flex items-center gap-3">
                <label htmlFor="event-year" className="type-body-sm font-semibold txt-secondary">
                  Year
                </label>
                <div className="relative">
                  <select
                    id="event-year"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="field field-select py-2.5"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 txt-muted"
                  />
                </div>
              </div>
            </div>

            {/* List / empty state */}
            {filteredEvents.length === 0 ? (
              <div className="empty-state">
                <span className="icon-tile w-14 h-14 rounded-pill icon-tile-neutral">
                  <CalendarX2 className="w-6 h-6" />
                </span>
                <p className="type-h3 txt-primary mt-1">We will update further</p>
                <p className="type-body-sm txt-secondary max-w-[38ch]">
                  Events for the {selectedYear} academic year will be added in due course.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {filteredEvents.map((event, idx) => (
                  <motion.article
                    key={event.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: EASE, delay: idx * 0.08 }}
                    className="card card-pad card-interactive group flex flex-col md:flex-row gap-6"
                  >
                    {/* Poster */}
                    <div className={`media-frame relative w-full md:w-[300px] shrink-0 shadow-e1 ${
                      event.id === 1 ? 'h-auto md:h-[200px]' : 'h-[200px]'
                    }`}>
                      <span className="absolute top-3 left-3 z-20 flex flex-col items-center justify-center px-2.5 py-1.5 rounded-control bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border shadow-e2">
                        <span className="type-eyebrow txt-brand">{event.month}</span>
                        <span className="font-heading text-base font-bold txt-primary leading-none mt-1">
                          {event.day}
                        </span>
                      </span>
                      <EventPoster
                        image={event.image}
                        title={event.title}
                        fit={event.id === 1 ? 'w-full h-auto block md:h-full md:object-contain md:p-1 md:bg-slate-100/50 md:dark:bg-dark-bg' : 'w-full h-full object-cover'}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col">
                      <h3 className="type-h3 txt-primary">{event.title}</h3>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
                        <span className="inline-flex items-center gap-1.5 type-caption txt-secondary min-w-0">
                          <MapPin size={14} className="txt-brand shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 type-caption txt-secondary">
                          <Clock size={14} className="txt-brand shrink-0" />
                          {event.time}
                        </span>
                      </div>

                      <p className="type-body-sm txt-secondary mt-4">{event.description}</p>

                      <div className="mt-6 pt-5 border-t border-light-border dark:border-dark-border">
                        {event.id === 1 ? (
                          <Link to="/blog/inauguration" className="btn btn-secondary btn-sm group/cta">
                            View Event Details
                            <ArrowRight className="w-4 h-4 transition-transform duration-base ease-brand group-hover/cta:translate-x-1" />
                          </Link>
                        ) : (
                          /* Replace href with the Google Form registration link */
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm group/cta"
                          >
                            Register Now
                            <ArrowRight className="w-4 h-4 transition-transform duration-base ease-brand group-hover/cta:translate-x-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
