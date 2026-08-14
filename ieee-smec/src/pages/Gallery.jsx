import { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, ChevronLeft, ChevronRight, ImageOff, FolderOpen, ImagePlus } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'

const EASE = [0.22, 0.61, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

const albums = [
  {
    id: 'inauguration',
    title: 'IEEE Student Branch Inauguration',
    description: 'A collection of moments from the IEEE SMEC inauguration, from the energy of the event to the conversations, celebrations, and team memories that followed. Each photograph captures a part of the beginning of our journey together.',
    cover: '/Gallery images/Inauguration/INAU-THUMB.png',
    folder: 'Gallery images/Inauguration',
    images: [
      { id: 1, src: '/Gallery images/Inauguration/img1.jpeg'},
      { id: 2, src: '/Gallery images/Inauguration/img2.jpeg'},
      { id: 3, src: '/Gallery images/Inauguration/img3.jpeg'},
      { id: 4, src: '/Gallery images/Inauguration/img4.jpeg'},
      { id: 5, src: '/Gallery images/Inauguration/img5.jpeg'},
      { id: 6, src: '/Gallery images/Inauguration/img6.jpeg'},
      { id: 7, src: '/Gallery images/Inauguration/img7.jpeg'},
      { id: 8, src: '/Gallery images/Inauguration/img8.jpeg'},
      { id: 9, src: '/Gallery images/Inauguration/img9.jpeg'},
      { id: 10, src: '/Gallery images/Inauguration/img10.jpeg'},
      { id: 11, src: '/Gallery images/Inauguration/img11.jpeg'},
      { id: 12, src: '/Gallery images/Inauguration/img12.jpeg'},
      { id: 13, src: '/Gallery images/Inauguration/img13.jpeg'},
      { id: 14, src: '/Gallery images/Inauguration/img14.jpeg'},
      { id: 15, src: '/Gallery images/Inauguration/img15.jpeg'},
      { id: 16, src: '/Gallery images/Inauguration/img16.jpeg'},
      { id: 17, src: '/Gallery images/Inauguration/img17.jpeg'},
      { id: 18, src: '/Gallery images/Inauguration/img18.jpeg'},
      { id: 19, src: '/Gallery images/Inauguration/img19.jpeg'},
      { id: 20, src: '/Gallery images/Inauguration/img20.jpeg'},
    ]
  }
  ,
  {
    id: 'bts',
    title: 'Behind the Scenes',
    description: 'Sneak peeks, planning sessions, and candid moments of the IEEE SMEC executive committee preparing and organizing events behind the curtains.',
    cover: '/Gallery images/Behind the scenes/BTS-THUMB.png',
    folder: 'Gallery images/Behind the scenes',
    images: [
      { id: 1, src: '/Gallery images/Behind the scenes/im1.jpeg', filename: 'im1.jpeg', alt: 'Executive Body Planning Session' },
      { id: 2, src: '/Gallery images/Behind the scenes/im2.jpeg', filename: 'im2.jpeg', alt: 'Core Committee Discussions' },
      { id: 3, src: '/Gallery images/Behind the scenes/im3.jpeg', filename: 'im3.jpeg', alt: 'Brain Stroming ideas for website' },
      { id: 4, src: '/Gallery images/Behind the scenes/im4.jpeg', filename: 'im4.jpeg', alt: 'Reviewing the Designs and Planning' },
      { id: 5, src: '/Gallery images/Behind the scenes/im5.jpeg', filename: 'im5.jpeg', alt: 'Preping Docs' },
    ]
  }
]

function GalleryImage({ src, filename, folder, alt, index, onOpenLightbox }) {
  const [imgErr, setImgErr] = useState(false)

  if (imgErr) {
    return (
      <div className="break-inside-avoid mb-6 w-full aspect-[4/3] bg-light-surface-alt dark:bg-dark-surface-alt border border-light-border dark:border-dark-border rounded-card flex flex-col items-center justify-center text-center p-5 select-none shadow-e1">
        <ImageOff className="w-7 h-7 text-slate-400 dark:text-dark-text-muted mb-2 opacity-70" />
        <span className="text-xs font-bold txt-primary mb-1 block line-clamp-1">Image {index + 1}</span>
        <span className="text-[9px] text-slate-400 dark:text-dark-text-muted leading-normal max-w-[20ch]">
          Upload {filename} to public/{folder}/
        </span>
      </div>
    )
  }

  return (
    <motion.figure
      variants={itemVariants}
      onClick={() => onOpenLightbox(index)}
      className="break-inside-avoid mb-6 media-frame group overflow-hidden shadow-e1 hover:shadow-e3 hover:-translate-y-1 rounded-card bg-light-surface-alt/45 dark:bg-dark-surface-alt/25 w-full cursor-pointer transition-all duration-base"
    >
      <img
        src={src}
        alt={alt || filename}
        loading="lazy"
        onError={() => setImgErr(true)}
        className="w-full h-auto block rounded-card object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.025]"
      />
    </motion.figure>
  )
}

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const location = useLocation()

  const selectedAlbumId = searchParams.get('album')

  // Reset lightbox if location search cleared
  useEffect(() => {
    if (!location.search) {
      setLightboxIndex(null)
    }
  }, [location])

  const activeAlbum = albums.find((a) => a.id === selectedAlbumId)

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handlePrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    if (activeAlbum) {
      setLightboxIndex((prev) => (prev === 0 ? activeAlbum.images.length - 1 : prev - 1))
    }
  }

  const handleNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    if (activeAlbum) {
      setLightboxIndex((prev) => (prev === activeAlbum.images.length - 1 ? 0 : prev + 1))
    }
  }

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 40) {
      handleNext()
    } else if (distance < -40) {
      handlePrev()
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand pb-20">
        <PageHero
          eyebrow="Memories we cherish"
          title="Beyond the Events"
          lede="It's not just about workshops or competitions. It's about the people we meet, the ideas we share, and the memories we create along the way."
          image="/Event images/gallery.webp"
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
          <AnimatePresence mode="wait">
            {!selectedAlbumId ? (
              /* ALBUMS INDEX VIEW */
              <motion.div
                key="albums"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col gap-3 pb-6 border-b border-light-border dark:border-dark-border">
                  <span className="type-eyebrow txt-muted">Albums</span>
                  <h2 className="type-h2 txt-primary">IEEE SB SMEC Photo Gallery</h2>
                  <p className="type-body txt-secondary max-w-xl">
                    Browse memories, events, and behind-the-scenes moments from our student branch activities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {albums.map((album, idx) => (
                    <motion.div
                      key={album.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: EASE, delay: idx * 0.1 }}
                      className="panel overflow-hidden group flex flex-col justify-between"
                    >
                      <div>
                        {/* Cover Image Frame */}
                        <div className="media-frame aspect-[16/9] w-full overflow-hidden shadow-e1 relative bg-slate-100 dark:bg-dark-bg">
                          <img
                            src={album.cover}
                            alt={album.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.025]"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop";
                            }}
                          />
                          <span className="absolute top-4 right-4 bg-light-surface/90 dark:bg-dark-surface/90 border border-light-border dark:border-dark-border px-3 py-1 rounded-pill text-[10px] font-bold txt-brand tracking-widest uppercase shadow-sm">
                            {album.images.length} Photos
                          </span>
                        </div>

                        {/* Text Inset */}
                        <div className="p-6 text-left">
                          <h3 className="type-h3 txt-primary group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors duration-base">
                            {album.title}
                          </h3>
                          <p className="type-body-sm txt-secondary mt-3.5 leading-relaxed">
                            {album.description}
                          </p>
                        </div>
                      </div>

                      {/* CTA Panel */}
                      <div className="p-6 pt-0 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setSearchParams({ album: album.id })}
                          className="btn btn-primary btn-sm group/btn"
                        >
                          See All Images
                          <FolderOpen size={14} className="transition-transform duration-base group-hover/btn:scale-110" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* ALBUM DETAIL GALLERY VIEW */
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col gap-8"
              >
                {/* Back button and header */}
                <div className="flex flex-col items-start gap-4 pb-6 border-b border-light-border dark:border-dark-border">
                  <button
                    type="button"
                    onClick={() => setSearchParams({})}
                    className="btn btn-secondary btn-sm group mb-4"
                  >
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    Back to Albums
                  </button>

                  <div className="mt-2">
                    <h2 className="type-h2 txt-primary text-left leading-none">
                      {activeAlbum?.title}
                    </h2>
                  </div>
                  <p className="type-body txt-secondary text-left max-w-2xl mt-1">
                    {activeAlbum?.description}
                  </p>
                </div>

                {/* Images grid inside Panel */}
                <section className="panel panel-pad">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6"
                  >
                    {activeAlbum?.images.map((img, index) => (
                      <GalleryImage
                        key={img.id}
                        src={img.src}
                        filename={img.filename}
                        folder={activeAlbum.folder}
                        alt={img.alt}
                        index={index}
                        onOpenLightbox={setLightboxIndex}
                      />
                    ))}
                  </motion.div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && activeAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="absolute top-0 left-0 right-0 h-16 px-6 flex justify-between items-center text-white/70">
              <span className="text-xs font-semibold tracking-wider">
                {activeAlbum.title} — {lightboxIndex + 1} of {activeAlbum.images.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="hover:text-white hover:scale-110 p-2 transition-all"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Interactive Stage */}
            <div
              className="relative w-full flex-1 flex items-center justify-center px-2 sm:px-14 touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Prev Arrow - Visible on both Mobile and Desktop */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 bg-white/10 hover:bg-white/20 text-white p-2.5 sm:p-3 rounded-full border border-white/20 hover:scale-105 active:scale-95 transition-all z-30 flex items-center justify-center shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} className="sm:w-6 sm:h-6" />
              </button>

              {/* Main Image Frame */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="max-h-[72vh] max-w-[88vw] md:max-h-[80vh] md:max-w-[70vw] overflow-hidden flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeAlbum.images[lightboxIndex].src}
                  alt={activeAlbum.images[lightboxIndex].alt}
                  className="max-h-[72vh] max-w-[88vw] md:max-h-[80vh] md:max-w-[70vw] object-contain shadow-e4 border border-white/5 rounded-card"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='1.5' class='w-16 h-16 opacity-40'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /%3E%3C/svg%3E";
                  }}
                />
              </motion.div>

              {/* Next Arrow - Visible on both Mobile and Desktop */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-6 bg-white/10 hover:bg-white/20 text-white p-2.5 sm:p-3 rounded-full border border-white/20 hover:scale-105 active:scale-95 transition-all z-30 flex items-center justify-center shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight size={22} className="sm:w-6 sm:h-6" />
              </button>
              
            </div>

            {/* Bottom Caption & Mobile Swipe Indicators */}
            <div className="absolute bottom-0 left-0 right-0 h-20 px-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-center text-white/95 pb-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                {activeAlbum.images[lightboxIndex].alt || activeAlbum.images[lightboxIndex].filename}
              </p>
              <p className="text-[10px] text-white/60 mt-1 sm:hidden">
                Swipe left / right or tap arrows to browse photos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
