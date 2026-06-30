import { motion } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
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
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            {t.contact.subtitle}
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
                <h3 className="text-xl font-semibold text-white mb-1">{t.contact.email}</h3>
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
                <h3 className="text-xl font-semibold text-white mb-1">{t.contact.linkedin}</h3>
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
                <h3 className="text-xl font-semibold text-white mb-1">{t.contact.whatsapp}</h3>
                <p className="text-accent hover:text-white transition-colors">{t.contact.chat}</p>
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
                <h3 className="text-xl font-semibold text-white mb-1">{t.contact.github}</h3>
                <p className="text-accent hover:text-white transition-colors">{t.contact.viewRepo}</p>
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
            {t.contact.availability}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/593979011445"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold text-center"
            >
              {t.contact.chat}
            </a>
            <a
              href="mailto:alex.nb.92@gmail.com"
              className="px-8 py-3 border border-purple-500/30 rounded-lg hover:border-purple-500/60 text-white transition-all font-semibold text-center"
            >
              {t.contact.sendEmail}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
