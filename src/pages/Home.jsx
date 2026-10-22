import { NavLink } from 'react-router-dom'
import useLanguage from '../context/useLanguage.js'

function Home() {
  const { text } = useLanguage()

  return (
    <section className="mx-auto max-w-3xl py-20 text-center sm:py-28">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
        {text.home.eyebrow}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
        {text.home.title}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        {text.home.description}
      </p>
      <NavLink
        to="/about"
        className="mt-8 inline-flex rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {text.home.learnMore}
      </NavLink>
    </section>
  )
}

export default Home
