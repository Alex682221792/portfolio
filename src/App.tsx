import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import SideProjects from './components/SideProjects'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'
import Languages from './components/Languages'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const { t } = useLanguage()

  return (
    <div className="bg-gradient-dark min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <div id="home">
          <Hero setActiveSection={setActiveSection} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="sideprojects">
          <SideProjects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="softskills">
          <SoftSkills />
        </div>
        <div id="languages">
          <Languages />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="border-t border-purple-500/10 py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
