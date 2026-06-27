import { motion } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            I'm always open to interesting projects and collaborations.
            <br />
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <a
            href="mailto:alex.nb.92@gmail.com"
            className="card-blur p-8 rounded-xl hover:border-purple-500/40 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                <p className="text-accent hover:text-white transition-colors">alex.nb.92@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/wilson-alexander-nunez-barrera/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-blur p-8 rounded-xl hover:border-purple-500/40 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                <span className="text-white text-lg font-bold">in</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-accent hover:text-white transition-colors">wilson-alexander-nunez-barrera</p>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/593979011445"
            target="_blank"
            rel="noopener noreferrer"
            className="card-blur p-8 rounded-xl hover:border-purple-500/40 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                <MessageSquare className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">WhatsApp</h3>
                <p className="text-accent hover:text-white transition-colors">Chat on WhatsApp</p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-blur p-8 rounded-xl hover:border-purple-500/40 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                <span className="text-white text-lg font-bold">𝌡</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">GitHub</h3>
                <p className="text-accent hover:text-white transition-colors">View my repositories</p>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-blur p-12 rounded-xl text-center"
        >
          <p className="text-gray-300 mb-6">
            Based in <span className="text-accent font-semibold">Ecuador</span> • Available for <span className="text-accent font-semibold">remote</span> work
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/593979011445"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold text-center"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:alex.nb.92@gmail.com"
              className="px-8 py-3 border border-purple-500/30 rounded-lg hover:border-purple-500/60 text-white transition-all font-semibold text-center"
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
