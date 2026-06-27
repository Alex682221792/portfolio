import { motion } from 'framer-motion'

export default function About() {
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
            <span className="gradient-text">About Me</span>
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
            <p>
              I'm a Senior Software Engineer from Ecuador with 9+ years of experience building scalable mobile and backend-integrated systems. My journey spans across fintech, transportation, and real-time platforms.
            </p>
            <p>
              I specialize in creating offline-first experiences, real-time data synchronization, and cross-platform architectures. Whether it's Flutter, Swift, or Kotlin, I focus on system reliability, performance optimization, and secure data handling.
            </p>
            <p>
              Beyond code, I'm passionate about architecture decisions, mentoring teams, and collaborating across product and design to deliver features that matter. I actively leverage AI tools to accelerate development while maintaining code quality and architectural integrity.
            </p>
            <p>
              Currently, I'm building <span className="text-accent font-semibold">NuBrain</span> (AI-powered e-invoicing platform for Ecuador in production) and <span className="text-accent font-semibold">Muvin</span> (a transportation solution for Ecuador in progress).
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
              <h3 className="text-xl font-semibold text-white mb-4">Key Strengths</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Cross-platform mobile development (iOS & Android)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Real-time data synchronization & Firebase expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Offline-first application architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Performance optimization & system reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>End-to-end feature delivery & ownership</span>
                </li>
              </ul>
            </div>

            <div className="card-blur p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-accent">9+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">15+</p>
                  <p className="text-gray-400 text-sm">Technologies</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">30%</p>
                  <p className="text-gray-400 text-sm">Performance Improvement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">85%</p>
                  <p className="text-gray-400 text-sm">Automation Gains</p>
                </div>
              </div>
              <a
                href="/Alexander Núñez - CV - May2026.pdf"
                download
                className="block w-full text-center px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg font-semibold transition-colors"
              >
                📄 Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
