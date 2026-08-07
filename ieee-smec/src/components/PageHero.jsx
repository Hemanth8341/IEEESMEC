import { motion } from 'framer-motion'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * The single page-header pattern for every inner route.
 * Pass `image` for a photographic header; omit it for a brand-tinted one.
 */
export default function PageHero({ eyebrow, title, lede, image }) {
  const hasImage = Boolean(image)

  return (
    <header
      className={`relative w-full overflow-hidden border-b border-light-border dark:border-dark-border pt-nav ${
        hasImage ? '' : 'bg-light-surface dark:bg-dark-surface'
      }`}
    >
      {hasImage ? (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url("${encodeURI(image)}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="hero-scrim z-10" />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(42rem 22rem at 50% -20%, rgb(0 130 200 / 0.14), transparent 70%)',
          }}
        />
      )}

      <div className="relative z-20 max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-4"
        >
          {eyebrow && (
            <span className={`type-eyebrow ${hasImage ? 'text-white/75' : 'txt-muted'}`}>
              {eyebrow}
            </span>
          )}

          <h1 className={`type-h1 ${hasImage ? 'text-white' : 'txt-primary'}`}>{title}</h1>

          {lede && (
            <p className={`type-body ${hasImage ? 'text-white/85' : 'txt-secondary'} max-w-[52ch]`}>
              {lede}
            </p>
          )}
        </motion.div>
      </div>
    </header>
  )
}
