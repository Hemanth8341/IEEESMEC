import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeaderPopup({ open, items = [], onClose, className = '' }) {
  return (
    <motion.div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-card border border-light-border dark:border-dark-border bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl shadow-e3 p-2 ${className}`}
      initial={{ opacity: 0, y: -6, scale: 0.98 }}
      animate={
        open
          ? { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto' }
          : { opacity: 0, y: -6, scale: 0.98, pointerEvents: 'none' }
      }
      transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="flex flex-col gap-0.5">
        {items.map((it, idx) => {
          const ItemIcon = it.icon
          return (
            <Link
              key={idx}
              to={it.to}
              onClick={onClose}
              className="group flex items-start gap-3 p-3 rounded-control text-left transition-colors duration-base ease-brand hover:bg-light-surface-alt dark:hover:bg-dark-surface-alt"
            >
              <span className="icon-tile w-9 h-9 rounded-control-sm icon-tile-neutral group-hover:bg-brand-600/10 group-hover:text-brand-600 group-hover:border-brand-200 dark:group-hover:bg-brand-400/12 dark:group-hover:text-brand-300 dark:group-hover:border-brand-400/40">
                {ItemIcon && <ItemIcon size={16} />}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold txt-primary truncate">{it.title}</span>
                <span className="block type-caption txt-secondary line-clamp-2 mt-0.5">{it.desc}</span>
              </span>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}
