import { MapPin } from 'lucide-react'

const MAPS_URL =
  "https://www.google.com/maps/place/St.Martin's+Engineering+College/@17.541465,78.474495,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8ff57a807d8d:0x9922a435110db323!8m2!3d17.541465!4d78.474495!16s%2Fm%2F07k5bnh"

const details = [
  { label: 'Location', value: 'Hyderabad, Telangana', meta: 'Campus-wide Student Organization' },
  { label: 'Coordinates', value: '17.541465° N, 78.474495° E', meta: 'IEEE Student Branch – SMEC' },
]

export default function MapComponent() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="media-frame shadow-e1 flex-grow min-h-[280px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.783949186748!2d78.47249512346822!3d17.541465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ff57a807d8d:0x9922a435110db323!2sSt.%20Martin%27s%20Engineering%20College!5e0!3m2!1sen!2sin!4v1673519250000"
          title="St. Martin's Engineering College Location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>

      <div className="rounded-card border border-light-border dark:border-dark-border bg-light-surface-alt dark:bg-dark-surface-alt p-5 sm:p-6">
        <h3 className="type-h3 txt-primary mb-5">St. Martin&rsquo;s Engineering College</h3>

        <dl className="grid sm:grid-cols-2 gap-5 mb-6">
          {details.map(({ label, value, meta }) => (
            <div key={label}>
              <dt className="type-eyebrow txt-muted mb-2">{label}</dt>
              <dd className="type-body font-semibold txt-primary">{value}</dd>
              <dd className="type-caption txt-brand mt-0.5">{meta}</dd>
            </div>
          ))}
        </dl>

        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
          <MapPin className="w-4 h-4" />
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}
