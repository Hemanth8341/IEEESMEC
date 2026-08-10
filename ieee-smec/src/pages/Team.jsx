import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, CalendarX2, Users, ImageOff } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'

const EASE = [0.22, 0.61, 0.36, 1]

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

const facultyMembers = [
  {
    name: 'Prof. Dr. K. Ravindra',
    designation: 'Director/Principal',
    college: "St. Martin's Engineering College",
    ieeeMemberId: 'N/A',
    image: 'K.Ravindra.webp',
  },
  {
    name: 'Dr. Rayudu Chinna Rao',
    designation: 'HoD, ECE Department',
    college: "St. Martin's Engineering College",
    ieeeMemberId: '101852368',
    image: 'Dr. Rayudu Chinna Rao.png',
  },
]

const teamMembers = [
  { name: 'Sheshwan Matthew', role: 'Chair', ieeeMemberId: '101571175', categories: ['Executive Team'], image: '1.webp' },
  { name: 'Rishi Dev Kumar', role: 'Vice Chair', ieeeMemberId: '101962869', categories: ['Executive Team'], image: '2.webp' },
  { name: 'Bhupathiraju Likhitha', role: 'Secretary', ieeeMemberId: '101969756', categories: ['Executive Team'], image: '3.webp' },
  { name: 'Palli Sudheer Kumar', role: 'Treasurer', ieeeMemberId: '101814983', categories: ['Executive Team'], image: '4.webp' },
  { name: 'Daksh Mavani', role: 'CASS Society Head', ieeeMemberId: '101968224', categories: ['CAS Society'], image: '7.webp' },
  { name: 'B. Hemanth Reddy', role: 'Web Master', ieeeMemberId: '101988756', categories: ['Executive Team', 'Technical Team'], image: '11.webp' },
  { name: 'Vansh Raj Soni', role: 'Technical Head', ieeeMemberId: '101987205', categories: ['Technical Team'], image: '5.webp' },
  { name: 'Boreddy Bhuvana Reddy', role: 'Marketing Head', ieeeMemberId: '101979952', categories: ['Marketing Team'], image: '6.webp' },
  { name: 'R Satya Praneeth', role: 'Technical Member', ieeeMemberId: '101988756', categories: ['Technical Team'], image: '22.webp' },
  { name: 'N Sri Surya Sharmila', role: 'CASS Society Vice-Head', ieeeMemberId: '101983470', categories: ['CAS Society'], image: '8.webp' },
  { name: 'Tejas', role: 'Social Media Head', ieeeMemberId: '101988756', categories: ['Social Media Team'], image: '20.webp' },
  { name: 'Sai Yashwanth', role: 'Social Media Member', ieeeMemberId: '101988756', categories: ['Social Media Team'], image: '9.webp' },
  { name: 'Sanjana', role: 'Social Media Member', ieeeMemberId: '101988756', categories: ['Social Media Team'], image: '19.webp' },
  { name: 'Akarshith', role: 'Social Media Member', ieeeMemberId: '101988756', categories: ['Social Media Team'], image: '21.webp' },
  { name: 'G. Snehith', role: 'Social Media Member', ieeeMemberId: '101988756', categories: ['Social Media Team'], image: '10.webp' },
  { name: 'Rakshit Yadav', role: 'Design Head', ieeeMemberId: '101988762', categories: ['Design Team'], image: '14.webp' },
  { name: 'Sanjana', role: 'Design Member', ieeeMemberId: '101988761', categories: ['Design Team'], image: '19.webp' },
  { name: 'Abdul Muqueet', role: 'Design Member', ieeeMemberId: '101988763', categories: ['Design Team'], image: '13.webp' },
  { name: 'Rohith Pranav', role: 'Marketing Member', ieeeMemberId: '101988756', categories: ['Marketing Team'], image: '16.webp' },
  { name: 'Himani Joshi', role: 'Marketing Member', ieeeMemberId: '101974696', categories: ['Marketing Team'], image: '15.webp' },
  { name: 'Bajrang Agarwal', role: 'Head', ieeeMemberId: '101674841', categories: ['Event Management Team'], image: '18.webp' },
  { name: 'Satya Brata Sahoo', role: 'Member', ieeeMemberId: '101961368', categories: ['Event Management Team'], image: '17.webp' },
  { name: 'Sufiyan Ali', role: 'Member', ieeeMemberId: '101988756', categories: ['Event Management Team'], image: '12.webp' },
]

const teamTabs = [
  'Executive Team',
  'CAS Society',
  'Technical Team',
  'Design Team',
  'Marketing Team',
  'Social Media Team',
  'Event Management Team',
]

function FacultyMemberCard({ name, designation, college, image }) {
  const [imgErr, setImgErr] = useState(false)
  const initials = getInitials(name)
  const imgSrc = image ? `/Team images/${image}` : `/Team images/${name}.png`

  return (
    <div className="bg-[#F3F4F6] dark:bg-slate-800/40 rounded-[28px] border border-black/5 dark:border-slate-800/60 p-4 flex flex-col justify-between h-[420px] relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Top Image Container */}
      <div className="relative w-full h-[76%] rounded-2xl bg-white/50 dark:bg-slate-900/50 overflow-hidden flex items-center justify-center">
        {!imgErr ? (
          <img
            src={imgSrc}
            alt={name}
            onError={() => setImgErr(true)}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-100 to-sky-50 dark:from-slate-900 dark:to-indigo-950/20">
            <span className="font-heading text-3xl font-bold text-slate-400 dark:text-slate-600 select-none">
              {initials}
            </span>
            <ImageOff className="w-5 h-5 text-slate-400 dark:text-slate-600 mt-2" />
          </div>
        )}
      </div>

      {/* Bottom details: single-line Name and Designation under name */}
      <div className="flex flex-col items-center justify-center text-center mt-2.5 mb-1.5 px-2">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight truncate w-full whitespace-nowrap">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-ieee-blue dark:text-blue-400 mt-1 uppercase font-bold tracking-widest leading-none truncate w-full whitespace-nowrap">
          {designation}
        </p>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-semibold truncate w-full whitespace-nowrap">
          {college}
        </p>
      </div>
    </div>
  )
}

function StudentMemberCard({ name, image }) {
  const [imgErr, setImgErr] = useState(false)
  const initials = getInitials(name)
  const imgSrc = image ? `/Team images/${image}` : `/Team images/${name}.png`

  return (
    <div className="bg-[#F3F4F6] dark:bg-slate-800/40 rounded-[28px] border border-black/5 dark:border-slate-800/60 p-4 flex flex-col items-center justify-center h-[380px] relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Full Image Container */}
      <div className="relative w-full h-full rounded-2xl bg-white/50 dark:bg-slate-900/50 overflow-hidden flex items-center justify-center">
        {!imgErr ? (
          <img
            src={imgSrc}
            alt={name}
            onError={() => setImgErr(true)}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-100 to-sky-50 dark:from-slate-900 dark:to-indigo-950/20">
            <span className="font-heading text-3xl font-bold text-slate-400 dark:text-slate-600 select-none">
              {initials}
            </span>
            <ImageOff className="w-5 h-5 text-slate-400 dark:text-slate-600 mt-2" />
          </div>
        )}
      </div>
    </div>
  )
}

function TeamGroupPhoto() {
  const [imgErr, setImgErr] = useState(false)

  return (
    <section className="panel px-6 sm:px-10 lg:px-14 py-6 sm:py-10 lg:py-14">
      <div className="max-w-3xl mx-auto text-center mb-10 flex flex-col items-center">
        <div className="section-head text-center flex flex-col items-center">
          <span className="type-eyebrow txt-muted">The people behind IEEE SMEC</span>
          <h2 className="type-h2 txt-primary mt-1">One Vision. One Team.</h2>
        </div>
        <p className="type-body txt-secondary text-center mt-4 max-w-2xl">
          We built the IEEE Student Branch at St. Martin&rsquo;s Engineering College to simplify how students
          learn and develop technical competency, reduce academic limitations, and inspire real-world
          technology solutions that address humanity&rsquo;s needs.
        </p>
      </div>

      <div className="mx-auto md:media-frame group md:shadow-e2 md:max-h-[65vh] md:max-w-max md:flex md:items-center md:justify-center md:bg-slate-50 md:dark:bg-slate-900/10">
        {!imgErr ? (
          <img
            src="/Team images/Full Team.png"
            alt="IEEE SMEC Student Branch Team"
            onError={() => setImgErr(true)}
            className="w-full h-auto md:w-auto md:h-auto md:max-h-[65vh] md:object-contain rounded-card md:rounded-none transition-transform duration-700 ease-brand group-hover:scale-[1.025] shadow-e2 md:shadow-none border border-light-border dark:border-dark-border md:border-none"
          />
        ) : (
          <div className="mx-6 sm:mx-0 flex flex-col items-center justify-center gap-4 text-center px-6 py-20 md:media-frame md:w-full md:bg-slate-50 md:dark:bg-slate-900/10">
            <span className="icon-tile w-14 h-14 rounded-pill icon-tile-brand">
              <Users className="w-6 h-6" />
            </span>
            <h3 className="type-h3 txt-primary">Team Group Portrait</h3>
            <p className="type-body-sm txt-secondary max-w-[46ch]">
              Upload your group photo named{' '}
              <code className="font-mono text-[0.8em] px-1.5 py-0.5 rounded bg-light-surface-alt dark:bg-dark-surface-alt txt-brand">
                Full Team.png
              </code>{' '}
              into the{' '}
              <code className="font-mono text-[0.8em] px-1.5 py-0.5 rounded bg-light-surface-alt dark:bg-dark-surface-alt txt-brand">
                Team images
              </code>{' '}
              folder to display it here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Team() {
  const [selectedYear, setSelectedYear] = useState('2026')
  const [activeTab, setActiveTab] = useState('Executive Team')

  const filteredMembers = teamMembers.filter((m) => m.categories.includes(activeTab))

  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand">
        <PageHero
          eyebrow="who we are"
          title="Team IEEE SMEC"
          lede="A passionate team of students working together to build a community that inspires learning, innovation, and leadership."
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-col gap-6">
            <TeamGroupPhoto />

            {/* ── Faculty ─────────────────────────────────────────────── */}
            <section className="panel panel-pad">
              <div className="section-head items-center text-center mb-10">
                <span className="type-eyebrow txt-muted">Guidance</span>
                <h2 className="type-h2 txt-primary">Our Faculty</h2>
                <p className="section-lede mx-auto">
                  The dedicated faculty members who guide and support IEEE Student Branch SMEC in our
                  journey of innovation and excellence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {facultyMembers.map((f) => (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <FacultyMemberCard
                      name={f.name}
                      designation={f.designation}
                      college={f.college}
                      image={f.image}
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── Student team ────────────────────────────────────────── */}
            <section className="panel panel-pad">
              <div className="section-head items-center text-center mb-10">
                <span className="type-eyebrow txt-muted">Meet our team</span>
                <h2 className="type-h2 txt-primary">Builders. Innovators. Dreamers.</h2>
                <p className="section-lede mx-auto">
                  IEEE Student Branch, SMEC is a vibrant community of driven individuals striving to create
                  and spread awareness about the technologies that surround us.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 mb-8 border-b border-light-border dark:border-dark-border">
                <div className="flex items-center gap-3 shrink-0">
                  <label htmlFor="team-year" className="type-body-sm font-semibold txt-secondary">
                    Year
                  </label>
                  <div className="relative">
                    <select
                      id="team-year"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="field field-select py-2.5"
                    >
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 txt-muted"
                    />
                  </div>
                </div>

                {selectedYear === '2026' && (
                  <div className="flex items-center gap-2 overflow-x-auto scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0 py-1">
                    {teamTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        aria-pressed={activeTab === tab}
                        className={`seg-btn ${activeTab === tab ? 'seg-btn-on' : 'seg-btn-off'}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {selectedYear !== '2026' ? (
                <div className="empty-state">
                  <span className="icon-tile w-14 h-14 rounded-pill icon-tile-neutral">
                    <CalendarX2 className="w-6 h-6" />
                  </span>
                  <p className="type-h3 txt-primary mt-1">We will update further</p>
                  <p className="type-body-sm txt-secondary max-w-[40ch]">
                    Designations and member roles for the {selectedYear} academic year will be updated in the future.
                  </p>
                </div>
              ) : filteredMembers.length === 0 ? (
                <div className="empty-state">
                  <span className="icon-tile w-14 h-14 rounded-pill icon-tile-neutral">
                    <Users className="w-6 h-6" />
                  </span>
                  <p className="type-h3 txt-primary mt-1">No members listed yet</p>
                  <p className="type-body-sm txt-secondary max-w-[40ch]">
                    Members for {activeTab} will appear here once announced.
                  </p>
                </div>
              ) : (
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {filteredMembers.map((m) => (
                    <motion.div
                      key={`${m.name}-${m.role}`}
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
                      }}
                    >
                      <StudentMemberCard
                        name={m.name}
                        image={m.image}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
