import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const buildSkillsData = (t: any) => [
  {
    category: t.skills.mobile,
    skills: t.skills.mobileSkills,
  },
  {
    category: t.skills.architecture,
    skills: t.skills.archSkills,
  },
  {
    category: t.skills.backend,
    skills: t.skills.backendSkills,
  },
  {
    category: t.skills.cloud,
    skills: t.skills.cloudSkills,
  },
  {
    category: t.skills.databases,
    skills: t.skills.dbSkills,
  },
  {
    category: t.skills.testing,
    skills: t.skills.testingSkills,
  },
]

export default function Skills() {
  const { t } = useLanguage()
  const skillCategories = buildSkillsData(t)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-blur p-6 rounded-xl hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: string, i: number) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="card-blur p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-accent mb-2">9+</p>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div className="card-blur p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-accent mb-2">15+</p>
            <p className="text-gray-400">{t.skills.count}</p>
          </div>
          <div className="card-blur p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-accent mb-2">50+</p>
            <p className="text-gray-400">Projects Delivered</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
