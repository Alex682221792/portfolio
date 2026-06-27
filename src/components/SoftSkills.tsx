import { motion } from 'framer-motion'

const softSkillsCategories = [
  {
    category: 'Communication',
    skills: ['Clear communication', 'Technical communication', 'Stakeholder communication'],
  },
  {
    category: 'Collaboration & Leadership',
    skills: ['Cross-functional collaboration', 'Mentorship', 'Ownership'],
  },
  {
    category: 'Problem-Solving',
    skills: ['Problem-solving', 'Analytical thinking', 'Root cause analysis', 'Decision-making'],
  },
  {
    category: 'Growth & Adaptability',
    skills: ['Continuous learning', 'Adaptability'],
  },
]

export default function SoftSkills() {
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
            <span className="gradient-text">Soft Skills</span>
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
          {softSkillsCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-blur p-6 rounded-xl hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg mt-1">✓</span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
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
          className="mt-12 card-blur p-8 rounded-xl text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Experienced in collaborating with product, design, and engineering teams to deliver complex features end-to-end in Agile remote environments.
            <span className="text-accent font-semibold"> Comfortable balancing architecture quality, delivery speed, and operational excellence.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
