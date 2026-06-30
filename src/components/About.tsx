import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed"
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>
              {t.about.p4.split('NuBrain').map((part, i) => (
                i === 0 ? part : (
                  <span key={i}>
                    <span className="text-accent font-semibold">NuBrain</span>
                    {part}
                  </span>
                )
              ))}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-blur p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">{t.about.strengths}</h3>
              <ul className="space-y-3 text-gray-300">
                {[t.about.s1, t.about.s2, t.about.s3, t.about.s4, t.about.s5].map((strength, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-blur p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">{t.about.byNumbers}</h3>
              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-accent">9+</p>
                  <p className="text-gray-400 text-sm">{t.about.yearsExp}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">15+</p>
                  <p className="text-gray-400 text-sm">{t.about.technologies}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">30%</p>
                  <p className="text-gray-400 text-sm">{t.about.perfImprovement}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">85%</p>
                  <p className="text-gray-400 text-sm">{t.about.automationGains}</p>
                </div>
              </div>
              <a
                href="/Alexander Núñez - CV - May2026.pdf"
                download
                className="block w-full text-center px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg font-semibold transition-colors"
              >
                {t.about.downloadCv}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
