import { motion } from 'framer-motion'
import { Dumbbell } from 'lucide-react'

// TikTok SVG icon (not in Lucide)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

// Instagram SVG (custom for reliability)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    Icon: InstagramIcon,
    handle: '@muricefitness',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    Icon: TikTokIcon,
    handle: '@muricefitness',
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-8 mb-14"
        >
          <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
            Follow the <span className="text-gradient-lime">Journey</span>
          </h3>
          <p className="text-zinc-400 max-w-md text-base">
            Daily training content, competition recaps, and nutrition tips — follow along for free
            value every day.
          </p>

          {/* Social cards */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            {socialLinks.map(({ label, href, Icon, handle }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-zinc-900 border border-white/8 rounded-2xl hover:border-lime-400/30 hover:bg-zinc-900/80 transition-all duration-200 group"
              >
                <Icon className="w-5 h-5 text-zinc-300 group-hover:text-lime-400 transition-colors" />
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">{label}</p>
                  <p className="text-zinc-500 text-xs">{handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center group-hover:bg-lime-300 transition-colors">
              <Dumbbell className="w-4 h-4 text-black" strokeWidth={2.5} />
            </div>
            <span className="font-display font-800 text-sm tracking-tight text-white">
              MURICE<span className="text-lime-400">FITNESS</span>
            </span>
          </a>

          <nav className="flex gap-6">
            {['#hero', '#specialties', '#about', '#contact'].map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-zinc-500 hover:text-zinc-300 text-xs uppercase tracking-widest transition-colors"
              >
                {['Home', 'Services', 'About', 'Contact'][i]}
              </a>
            ))}
          </nav>

          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} MuriceFitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
