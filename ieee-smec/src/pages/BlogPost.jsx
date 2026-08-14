import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, Calendar, Clock, Award, CheckCircle, Linkedin, ImageOff, Sparkles, Images, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const postData = {
  inauguration: {
    title: 'IEEE Student Branch Inauguration Ceremony 2026: A New Chapter of Innovation, Leadership and Technology',
    subtitle: "St. Martin's Engineering College | IEEE Student Branch",
    date: '8 August 2026',
    readTime: '5 min read',
    category: 'Milestones',
    image: '/Blog images/blog1-banner.png',
    introduction: "On 8 August 2026, IEEE SMEC officially opened a new chapter. At the Sardar Vallabhbhai Patel Auditorium (SCB Block), approximately 400 students, faculty members, academic leaders, and IEEE professionals came together for the inauguration of the IEEE Student Branch for the 2026–2027 academic year. More than a formal ceremony, the event brought students face-to-face with ideas at the intersection of technology, innovation, leadership, and professional growth, featuring two expert sessions on Machine Learning & VLSI and the mindset required to shape the future of technology.",
    guests: [
      {
        name: 'Prof. Dr. K. Ravindra',
        role: "Director & Principal, St. Martin's Engineering College",
        category: 'Institutional Leadership',
        details: "Represented the institutional leadership of St. Martin's Engineering College, encouraging technical excellence and presiding over the felicitation of distinguished guests.",
        linkedin: 'https://www.linkedin.com/in/kasa-ravindra-893524257/',
        image: '/Blog images/ravindra.jpeg'
      },
      {
        name: 'Prof. Dr. JVR Ravindra',
        role: 'Chair, IEEE CAS/EDS Joint Chapter, IEEE Hyderabad Section | Principal & Professor, Vardhaman College of Engineering',
        category: 'Cheif Guest',
        details: 'Delivered Expert Talk I: “When Intelligence Meets Silicon: The Basics of Machine Learning and VLSI”, guiding students on hardware-software convergence.',
        linkedin: 'https://www.linkedin.com/in/jvr-ravindra-39b580192/',
        image: '/Blog images/ravindra-jvr.webp'
      },
      {
        name: 'Dr. Miriala Santosh',
        role: 'Associate Director, Office of Industry Alliances, Anurag University | Treasurer, IEEE CAS Hyderabad Section',
        category: 'Distinguished Guest',
        details: 'Shared insights on the value of industry-academia collaboration, professional networking, and global IEEE membership benefits.',
        linkedin: 'https://www.linkedin.com/in/santhosh-miriala-174704189/',
        image: '/Blog images/im7.jpeg'
      },
      {
        name: 'Dr. A. Chakradar',
        role: 'Vice Chair, IEEE CAS/EDS Joint Chapter, IEEE Hyderabad Section | SR University',
        category: 'Expert Speaker',
        details: 'Delivered Expert Talk II: “Empowering Students to Innovate, Lead, and Shape the Future of Technology”, focusing on innovation mindset and leadership.',
        linkedin: 'https://www.linkedin.com/in/dr-chakradar-smieee-6935ba21/',
        image: '/Blog images/im8.jpeg'
      }
    ],
    highlights: [
      'Official branch inauguration marking the 2026–2027 academic year charter.',
      'Approximately 400 student delegates attended the inaugural ceremony and sessions.',
      'Two expert sessions on ML & VLSI convergence and innovation leadership.',
      'Traditional lamp lighting and prayer song marking the pursuit of technical excellence.'
    ]
  }
}

function GuestCard({ name, role, category, details, image, linkedin }) {
  const [imgErr, setImgErr] = useState(false)
  
  const getInitials = (n) => {
    return n
      .split(' ')
      .filter((x) => x && !x.includes('.'))
      .map((x) => x[0])
      .slice(0, 2)
      .join('')
  }

  return (
    <div className="bg-light-surface dark:bg-dark-surface-alt rounded-2xl border border-light-border dark:border-dark-border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group">
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/5] bg-slate-100 dark:bg-dark-bg overflow-hidden">
        {category && (
          <span className="absolute top-3 left-3 bg-slate-900/80 dark:bg-dark-surface/90 text-brand-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-pill backdrop-blur-sm z-20 border border-brand-500/20">
            {category}
          </span>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-white/90 dark:bg-dark-surface text-[#0077B5] hover:bg-[#0077B5] hover:text-white hover:scale-110 w-8 h-8 rounded-full shadow-sm flex items-center justify-center transition-all duration-300 z-20 backdrop-blur-sm"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin size={14} />
          </a>
        )}
        {!imgErr ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgErr(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-sky-50 dark:from-dark-bg dark:to-dark-surface">
            <span className="font-heading text-3xl font-bold text-slate-400 dark:text-dark-text-muted select-none">
              {getInitials(name)}
            </span>
            <ImageOff className="w-6 h-6 text-slate-400 dark:text-dark-text-muted mt-2" />
          </div>
        )}
      </div>

      {/* Details Container */}
      <div className="flex flex-col flex-1 p-5 justify-start text-left">
        <h4 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
          {name}
        </h4>
        <span className="text-xs text-brand-600 dark:text-brand-400 mt-2 font-bold leading-normal">
          {role}
        </span>
        <p className="text-xs text-slate-600 dark:text-dark-text-secondary mt-3 leading-relaxed">
          {details}
        </p>
      </div>
    </div>
  )
}

export default function BlogPost() {
  const { postId } = useParams()
  const post = postData[postId]

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex flex-col items-center justify-center gap-6 px-4">
          <h2 className="type-h2 txt-primary">Post Not Found</h2>
          <p className="type-body txt-secondary text-center max-w-sm">
            The blog post you are looking for does not exist or has been relocated.
          </p>
          <Link to="/blog" className="btn btn-primary btn-sm">
            Back to Blog
          </Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand pb-24">
        {/* Banner Header with Scrim */}
        <div className="relative w-full pt-[132px] pb-12 sm:pb-16 flex items-center border-b border-light-border dark:border-dark-border overflow-hidden">
          {post.image && (
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url("${post.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
          <div className="absolute inset-0 z-0 bg-slate-900/30 dark:bg-[#020813]/40" />
          
          <div className="max-w-shell mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center drop-shadow-lg">
            <div className="w-full text-left mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-white/90 hover:text-white uppercase transition-colors select-none"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white max-w-4xl leading-tight sm:leading-snug mx-auto">
              {post.title}
            </h1>
            <div className="flex justify-center items-center gap-5 text-xs sm:text-sm text-white/80 font-semibold mt-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} className="text-brand-300" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-brand-300" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Content Layout matching the full-width of Home Page */}
        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 mt-14 relative z-10">
          <div className="flex flex-col gap-10">
            {/* Group Inauguration Image */}
            <div className="w-full shadow-e2 rounded-panel overflow-hidden border border-light-border dark:border-dark-border">
              <img 
                src="/Blog images/group-inaug.webp" 
                alt="Inauguration Group Photo" 
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[600px] object-center"
              />
            </div>

            {/* Unified Main Reading Container */}
            <div className="panel panel-pad space-y-12 text-left bg-light-surface dark:bg-dark-surface shadow-e2 border border-light-border dark:border-dark-border">
              
              {/* Introduction header */}
              <div className="max-w-3xl mx-auto border-l-4 border-brand-500 pl-4 py-1">
                <p className="text-base sm:text-lg font-medium txt-primary leading-relaxed italic">
                  {post.introduction}
                </p>
              </div>

              {/* Event At A Glance Section */}
              <section className="max-w-3xl mx-auto w-full">
                <div className="p-6 rounded-2xl bg-light-surface-alt dark:bg-dark-surface-alt border border-light-border dark:border-dark-border shadow-sm">
                  <span className="type-eyebrow text-brand-600 dark:text-brand-400 block mb-3 font-bold tracking-widest uppercase">
                    Event at a Glance
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                    <div>
                      <span className="text-[11px] txt-muted block font-semibold">Date</span>
                      <span className="text-sm font-bold txt-primary">8 August 2026</span>
                    </div>
                    <div>
                      <span className="text-[11px] txt-muted block font-semibold">Venue</span>
                      <span className="text-sm font-bold txt-primary">Sardar Vallabhbhai Patel Auditorium</span>
                    </div>
                    <div>
                      <span className="text-[11px] txt-muted block font-semibold">Participants</span>
                      <span className="text-sm font-bold txt-primary">Approx. 400</span>
                    </div>
                    <div>
                      <span className="text-[11px] txt-muted block font-semibold">Expert Sessions</span>
                      <span className="text-sm font-bold txt-primary">2 Keynote Talks</span>
                    </div>
                    <div>
                      <span className="text-[11px] txt-muted block font-semibold">Academic Year</span>
                      <span className="text-sm font-bold txt-primary">2026–2027</span>
                    </div>
                    <div>
                      <span className="text-[11px] txt-muted block font-semibold">Organised By</span>
                      <span className="text-sm font-bold txt-primary">IEEE SB SMEC</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 1: A Promising Beginning */}
              <section className="max-w-3xl mx-auto space-y-6">
                <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                  A Promising Beginning
                </h2>
                <p className="type-body txt-secondary leading-relaxed">
                  The ceremony began with a warm welcome to the dignitaries, faculty members, academic leaders, and students, followed by the traditional <strong>Lighting of the Lamp and Prayer Song</strong>. The ceremonial lighting symbolised knowledge, enlightenment, learning, and the pursuit of excellence.
                </p>
                <p className="type-body txt-secondary leading-relaxed">
                  The inauguration highlighted the vision of St. Martin's Engineering College towards academic excellence, technological advancement, research, industry interaction, skill development, and holistic student growth.
                </p>
                <p className="type-body txt-secondary leading-relaxed">
                  The establishment of the IEEE Student Branch represents another significant step in strengthening this technical and professional ecosystem, giving students an active platform to connect classroom learning with real-world engineering practices.
                </p>
                
                {/* Inline Image Slot */}
                <div className="my-8 flex flex-col items-center justify-center">
                  <img
                    src="/Blog images/im6.jpeg"
                    alt="Lighting of the Lamp Ceremony"
                    className="w-full aspect-video object-cover rounded-2xl shadow-md transition-transform duration-700 hover:scale-[1.01]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=675&fit=crop";
                    }}
                  />
                  <p className="text-center text-xs txt-muted mt-2.5 italic">
                    Lighting of the lamp ceremony symbolising the pursuit of knowledge.
                  </p>
                </div>
              </section>

              {/* Section 2: Introducing the IEEE Student Branch */}
              <section className="max-w-3xl mx-auto space-y-6">
                <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                  Introducing the IEEE Student Branch
                </h2>
                <p className="type-body txt-secondary leading-relaxed">
                  Students were introduced to the vision and purpose of IEEE and its role in advancing technology for the benefit of humanity.
                </p>
                <p className="type-body txt-secondary leading-relaxed">
                  The IEEE Student Branch was presented as a student-driven platform where learners can explore a wide range of opportunities, including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pl-2 mt-4">
                  {[
                    "Technical workshops and seminars",
                    "Expert interactions and conferences",
                    "Project exhibitions and competitions",
                    "Paper presentations and research activities",
                    "Professional networking",
                    "Skill-development programmes",
                    "Leadership and collaborative initiatives"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-brand-500 mt-1 shrink-0" />
                      <span className="text-sm txt-secondary leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="type-body txt-secondary leading-relaxed mt-6">
                  The branch aims to build an active and inclusive community where students can exchange ideas, collaborate on technical challenges, explore emerging technologies, and transform innovative ideas into meaningful outcomes.
                </p>
              </section>

              {/* Section 3: Distinguished Guests & Speakers */}
              <section className="space-y-6">
                <div className="max-w-3xl mx-auto">
                  <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                    Distinguished Guests & Speakers
                  </h2>
                  <p className="type-body txt-secondary leading-relaxed mb-6">
                    The inauguration was enriched by the presence of distinguished academic leaders, industry experts, and IEEE section leaders whose addresses encouraged students to remain curious, embrace continuous learning, participate in professional communities, and develop practical engineering skills.
                  </p>
                </div>

                {/* Symmetrical Grid layout for Guests & Speakers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                  {post.guests.map((guest, index) => (
                    <GuestCard
                      key={index}
                      name={guest.name}
                      role={guest.role}
                      category={guest.category}
                      details={guest.details}
                      image={guest.image}
                      linkedin={guest.linkedin}
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* Second Main Reading Container: Expert Talks & Event Conclusion */}
            <div className="panel panel-pad space-y-12 text-left bg-light-surface dark:bg-dark-surface shadow-e2 border border-light-border dark:border-dark-border">

              {/* Section 4: Expert Talk I: When Intelligence Meets Silicon: The Basics of Machine Learning and VLSI */}
              <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                  Expert Talk I: When Intelligence Meets Silicon: The Basics of Machine Learning and VLSI
                </h2>
                <div className="text-left text-xs font-bold text-brand-600 dark:text-brand-400">
                  Speaker: Prof. Dr. JVR Ravindra (Chair, IEEE CAS/EDS Joint Chapter, IEEE Hyderabad Section | Principal & Professor, Vardhaman College of Engineering)
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center pt-2">
                  {/* Left Side: Content */}
                  <div className="flex-1 md:w-7/12 space-y-4 text-left">
                    <p className="type-body txt-secondary leading-relaxed">
                      One of the highlights of the programme was the expert session <strong>“When Intelligence Meets Silicon: The Basics of Machine Learning and VLSI”</strong>, delivered by <strong>Prof. Dr. JVR Ravindra</strong>.
                    </p>
                    <p className="type-body txt-secondary leading-relaxed">
                      The session introduced students to the fundamentals of <strong>Machine Learning and VLSI</strong>, emphasizing the growing convergence between intelligent software systems and advanced hardware engineering.
                    </p>
                    <p className="type-body txt-secondary leading-relaxed">
                      Prof. Dr. JVR Ravindra highlighted the importance of interdisciplinary engineering, urging students to build strong technical fundamentals, cultivate practical skills, engage in hands-on interdisciplinary projects, participate in technical competitions, and explore research opportunities and emerging career pathways.
                    </p>
                    
                    {/* Key Takeaways Badges */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold txt-muted uppercase tracking-wider block mb-2">Key Takeaways</span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Machine Learning',
                          'VLSI',
                          'Software–Hardware Convergence',
                          'Practical Skills',
                          'Research & Projects',
                          'Emerging Careers'
                        ].map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-pill bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold border border-brand-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Image */}
                  <div className="flex-1 md:w-5/12 flex flex-col items-center justify-center w-full mt-6 md:mt-0">
                    <img
                      src="/Blog images/im2.jpeg"
                      alt="Prof. Dr. JVR Ravindra Keynote"
                      className="w-full h-auto object-contain rounded-2xl shadow-lg transition-transform duration-500 ease-brand hover:scale-[1.02]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675&fit=crop";
                      }}
                    />
                    <p className="text-center text-xs txt-muted mt-3 italic max-w-sm">
                      Prof. Dr. JVR Ravindra delivering Expert Talk on ML & VLSI convergence.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Expert Talk II: Empowering Students to Innovate, Lead, and Shape the Future of Technology */}
              <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                  Expert Talk II: Empowering Students to Innovate, Lead, and Shape the Future of Technology
                </h2>
                <div className="text-left text-xs font-bold text-brand-600 dark:text-brand-400">
                  Speaker: Dr. A. Chakradar (Vice Chair, IEEE CAS/EDS Joint Chapter, IEEE Hyderabad Section | SR University)
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center pt-2">
                  {/* Left Side: Content */}
                  <div className="flex-1 md:w-7/12 space-y-4 text-left">
                    <p className="type-body txt-secondary leading-relaxed">
                      The second expert interaction, <strong>“Empowering Students to Innovate, Lead, and Shape the Future of Technology,”</strong> was delivered by <strong>Dr. A. Chakradar</strong>.
                    </p>
                    <p className="type-body txt-secondary leading-relaxed">
                      The session focused on fostering an innovation-oriented mindset, encouraging students to identify real-world problems, question conventional approaches, engage in creative problem-solving, and embrace experimentation.
                    </p>
                    <p className="type-body txt-secondary leading-relaxed">
                      Dr. A. Chakradar emphasized key qualities for future engineers, including leadership, personal responsibility, teamwork, effective communication, initiative, adaptability, continuous learning, and the responsible use of technology. He inspired students to leverage professional communities like IEEE for mentorship, collaboration, exposure, and long-term professional growth.
                    </p>

                    {/* Key Takeaways Badges */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold txt-muted uppercase tracking-wider block mb-2">Key Takeaways</span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Innovation Mindset',
                          'Problem Solving',
                          'Leadership & Teamwork',
                          'Continuous Learning',
                          'Responsible Tech',
                          'IEEE Mentorship'
                        ].map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-pill bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold border border-brand-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Image */}
                  <div className="flex-1 md:w-5/12 flex flex-col items-center justify-center w-full mt-6 md:mt-0">
                    <img
                      src="/Blog images/im1.jpeg"
                      alt="Dr. A. Chakradar Keynote"
                      className="w-full h-auto object-contain rounded-2xl shadow-lg transition-transform duration-500 ease-brand hover:scale-[1.02]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=675&fit=crop";
                      }}
                    />
                    <p className="text-center text-xs txt-muted mt-3 italic max-w-sm">
                      Dr. A. Chakradar delivering Expert Talk on innovation and leadership mindset.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Two Talks. One Bigger Message. */}
              <section className="max-w-4xl mx-auto">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-500/10 via-light-surface-alt to-brand-500/5 dark:from-brand-500/15 dark:via-dark-surface-alt dark:to-brand-500/5 border border-brand-500/30 text-left space-y-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    
                    <h3 className="type-h3 txt-primary">Two Talks. One Bigger Message.</h3>
                  </div>
                  <p className="type-body txt-secondary leading-relaxed">
                    The first session explored <strong>the technology</strong> — particularly the convergence of Machine Learning and VLSI hardware.
                  </p>
                  <p className="type-body txt-secondary leading-relaxed">
                    The second session explored <strong>the technologist</strong> — the mindset, leadership, adaptability, and problem-solving abilities required to create meaningful real-world impact.
                  </p>
                  <p className="type-body txt-secondary leading-relaxed font-semibold txt-primary pt-2">
                    Together, these sessions represented the broader vision of IEEE SMEC: developing students who can learn deeply, think differently, collaborate effectively, adapt continuously, and transform innovative ideas into meaningful outcomes.
                  </p>
                </div>
              </section>

              {/* Section 7: From Questions to Conversations */}
              <section className="max-w-3xl mx-auto space-y-6">
                <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                  From Questions to Conversations
                </h2>
                <p className="type-body txt-secondary leading-relaxed">
                  The expert sessions were followed by an interactive Q&A discussion, providing students with an open platform to engage directly with the distinguished guests. Participants sought guidance on technical learning, research pathways, innovation, emerging technologies, professional development, and future career opportunities.
                </p>
              </section>

              {/* Section 8: Felicitation Ceremony */}
              <section className="max-w-3xl mx-auto space-y-6">
                <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                  Felicitation Ceremony
                </h2>
                <p className="type-body txt-secondary leading-relaxed">
                  A formal felicitation ceremony was conducted to honour the distinguished guests for their valuable presence, guidance, and contributions to the inauguration. The guests were felicitated by <strong>Prof. Dr. K. Ravindra, Director & Principal, St. Martin's Engineering College</strong>.
                </p>
                
                {/* Inline Image Slot */}
                <div className="my-8 flex flex-col items-center justify-center">
                  <img
                    src="/Blog images/im4.jpeg"
                    alt="Felicitation Ceremony"
                    className="w-full aspect-video object-cover rounded-2xl shadow-md transition-transform duration-700 hover:scale-[1.01]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=675&fit=crop";
                    }}
                  />
                  <p className="text-center text-xs txt-muted mt-2.5 italic">
                    Dignitary felicitation by Director & Principal Prof. Dr. K. Ravindra.
                  </p>
                </div>
              </section>

              {/* Section 9: One Beginning. Many Possibilities. */}
              <section className="max-w-3xl mx-auto space-y-6">
                <h2 className="type-h2 txt-primary pb-2 border-b border-light-border dark:border-dark-border">
                  One Beginning. Many Possibilities.
                </h2>
                <p className="type-body txt-secondary leading-relaxed">
                  The ceremony concluded with the Vote of Thanks and the National Anthem, formally bringing the inauguration event to a close.
                </p>
                <p className="type-body txt-secondary leading-relaxed">
                  For IEEE SMEC, this was only the beginning. The Student Branch now looks forward to building a vibrant, student-driven technical community centred on:
                </p>

                <div className="flex flex-wrap gap-2.5 justify-center py-3">
                  {[
                    'Technical Learning',
                    'Innovation',
                    'Research',
                    'Collaboration',
                    'Professional Development',
                    'Leadership'
                  ].map((pillar, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-pill bg-light-surface-alt dark:bg-dark-surface-alt border border-light-border dark:border-dark-border text-xs font-bold txt-primary shadow-sm">
                      {pillar}
                    </span>
                  ))}
                </div>

                <p className="type-body-lg txt-primary font-bold text-center italic pt-4 border-t border-light-border dark:border-dark-border">
                  “The first chapter has been written. The rest of the story begins now.”
                </p>

                {/* Final Group Image */}
                <div className="mt-6 flex flex-col items-center justify-center">
                  <img
                    src="/Blog images/group-last.jpeg"
                    alt="IEEE SMEC Inauguration Final Group"
                    className="w-full aspect-video object-cover rounded-2xl shadow-md transition-transform duration-700 hover:scale-[1.01]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=675&fit=crop";
                    }}
                  />
                  <p className="text-center text-xs txt-muted mt-2.5 italic">
                    IEEE SMEC Student Branch Inauguration 2026 organizing team and student members.
                  </p>
                </div>
              </section>

            </div>

            {/* View Full Photo Gallery CTA Container */}
            <div className="panel panel-pad bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-e2 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div>
                <h3 className="type-h3 txt-primary">IEEE SMEC Inauguration Gallery</h3>
                <p className="type-body-sm txt-secondary mt-1">
                  Explore all 20 high-resolution photos, moments, and stage highlights from the inauguration ceremony.
                </p>
              </div>
              <Link
                to="/gallery?album=inauguration"
                className="btn btn-primary btn-sm group/btn shrink-0"
              >
                View Inauguration Album
                <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* Bottom Row: Side-by-Side widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4">
              
              {/* Left Widget: Achievements */}
              <div className="panel panel-pad text-left bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-e2">
                <h3 className="type-h3 txt-primary mb-4 flex items-center gap-2">
                  <Award size={18} className="text-brand-500" />
                  Key Highlights
                </h3>
                <ul className="space-y-3.5">
                  {post.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-brand-500 mt-1 shrink-0" />
                      <span className="text-xs sm:text-sm txt-secondary leading-normal">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Widget: Ready to Join Call-to-Action */}
              <div className="panel panel-pad text-center bg-gradient-to-br from-brand-600 to-brand-700 text-white border-none shadow-e2 flex flex-col justify-center items-center">
                <h3 className="font-heading font-black text-lg uppercase tracking-wider mb-2">
                  Ready to join?
                </h3>
                <p className="text-xs text-white/85 leading-relaxed mb-6 max-w-sm">
                  Be a part of St. Martin&rsquo;s Engineering College&rsquo;s premier student branch. Unlock coding workshops, industry networks, and leadership roles.
                </p>
                <a
                  href="https://forms.gle/735sZgWhqZm86SCz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-brand-700 hover:bg-slate-50 px-6 py-2.5 rounded-pill font-black text-xs uppercase tracking-wider transition-all duration-300"
                >
                  Join Us
                </a>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  )
}
