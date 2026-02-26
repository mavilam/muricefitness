import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-lime-400/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-lime-400/4 blur-[100px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-semibold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" fill="currentColor" />
                Personal Training &amp; Performance Coaching
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white"
            >
              Elevate Your
              <br />
              <span className="text-gradient-lime">Performance.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...fadeUp(0.3)} className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Science-backed training, precision nutrition, and elite competition prep — built
              around <em className="text-zinc-200 not-italic font-medium">your</em> goals. Whether
              you're just starting or chasing a Hyrox podium, we get you there.
            </motion.p>

            {/* Stats row */}
            <motion.div {...fadeUp(0.35)} className="flex gap-8 pt-2">
              {[
                { value: '200+', label: 'Athletes coached' },
                { value: '5★', label: 'Avg. rating' },
                { value: '8yr', label: 'Experience' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-black text-2xl text-white">{s.value}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-lime-400 text-black font-bold text-sm rounded-full hover:bg-lime-300 transition-all duration-200 shadow-xl shadow-lime-400/25 glow-lime"
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#specialties"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/10 text-white font-semibold text-sm rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-lime-400/15 animate-pulse" />
              <div className="absolute w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border border-lime-400/8" />
            </div>

            {/* Image container */}
            <div className="relative w-72 h-[420px] sm:w-80 sm:h-[480px] rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
              <img
                src={`${import.meta.env.BASE_URL}profile-coach.jpg`}
                alt="Personal Trainer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.classList.add('bg-zinc-900', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-4')
                    parent.innerHTML = `
                      <div class="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                      </div>
                      <p class="text-zinc-500 text-sm text-center px-6">Add your photo to<br/><code class="text-lime-400 text-xs">public/profile-coach.jpg</code></p>
                    `
                  }
                }}
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Name tag */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display font-black text-white text-lg leading-tight">
                  Mauro Alonso Rey
                </p>
                <p className="text-lime-400 text-xs font-semibold uppercase tracking-widest mt-0.5">
                  Certified Performance Coach
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 sm:bottom-4 -left-4 sm:-left-10 bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Competition Prep</p>
              <p className="text-white font-bold text-sm mt-0.5">Hyrox &amp; CrossFit</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  )
}
