import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'sideprojects', label: t.nav.sideProjects },
    { id: 'skills', label: t.nav.skills },
    { id: 'softskills', label: t.nav.softSkills },
    { id: 'languages', label: t.nav.languages },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-dark/80 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold gradient-text">
            AN
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded border border-purple-500/30 hover:border-purple-500/60 text-gray-400 hover:text-white text-sm font-medium transition-colors"
              title="Toggle language"
            >
              {language === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                className="block px-4 py-2 rounded hover:bg-purple-500/10 text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage()
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-2 rounded hover:bg-purple-500/10 text-gray-400 hover:text-white transition-colors"
            >
              {language === 'en' ? '🇪🇸 Español' : '🇬🇧 English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
