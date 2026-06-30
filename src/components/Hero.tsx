import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{t.hero.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              onClick={() => setActiveSection('projects')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold group"
            >
              {t.hero.viewWork}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={() => setActiveSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 rounded-lg hover:border-purple-500/60 text-white transition-all font-semibold"
            >
              {t.hero.getInTouch}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 justify-center text-gray-400"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/wilson-alexander-nunez-barrera/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="mailto:alex.nb.92@gmail.com"
              className="hover:text-accent transition-colors text-sm font-semibold"
            >
              Email
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
