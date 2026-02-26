import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Instagram, MapPin } from 'lucide-react'

const goals = [
  'General Fitness & Fat Loss',
  '1-on-1 Personalized Coaching',
  'Group Training',
  'Nutrition Planning',
  'Hyrox Competition Prep',
  'CrossFit Competition Prep',
  'Other',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', goal: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full bg-zinc-900/60 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-lime-400/50 focus:bg-zinc-900 transition-all duration-200'

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-lime-400/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-14"
        >
          <span className="inline-block text-lime-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Ready to <span className="text-gradient-lime">Transform?</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-lg mx-auto">
            Fill out the form below and I'll be in touch within 24 hours to discuss your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info sidebar */}
          <motion.div {...fadeUp(0.05)} className="lg:col-span-2 flex flex-col gap-6">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'mauro@muricefitness.com',
                href: 'mailto:mauro@muricefitness.com',
              },
              {
                icon: Instagram,
                label: 'Instagram',
                value: '@muricefitness',
                href: 'https://instagram.com',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Copenhagen, Denmark',
                href: null,
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-lime-400" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm font-medium hover:text-lime-400 transition-colors mt-0.5 block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Testimonial snippet */}
            <div className="mt-4 bg-zinc-900/60 border border-white/6 rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed italic">
                "Went from zero fitness background to finishing my first Hyrox in under 75 minutes.
                The coaching here is on another level."
              </p>
              <p className="text-zinc-500 text-xs mt-3 font-medium">— Alex R., Hyrox Finisher</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center gap-4 py-16 bg-zinc-900/50 border border-white/6 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                  <Send className="w-7 h-7 text-lime-400" />
                </div>
                <h3 className="font-display font-black text-2xl text-white">Message Sent!</h3>
                <p className="text-zinc-400 max-w-sm text-sm">
                  Thanks for reaching out. I'll review your goals and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-lime-400 text-sm hover:text-lime-300 underline underline-offset-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-900/40 border border-white/6 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-zinc-400 text-xs uppercase tracking-widest font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-zinc-400 text-xs uppercase tracking-widest font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400 text-xs uppercase tracking-widest font-medium">
                    My Goal
                  </label>
                  <select
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Select your primary goal...
                    </option>
                    {goals.map((g) => (
                      <option key={g} value={g} className="bg-zinc-900">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400 text-xs uppercase tracking-widest font-medium">
                    Tell Me More
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your current situation and what you want to achieve..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-4 bg-lime-400 text-black font-bold text-sm rounded-xl hover:bg-lime-300 transition-all duration-200 shadow-lg shadow-lime-400/20 mt-2"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-zinc-600 text-xs text-center">
                  No spam, ever. Your information stays private.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
