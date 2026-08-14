import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Rocket, Layers, Award } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import ieeeSmecLight from '../assets/images/ieee-smec-logo.png'
import ieeeSmecDark from '../assets/images/IEEE logo 2.png'
import ieeeCassLight from '../assets/images/IEEE CAS Logo.png'
import ieeeCassDark from '../assets/images/IEEE CAS Logo White.png'
import techLight from '../assets/images/Tech-light.png'
import techDark from '../assets/images/Tech-dark.png'
import entrepreneurshipLight from '../assets/images/Enterprenurship-light.png'
import entrepreneurshipDark from '../assets/images/Enterprenurship-dark.png'

const EASE = [0.22, 0.61, 0.36, 1]

const studentBranchCard = {
  label: 'STUDENT BRANCH',
  title: 'IEEE Student Branch',
  subtitle: "St. Martin's Engineering College",
  description: [
    "The IEEE Student Branch at St. Martin's Engineering College is guided by the vision, \"Empowering Innovation and Inspiring Excellence.\" It provides a platform for students to enhance their technical knowledge, leadership skills, and professional development through the guidance of experienced faculty mentors.",
    "The branch organizes workshops, technical seminars, expert talks, hackathons, and collaborative events that bridge the gap between academic learning and industry practices. These activities equip students with practical knowledge and prepare them to address real-world engineering challenges.",
    "By fostering innovation, teamwork, and research, the IEEE Student Branch develops competent engineers and future leaders who contribute to technological advancement and societal development."
  ],
  logoLight: ieeeSmecLight,
  logoDark: ieeeSmecDark
}

const communityShowcase = [
  {
    type: 'community',
    label: 'IEEE SMEC COMMUNITY',
    title: 'Technical Community',
    icon: Code2,
    accentColor: 'brand',
    description: [
      "The IEEE SMEC Technical Community is an intra-college community created to bring students together around technology, engineering, and continuous learning. It provides a space for students to explore emerging technologies, strengthen technical skills, and learn through collaboration and practical experiences.",
      "The community organizes technical workshops, hands-on sessions, expert interactions, project-based activities, coding and innovation initiatives, and peer-learning opportunities across diverse areas of technology.",
      "By encouraging curiosity, collaboration, and practical problem-solving, the Technical Community aims to help students transform knowledge into real-world solutions and build the skills needed for the evolving technology landscape."
    ],
    logoLight: techLight,
    logoDark: techDark
  },
  {
    type: 'community',
    label: 'IEEE SMEC COMMUNITY',
    title: 'Entrepreneurship Community',
    icon: Rocket,
    accentColor: 'amber',
    description: [
      "The IEEE SMEC Entrepreneurship Community is an intra-college community focused on fostering innovation, entrepreneurial thinking, and the confidence to turn ideas into meaningful solutions. It provides students with a platform to explore problems, develop ideas, and understand the journey from concept to execution.",
      "The community conducts ideation sessions, innovation challenges, startup-focused activities, mentoring interactions, pitching opportunities, and initiatives that encourage students to think beyond conventional solutions.",
      "Through collaboration, experimentation, and an entrepreneurial mindset, the community aims to nurture future innovators and help students take their ideas from the drawing board toward real-world impact."
    ],
    logoLight: entrepreneurshipLight,
    logoDark: entrepreneurshipDark
  }
]

const societyShowcase = [
  {
    type: 'society',
    label: 'IEEE SOCIETY',
    title: 'IEEE Circuits and Systems Society (CASS)',
    description: [
      "The IEEE Circuits and Systems Society (CASS) at St. Martin's Engineering College is an IEEE-affiliated society focused on circuits, systems, electronics, embedded technologies, and related areas of engineering. It provides students with opportunities to deepen their technical knowledge and engage with developments in the field.",
      "Through technical sessions, workshops, expert interactions, and project-based activities, CASS encourages students to explore concepts beyond the classroom and apply them to practical engineering challenges.",
      "The society aims to promote technical excellence, innovation, research awareness, and hands-on learning among students interested in circuits and systems engineering."
    ],
    logoLight: ieeeCassLight,
    logoDark: ieeeCassDark
  }
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
          title="Communities & Societies"
          lede="The intra-college communities and IEEE-affiliated society that power IEEE Student Branch SMEC."
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col gap-16">
          
          {/* Main Student Branch Card */}
          <div className="flex flex-col gap-6">
            <motion.article
              className="panel panel-pad"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="w-full lg:w-1/3 shrink-0 flex justify-center">
                  <div className="w-full max-w-[300px] aspect-[4/3] rounded-card border border-light-border dark:border-dark-border bg-light-surface-alt dark:bg-dark-surface-alt flex items-center justify-center p-8 transition-all duration-base ease-brand hover:shadow-e2">
                    <img
                      src={isDark ? studentBranchCard.logoDark : studentBranchCard.logoLight}
                      alt={studentBranchCard.title}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 section-head text-left">
                  <span className="chip chip-brand self-start">{studentBranchCard.label}</span>
                  <h2 className="type-h2 txt-primary leading-tight">
                    {studentBranchCard.title}
                    <span className="block text-base sm:text-lg font-bold text-brand-600 dark:text-brand-400 mt-1">
                      {studentBranchCard.subtitle}
                    </span>
                  </h2>
                  <div className="flex flex-col gap-4 mt-1">
                    {studentBranchCard.description.map((paragraph, idx) => (
                      <p key={idx} className="type-body txt-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Section 1: IEEE SMEC Communities */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 border-b border-light-border dark:border-dark-border pb-4 text-left">
              <span className="type-eyebrow text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase flex items-center gap-2">
                <Layers size={14} />
                Student Branch Structure
              </span>
              <h2 className="type-h2 txt-primary">IEEE SMEC Communities</h2>
              <p className="type-body-sm txt-secondary max-w-2xl">
                Intra-college student communities operating under IEEE SMEC to provide hands-on technical learning and entrepreneurial opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {communityShowcase.map((item, index) => {
                const isLeft = index % 2 === 0
                const IconComponent = item.icon

                return (
                  <motion.article
                    key={item.title}
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
                      {/* Visual Lockup */}
                      <div className="w-full lg:w-1/3 shrink-0 flex justify-center">
                        <div className="w-full max-w-[300px] aspect-[4/3] rounded-card border border-light-border dark:border-dark-border bg-light-surface-alt dark:bg-dark-surface-alt flex items-center justify-center p-8 transition-all duration-base ease-brand hover:shadow-e2">
                          {item.logoLight ? (
                            <img
                              src={isDark && item.logoDark ? item.logoDark : item.logoLight}
                              alt={item.title}
                              className="max-w-full max-h-full w-auto h-auto object-contain"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              <div className={`w-16 h-16 rounded-2xl ${
                                item.accentColor === 'amber' ? 'bg-amber-600' : 'bg-brand-600'
                              } text-white flex items-center justify-center shadow-e2 mb-3`}>
                                <IconComponent size={32} />
                              </div>
                              <span className={`type-eyebrow ${
                                item.accentColor === 'amber' ? 'text-amber-600 dark:text-amber-400' : 'txt-brand'
                              } tracking-widest font-bold text-center`}>
                                {item.title}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Copy */}
                      <div className="flex-1 min-w-0 section-head text-left">
                        <span className={`chip ${
                          item.accentColor === 'amber' ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'chip-brand'
                        } self-start`}>
                          {item.label}
                        </span>
                        <h2 className="type-h2 txt-primary">{item.title}</h2>
                        <div className="flex flex-col gap-4 mt-1">
                          {item.description.map((paragraph, idx) => (
                            <p key={idx} className="type-body txt-secondary leading-relaxed">
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

          {/* Section 2: IEEE Affiliated Society */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 border-b border-light-border dark:border-dark-border pb-4 text-left">
              <span className="type-eyebrow text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase flex items-center gap-2">
                <Award size={14} />
                Global IEEE Chapter
              </span>
              <h2 className="type-h2 txt-primary">IEEE Affiliated Society</h2>
              <p className="type-body-sm txt-secondary max-w-2xl">
                Official global IEEE society chapter established at St. Martin's Engineering College.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {societyShowcase.map((society, index) => {
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
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
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
                      <div className="flex-1 min-w-0 section-head text-left">
                        <span className="chip chip-brand self-start">{society.label}</span>
                        <h2 className="type-h2 txt-primary">{society.title}</h2>
                        <div className="flex flex-col gap-4 mt-1">
                          {society.description.map((paragraph, idx) => (
                            <p key={idx} className="type-body txt-secondary leading-relaxed">
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
      </div>
    </PageTransition>
  )
}
