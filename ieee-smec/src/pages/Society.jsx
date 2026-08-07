import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import ieeeSmecLight from '../assets/images/ieee-smec-logo.png'
import ieeeSmecDark from '../assets/images/IEEE logo 2.png'
import ieeeCsLight from '../assets/images/IEEE-CS_LogoTM-orange.png'
import ieeeCsDark from '../assets/images/IEEE-CS_LogoTM-white.png'
import ieeeCassLight from '../assets/images/IEEE CAS Logo.png'
import ieeeCassDark from '../assets/images/IEEE CAS Logo White.png'

const EASE = [0.22, 0.61, 0.36, 1]

const societyShowcase = [
  {
    label: 'Student Branch',
    title: "IEEE Student Branch – St. Martin's Engineering College",
    description: [
      'The IEEE Student Branch at St. Martin\'s Engineering College is guided by the vision, "Empowering Innovation and Inspiring Excellence." It provides a platform for students to enhance their technical knowledge, leadership skills, and professional development through the guidance of experienced faculty mentors.',
      'The branch organizes workshops, technical seminars, expert talks, hackathons, and collaborative events that bridge the gap between academic learning and industry practices. These activities equip students with practical knowledge and prepare them to address real-world engineering challenges.',
      'By fostering innovation, teamwork, and research, the IEEE Student Branch develops competent engineers and future leaders who contribute to technological advancement and societal development.',
    ],
    logoLight: ieeeSmecLight,
    logoDark: ieeeSmecDark,
  },
  {
    label: 'Chapter',
    title: 'IEEE Computer Society',
    description: [
      'The IEEE Computer Society at St. Martin\'s Engineering College promotes innovation, technical excellence, and professional growth in the field of computing. It provides students with opportunities to enhance their knowledge and skills through various technical activities.',
      'The society organizes workshops, webinars, coding competitions, and expert sessions to strengthen practical learning and keep students updated with emerging technologies.',
      'By encouraging innovation, collaboration, and continuous learning, the IEEE Computer Society prepares students for successful careers in computer science and engineering.',
    ],
    logoLight: ieeeCsLight,
    logoDark: ieeeCsDark,
  },
  {
    label: 'Chapter',
    title: 'IEEE Circuits and Systems Society (CASS)',
    description: [
      'The IEEE Circuits and Systems Society at St. Martin\'s Engineering College is dedicated to promoting education and innovation in circuits, systems, and electronics engineering. The society caters to students interested in analog and digital circuits, embedded systems, VLSI, signal processing, and system design.',
      'By organizing hands-on workshops, technical sessions, expert lectures, and project-based activities, IEEE CASS enables students to apply theoretical concepts to real-world applications. The society aims to enhance technical competence, encourage innovation, and prepare students to excel in the rapidly evolving field of electronics and systems engineering.',
    ],
    logoLight: ieeeCassLight,
    logoDark: ieeeCassDark,
  },
]

export default function Society() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand">
        <PageHero
          eyebrow="About us"
          title="Our Societies"
          lede="The chapters and communities that make up IEEE Student Branch SMEC."
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-col gap-6">
            {societyShowcase.map((society, index) => {
              const isLeft = index % 2 === 0
              const logo = isDark ? society.logoDark : society.logoLight

              return (
                <motion.article
                  key={society.title}
                  className="panel panel-pad"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                      isLeft ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Logo lockup */}
                    <div className="w-full lg:w-1/3 shrink-0 flex justify-center">
                      <div className="w-full max-w-[300px] aspect-[4/3] rounded-card border border-light-border dark:border-dark-border bg-light-surface-alt dark:bg-dark-surface-alt flex items-center justify-center p-8 transition-all duration-base ease-brand hover:shadow-e2">
                        <img
                          src={logo}
                          alt={society.title}
                          className="max-w-full max-h-full w-auto h-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Copy */}
                    <div className="flex-1 min-w-0 section-head">
                      <span className="chip chip-brand self-start">{society.label}</span>
                      <h2 className="type-h2 txt-primary">{society.title}</h2>
                      <div className="flex flex-col gap-4 mt-1">
                        {society.description.map((paragraph, idx) => (
                          <p key={idx} className="type-body txt-secondary">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
