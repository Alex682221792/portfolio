import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const languagesData = [
  {
    name_en: 'Spanish',
    name_es: 'Español',
    level_en: 'Native',
    level_es: 'Nativo',
    code: 'C2',
    proficiency: 100,
    desc_en: 'Native speaker',
    desc_es: 'Hablante nativo',
  },
  {
    name_en: 'English',
    name_es: 'Inglés',
    level_en: 'Professional Working Proficiency',
    level_es: 'Competencia Profesional Trabajadora',
    code: 'B2',
    proficiency: 80,
    desc_en: 'Upper-intermediate level',
    desc_es: 'Nivel intermedio alto',
  },
]

export default function Languages() {
  const { t, language } = useLanguage()
  const languages = languagesData.map(lang => ({
    name: language === 'en' ? lang.name_en : lang.name_es,
    level: language === 'en' ? lang.level_en : lang.level_es,
    code: lang.code,
    proficiency: lang.proficiency,
    description: language === 'en' ? lang.desc_en : lang.desc_es,
  }))
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">{t.languages.title}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-blur p-8 rounded-xl hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{lang.name}</h3>
                  <p className="text-accent font-semibold">{lang.level}</p>
                  <p className="text-gray-400 text-sm mt-1">{lang.description}</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary">
                    <span className="text-white font-bold text-lg">{lang.code}</span>
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-gradient-primary h-2 rounded-full"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{lang.proficiency}% {t.languages.proficiency}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 card-blur p-8 rounded-xl text-center border border-accent/20"
        >
          <p className="text-gray-300">
            {t.languages.closing}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
