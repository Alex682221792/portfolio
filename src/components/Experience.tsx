import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const buildExperiencesData = (t: any) => [
  {
    company: t.experience.novacom,
    location: t.experience.costaRica,
    position: t.experience.seniorMobile,
    period: t.experience.novacomPeriod,
    highlights: [
      t.experience.novacomH1,
      t.experience.novacomH2,
      t.experience.novacomH3,
      t.experience.novacomH4,
      t.experience.novacomH5,
    ],
    technologies: ['Swift', 'Kotlin', 'Flutter', 'ASP.NET', 'Python', 'Jenkins'],
  },
  {
    company: t.experience.fisa,
    location: t.experience.quito,
    position: t.experience.consultant,
    period: t.experience.fisaPeriod,
    highlights: [
      t.experience.fisaH1,
      t.experience.fisaH2,
      t.experience.fisaH3,
      t.experience.fisaH4,
      t.experience.fisaH5,
    ],
    technologies: ['Kotlin', 'Swift', 'Appcelerator', 'Node.js', 'Firebase'],
  },
  {
    company: t.experience.advance,
    location: t.experience.quito,
    position: t.experience.developer,
    period: t.experience.advancePeriod,
    highlights: [
      t.experience.advanceH1,
      t.experience.advanceH2,
      t.experience.advanceH3,
      t.experience.advanceH4,
      t.experience.advanceH5,
    ],
    technologies: ['Kotlin', 'Swift', 'Firebase', 'Google Maps API', 'Coroutines'],
  },
  {
    company: t.experience.kruger,
    location: t.experience.quito,
    position: t.experience.developer,
    period: t.experience.krugerPeriod,
    highlights: [
      t.experience.krugerH1,
      t.experience.krugerH2,
      t.experience.krugerH3,
      t.experience.krugerH4,
    ],
    technologies: ['Java', 'Spring', 'Hibernate', 'Angular', 'DB2'],
  },
]

export default function Experience() {
  const { t } = useLanguage()

  const experiences = buildExperiencesData(t)

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
            <span className="gradient-text">{t.experience.title}</span>
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
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-8 border-l border-purple-500/30 hover:border-purple-500/60 transition-all"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-gray-900"></div>

              <div className="card-blur p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className="text-accent font-semibold">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
