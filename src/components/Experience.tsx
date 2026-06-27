import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Novacom',
    location: 'Costa Rica',
    position: 'Senior Mobile Developer',
    period: 'March 2023 – Present',
    highlights: [
      'Led iOS development in Android-first environment',
      'Improved app performance reducing load times by 30%',
      'Reduced crashes through memory & threading optimization',
      'Built backend automation workflows reducing manual effort by 85%',
      'Developed Flutter integrations for cross-platform applications',
    ],
    technologies: ['Swift', 'Kotlin', 'Flutter', 'ASP.NET', 'Python', 'Jenkins'],
  },
  {
    company: 'Fisa Group',
    location: 'Quito, Ecuador',
    position: 'Software Development Consultant',
    period: 'March 2021 – February 2023',
    highlights: [
      'Built mobile banking application from scratch',
      'Collaborated with product and design teams on UX/workflows',
      'Improved user experience of existing applications',
      'Owned iOS and Android platform architecture decisions',
      'Integrated with backend services using TypeScript/Node.js',
    ],
    technologies: ['Kotlin', 'Swift', 'Appcelerator', 'Node.js', 'Firebase'],
  },
  {
    company: 'Advance Latam',
    location: 'Quito, Ecuador',
    position: 'Software Developer',
    period: 'June 2019 – March 2021',
    highlights: [
      'Developed taxi ordering and mobile banking applications',
      'Implemented real-time data synchronization using Firebase',
      'Built real-time location tracking with Google Maps API',
      'Worked with background processes for location updates',
      'Implemented Firebase authentication and push notifications',
    ],
    technologies: ['Kotlin', 'Swift', 'Firebase', 'Google Maps API', 'Coroutines'],
  },
  {
    company: 'Kruger Corporation',
    location: 'Quito, Ecuador',
    position: 'Software Developer',
    period: 'June 2018 – March 2019',
    highlights: [
      'Developed Java applications with Spring and Hibernate',
      'Built Angular frontends for web applications',
      'Optimized database migrations with Pentaho',
      'Handled complex data operations in DB2',
    ],
    technologies: ['Java', 'Spring', 'Hibernate', 'Angular', 'DB2'],
  },
]

export default function Experience() {
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
            <span className="gradient-text">Experience</span>
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
