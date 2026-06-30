import React, { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (typeof translations)['en']
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'es' : 'en'))
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
