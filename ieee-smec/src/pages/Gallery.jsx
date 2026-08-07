import { motion } from 'framer-motion'
import { ImagePlus } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'

const EASE = [0.22, 0.61, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

// Local images configuration for the gallery uploads - add or remove items below
const galleryImages = [
  { id: 1, src: '/Gallery images/im1.jpeg', alt: 'Moment 1' },
  { id: 2, src: '/Gallery images/im2.jpeg', alt: 'Moment 2' },
  { id: 3, src: '/Gallery images/im3.jpeg', alt: 'Moment 3' },
  { id: 4, src: '/Gallery images/im4.jpeg', alt: 'Moment 4' },
  { id: 5, src: '/Gallery images/im5.jpeg', alt: 'Moment 5' },
]

export default function Gallery() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand">
        <PageHero
          eyebrow="Memories we cherish"
          title="Beyond the Events"
          lede="It's not just about workshops or competitions. It's about the people we meet, the ideas we share, and the memories we create along the way.."
          image="/Event images/gallery.webp"
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.section variants={itemVariants} className="panel panel-pad">
              <div className="section-head mb-8">
                <span className="chip chip-brand self-start">Moments</span>
                <h2 className="type-h2 txt-primary">IEEE SB SMEC Gallery</h2>
                <p className="section-lede">Snapshots and memory frames from our Club.</p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                variants={containerVariants}
              >
                {galleryImages.map((img) => (
                  <motion.figure
                    key={img.id}
                    variants={itemVariants}
                    className="media-frame group overflow-hidden shadow-e1 transition-all duration-base ease-brand hover:shadow-e3 hover:-translate-y-1 bg-light-surface-alt/45 dark:bg-dark-surface-alt/25 rounded-card w-full h-auto md:h-[260px] flex items-center justify-center"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`w-full h-auto block transition-transform duration-700 ease-brand group-hover:scale-[1.03] ${
                        (img.id === 2 || img.id === 3) ? 'md:h-full md:w-auto md:object-contain md:p-1.5' : 'md:h-full md:w-full md:object-cover'
                      }`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const infoDiv = document.createElement('div');
                        infoDiv.className = 'flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-6 aspect-[4/3]';
                        infoDiv.innerHTML = `
                          <svg class="w-8 h-8 mb-2 opacity-60 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <span class="text-xs font-semibold txt-primary mb-1">Image Container ${img.id}</span>
                          <span class="text-[9px] text-slate-400 dark:text-slate-550 leading-relaxed max-w-[20ch]">Upload im${img.id}.jpeg to public/Gallery images/</span>
                        `;
                        e.target.parentNode.appendChild(infoDiv);
                      }}
                    />
                  </motion.figure>
                ))}
              </motion.div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
