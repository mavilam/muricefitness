import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const credentials = [
  'NASM Certified Personal Trainer (CPT)',
  'CrossFit Level 2 Trainer (CF-L2)',
  'Hyrox Official Training Partner',
  'Precision Nutrition Level 1 Coach',
  'Functional Movement Screen (FMS) Specialist',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: 'easeOut' as const, delay },
})

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-zinc-950">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            {/* Background glow */}
            <div className="absolute -inset-4 bg-lime-400/5 rounded-3xl blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/6">
              {/* Quote card */}
              <div className="p-8 pb-0">
                <div className="bg-black/40 rounded-2xl p-6 border border-white/6">
                  <p className="text-white font-display font-black text-2xl leading-snug">
                    "I don't just train bodies —
                    <br />
                    <span className="text-lime-400">I engineer champions.</span>"
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-white/10">
                      <img
                        src={`${import.meta.env.BASE_URL}profile-coach.jpg`}
                        alt="Coach"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Mauro Alonso Rey</p>
                      <p className="text-zinc-500 text-xs">Performance Coach</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-px bg-white/5 mt-6">
                {[
                  { value: '200+', label: 'Clients' },
                  { value: '6', label: 'Certifications' },
                  { value: '8yr', label: 'Experience' },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-900 py-5 text-center">
                    <p className="font-display font-black text-2xl text-lime-400">{s.value}</p>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <motion.span
              {...fadeUp(0)}
              className="inline-block text-lime-400 text-xs font-bold uppercase tracking-[0.2em]"
            >
              My Story
            </motion.span>

            <motion.h2
              {...fadeUp(0.05)}
              className="font-display font-black text-4xl sm:text-5xl text-white leading-tight tracking-tight"
            >
              Built From <br />
              <span className="text-gradient-lime">Sweat & Science</span>
            </motion.h2>

            <motion.p {...fadeUp(0.1)} className="text-zinc-400 leading-relaxed text-base">
              After 8 years on the competition floor and in the coaching trenches, I've learned one
              thing: <span className="text-white font-medium">results don't happen by accident</span>
              . They're engineered — rep by rep, meal by meal, mindset shift by mindset shift.
            </motion.p>

            <motion.p {...fadeUp(0.15)} className="text-zinc-400 leading-relaxed text-base">
              I started competing in CrossFit in 2017 and discovered Hyrox in 2020. That experience
              shaped how I coach — with the intensity of an athlete and the precision of a
              practitioner. Every program I write is evidence-based, sustainable, and built around
              real life.
            </motion.p>

            {/* Credentials */}
            <motion.ul {...fadeUp(0.2)} className="flex flex-col gap-3 mt-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-lime-400 flex-shrink-0" strokeWidth={2} />
                  <span className="text-zinc-300 text-sm">{c}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUp(0.25)} className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-lime-400 text-black font-bold text-sm rounded-full hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20"
              >
                Work With Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
