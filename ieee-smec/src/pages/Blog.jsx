import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'

const EASE = [0.22, 0.61, 0.36, 1]

const blogPosts = [
  {
    id: 'inauguration',
    title: 'IEEE Student Branch Inauguration',
    subtitle: 'Launching a new era of technology, community, and leadership at SMEC.',
    excerpt: 'Our student branch officially launched on August 8th, 2026, bringing together distinguished guests, faculty members, and over 150 student delegates for an inspiring day of technical empowerment.',
    date: '8th August 2026',
    readTime: '3 min read',
    image: '/Event images/Inauguration.png',
    category: 'Milestones',
  }
]

export default function Blog() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand">
        <PageHero
          eyebrow="Our Chronicles"
          title="The IEEE Blog"
          lede="Stories, highlights, and insights from our technical workshops, milestone celebrations, and branch activities."
          image="/Blog images/blog-banner.png"
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
          <div className="flex flex-col gap-4 mb-10 pb-6 border-b border-light-border dark:border-dark-border">
            <span className="type-eyebrow txt-muted">Event Retrospectives</span>
            <h2 className="type-h2 txt-primary">Recent Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.08 }}
                className="card card-pad card-interactive group flex flex-col justify-between"
              >
                <div>
                  {/* Cover image */}
                  <div className="media-frame aspect-[16/9] mb-5 w-full overflow-hidden shadow-e1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Metadata tags */}
                  <div className="flex items-center gap-3.5 mb-3 text-xs font-semibold text-brand-600 dark:text-brand-300">
                    <span className="px-2 py-0.5 rounded-control-sm bg-brand-600/8 dark:bg-brand-400/10">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 txt-muted font-normal">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>

                  {/* Header */}
                  <h3 className="type-h3 txt-primary group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors duration-base">
                    {post.title}
                  </h3>
                  <p className="type-body-sm txt-secondary mt-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border flex items-center justify-between">
                  <span className="flex items-center gap-1.5 type-caption txt-muted">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-400 uppercase transition-colors"
                  >
                    Read Post
                    <ArrowRight size={14} className="transition-transform duration-base group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
