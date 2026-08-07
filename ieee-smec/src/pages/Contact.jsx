import { motion } from 'framer-motion'
import { useState } from 'react'
import { Headset, Handshake, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import MapComponent from '../components/MapComponent'
import contactHeader from '../assets/images/contact-banner.png'

const EASE = [0.22, 0.61, 0.36, 1]
const CONTACT_EMAIL = 'ieee.smec.stb99107@gmail.com'

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email address' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Enter message subject' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return

    setStatus('sending')

    const templateParams = {
      name: formData.name,
      email: formData.email,
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: CONTACT_EMAIL,
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 5000)
      })
      .catch((err) => {
        console.error('FAILED...', err)
        setStatus('error')
        setTimeout(() => setStatus(null), 8000)
      })
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg app-grid-bg transition-colors duration-base ease-brand">
        <PageHero
          eyebrow="Let's Connect"
          title="We're here for you"
          lede="Get in touch with the IEEE SMEC Student Branch. We are always open to questions, collaborations and membership inquiries."
          image={contactHeader}
        />

        <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col gap-6">

          {/* ── Info cards ─────────────────────────────────────────────── */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                Icon: Headset,
                title: 'Quick Support',
                body: 'Need assistance with memberships, events, certifications, or student branch activities? Our team is here to help you with your queries.',
              },
              {
                Icon: Mail,
                title: CONTACT_EMAIL,
                body: 'Drop us an email for general details, partnership proposals, program details, or certifications.',
                featured: true,
              },
              {
                Icon: Handshake,
                title: 'Collaborate With Us',
                body: 'Interested in sponsoring or partnering with our Student Branch? Explore collaboration opportunities for events and initiatives.',
              },
            ].map(({ Icon, title, body, featured }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.45, ease: EASE, delay: idx * 0.08 }}
                className={
                  featured
                    ? 'rounded-card border border-brand-700 bg-brand-600 text-white shadow-e3 p-6 sm:p-7 flex flex-col items-start transition-all duration-base ease-brand hover:shadow-e4 hover:-translate-y-1'
                    : 'card card-interactive p-6 sm:p-7 flex flex-col items-start'
                }
              >
                <span
                  className={`icon-tile w-12 h-12 rounded-pill mb-5 ${
                    featured ? 'bg-white/15 text-white' : 'icon-tile-brand'
                  }`}
                >
                  <Icon size={20} />
                </span>
                <h2
                  className={`font-heading font-bold leading-tight mb-2 w-full ${
                    featured ? 'text-white text-base truncate' : 'type-h3 txt-primary'
                  }`}
                  title={title}
                >
                  {title}
                </h2>
                <p className={`type-body-sm ${featured ? 'text-white/85' : 'txt-secondary'}`}>{body}</p>
              </motion.div>
            ))}
          </section>

          {/* ── Map + form ─────────────────────────────────────────────── */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* Location */}
            <section className="panel panel-pad flex flex-col">
              <div className="section-head mb-8">
                <span className="type-eyebrow txt-muted">Find us</span>
                <h2 className="type-h2 txt-primary">Our Location</h2>
                <p className="section-lede">
                  Find us on campus at St. Martin&rsquo;s Engineering College, Secunderabad, India.
                </p>
              </div>
              <div className="flex-grow">
                <MapComponent />
              </div>
            </section>

            {/* Form */}
            <section className="panel panel-pad flex flex-col">
              <div className="section-head mb-8">
                <span className="type-eyebrow txt-muted">Contact form</span>
                <h2 className="type-h2 txt-primary">Get In Touch</h2>
                <p className="section-lede">
                  Send us a message and we&rsquo;ll get back to you as soon as we can.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="flex flex-col flex-grow gap-5">
                {fields.map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label htmlFor={name} className="field-label">
                      {label}
                    </label>
                    <input
                      id={name}
                      name={name}
                      type={type}
                      required
                      value={formData[name]}
                      onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                      placeholder={placeholder}
                      className="field"
                    />
                  </div>
                ))}

                <div className="flex-grow flex flex-col">
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message details..."
                    className="field resize-none flex-grow min-h-[120px]"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn btn-primary btn-block"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="mt-4 flex items-center justify-center gap-2 type-body-sm font-semibold text-success"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      Message sent successfully! We will get back to you soon.
                    </motion.p>
                  )}

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="mt-4 flex items-start justify-center gap-2 type-body-sm font-semibold text-error text-center"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>
                        Failed to send. Please email us directly at{' '}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="underline txt-brand">
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </span>
                    </motion.p>
                  )}
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
