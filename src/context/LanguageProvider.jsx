import { useEffect, useState } from 'react'
import LanguageContext from './LanguageContext.jsx'
import translations from './translations.js'

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'hi' : 'en'))
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        text: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
