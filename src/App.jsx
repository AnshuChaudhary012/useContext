import { NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import useLanguage from './context/useLanguage.js'
import useTheme from './context/useTheme.js'

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
  }`

function App() {
  const { language, toggleLanguage, text } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-800">
        <nav
          aria-label={text.nav.ariaLabel}
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        >
          <NavLink
            to="/"
            className="text-lg font-bold tracking-tight text-slate-950 dark:text-white"
          >
            useContext
          </NavLink>

          <div className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClass}>
              {text.nav.home}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {text.nav.about}
            </NavLink>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              aria-pressed={theme === 'dark'}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={text.nav.changeLanguage}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
