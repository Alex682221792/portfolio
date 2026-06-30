import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const buildProjectsData = (t: any) => [
  {
    title: t.projects.nubrain,
    subtitle: t.projects.nubrainSub,
    description: t.projects.nubrainDesc,
    status: t.projects.inProduction,
    technologies: ['Flutter', 'NestJS', 'TypeScript', 'PostgreSQL', 'Firebase', 'Claude API', 'WhatsApp Business', 'RAG', 'XML Signing'],
    highlights: [
      t.projects.nubrainH1,
      t.projects.nubrainH2,
      t.projects.nubrainH3,
      t.projects.nubrainH4,
      t.projects.nubrainH5,
      t.projects.nubrainH6,
    ],
    link: 'https://nubrain.app',
    color: 'from-blue-600 to-purple-600',
  },
  {
    title: t.projects.muvin,
    subtitle: t.projects.muvinSub,
    description: t.projects.muvinDesc,
    status: t.projects.inProgress,
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Real-time Geolocation'],
    highlights: [
      t.projects.muvinH1,
      t.projects.muvinH2,
      t.projects.muvinH3,
      t.projects.muvinH4,
    ],
    color: 'from-indigo-600 to-cyan-600',
  },
  {
    title: t.projects.taxi,
    subtitle: t.projects.taxiSub,
    description: t.projects.taxiDesc,
    status: t.projects.deployed,
    technologies: ['Kotlin', 'Swift', 'Firebase', 'Google Maps', 'Coroutines'],
    highlights: [
      t.projects.taxiH1,
      t.projects.taxiH2,
      t.projects.taxiH3,
      t.projects.taxiH4,
    ],
    color: 'from-orange-600 to-red-600',
  },
]

export default function Projects() {
  const { t } = useLanguage()

  const projectsData = buildProjectsData(t)
  const projects = t.projects

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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
            <span className="gradient-text">{projects.title}</span>
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
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card-blur rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-accent text-sm font-semibold">{project.subtitle}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === projects.inProduction
                          ? 'bg-green-500/20 text-green-400'
                          : project.status === projects.inProgress
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">{projects.highlights}</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-semibold"
                        >
                          Visit Project
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className={`bg-gradient-to-br ${project.color} rounded-lg p-8 h-full min-h-[300px] flex flex-col justify-between`}>
                      <div>
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{projects.techStack}</h4>
                        <div className="space-y-2">
                          {project.technologies.map((tech, i) => (
                            <div key={i} className="bg-white/20 rounded px-3 py-2 text-white text-sm font-medium">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
