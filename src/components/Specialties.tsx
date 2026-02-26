import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { UserCheck, Users, Apple, Trophy } from 'lucide-react'

const cards = [
  {
    icon: UserCheck,
    title: '1-on-1 Personalized Coaching',
    description:
      'Fully individualized programming built around your body, schedule, and goals. Weekly check-ins, form analysis, and real-time adjustments — coaching that evolves with you.',
    accent: 'lime',
    tag: 'Most Popular',
  },
  {
    icon: Users,
    title: 'Group Training Sessions',
    description:
      'High-energy group sessions that blend accountability, competition, and community. Train hard alongside like-minded athletes without sacrificing structure.',
    accent: 'lime',
    tag: null,
  },
  {
    icon: Apple,
    title: 'Integrated Nutrition Planning',
    description:
      'Fuel your performance with macro-optimized meal plans tailored to your training load. No crash diets — sustainable protocols that power real results.',
    accent: 'lime',
    tag: null,
  },
  {
    icon: Trophy,
    title: 'Competition Prep',
    description:
      'Specialized periodization for Hyrox and CrossFit athletes. Peaking protocols, race-day strategy, and benchmark testing to put you on the podium.',
    accent: 'lime',
    tag: 'Hyrox & CrossFit',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
}

export default function Specialties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="specialties" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      {/* Faint separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block text-lime-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            What I Offer
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Specialties Built for <br className="hidden sm:block" />
            <span className="text-gradient-lime">Peak Performance</span>
          </h2>
          <p className="mt-5 text-zinc-400 max-w-xl mx-auto text-lg">
            Every service is designed with one goal in mind: your transformation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="group relative bg-zinc-900/60 border border-white/6 rounded-2xl p-7 card-hover hover:border-lime-400/30 hover:bg-zinc-900/90 transition-all duration-300"
              >
                {/* Tag */}
                {card.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-lime-400/15 text-lime-400 border border-lime-400/20 px-2.5 py-1 rounded-full">
                    {card.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/15 flex items-center justify-center mb-5 group-hover:bg-lime-400/20 transition-colors">
                  <Icon className="w-6 h-6 text-lime-400" strokeWidth={1.75} />
                </div>

                <h3 className="font-display font-bold text-white text-lg leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.description}</p>

                {/* Hover bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400/0 via-lime-400/60 to-lime-400/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
