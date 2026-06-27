import { motion } from 'framer-motion'

const languages = [
  {
    name: 'Spanish',
    level: 'Native',
    code: 'C2',
    proficiency: 100,
    description: 'Native speaker',
  },
  {
    name: 'English',
    level: 'Professional Working Proficiency',
    code: 'B2',
    proficiency: 80,
    description: 'Upper-intermediate level',
  },
]

export default function Languages() {
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
            <span className="gradient-text">Languages</span>
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
              <p className="text-gray-400 text-sm mt-2">{lang.proficiency}% Proficiency</p>
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
            Available for <span className="text-accent font-semibold">international remote work</span>. Comfortable communicating with global teams in English and conducting business in Spanish.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
