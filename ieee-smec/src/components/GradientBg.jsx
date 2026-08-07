import { motion } from 'framer-motion'

/**
 * Ambient brand wash that sits behind every route.
 * One treatment for all pages so section backgrounds feel connected.
 */
export default function GradientBg() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-light-bg dark:bg-dark-bg" aria-hidden="true">
      <motion.div
        className="absolute inset-0 opacity-60 dark:opacity-70"
        style={{
          background:
            'radial-gradient(60rem 40rem at 15% -10%, rgb(0 130 200 / 0.10), transparent 60%),' +
            'radial-gradient(50rem 36rem at 95% 10%, rgb(65 182 230 / 0.08), transparent 60%)',
        }}
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
