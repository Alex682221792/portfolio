import { motion } from 'framer-motion'

const sideProjects = [
  {
    title: 'Organizer',
    subtitle: 'AI-Powered Task Automation Dashboard',
    description: 'A macOS Flutter app functioning as a Kanban dashboard powered by Claude AI agents. Automates task execution via scheduled tasks, manages task conversations, and stores all data file-based without a database. Demonstrates innovative patterns for human-AI collaboration.',
    status: 'In Development',
    technologies: ['Flutter', 'macOS', 'BLoC', 'Claude AI', 'Scheduled Tasks', 'File System Architecture'],
    highlights: [
      'Advanced BLoC pattern with dependency injection (get_it)',
      'Claude AI agents for automated task execution',
      'File-based task management (no database)',
      'Multi-status Kanban workflow (7 statuses)',
      'Human-AI conversation integration',
      'Demonstrates innovative AI automation patterns',
    ],
    link: 'https://github.com/Alex682221792/organizer-ai',
    color: 'from-violet-600 to-pink-600',
  },
]

export default function SideProjects() {
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
            <span className="gradient-text">Side Projects</span>
          </h2>
          <p className="text-gray-400 mb-2">Experimental work & learning initiatives</p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {sideProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card-blur rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 border border-purple-500/20">
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-accent text-sm font-semibold">{project.subtitle}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-accent mt-1">✨</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-semibold"
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>

                  <div>
                    <div className={`bg-gradient-to-br ${project.color} rounded-lg p-8 h-full min-h-[300px] flex flex-col justify-between`}>
                      <div>
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Tech Stack</h4>
                        <div className="space-y-2">
                          {project.technologies.map((tech, i) => (
                            <div key={i} className="bg-white/20 rounded px-3 py-2 text-white text-sm font-medium">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-white text-xs opacity-75">
                        Currently building & experimenting with innovative patterns
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 card-blur p-8 rounded-xl border border-purple-500/20"
        >
          <p className="text-gray-300 text-center">
            Side projects are my playground for exploring new technologies, AI integration patterns, and innovative architectural approaches. These projects drive continuous learning and often inform the design of production systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
