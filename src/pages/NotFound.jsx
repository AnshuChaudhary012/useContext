import { NavLink } from 'react-router-dom'
import useLanguage from '../context/useLanguage.js'

function NotFound() {
  const { text } = useLanguage()

  return (
    <section className="mx-auto max-w-3xl py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        {text.notFound.title}
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">{text.notFound.description}</p>
      <NavLink
        to="/"
        className="mt-8 inline-flex rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {text.notFound.backHome}
      </NavLink>
    </section>
  )
}

export default NotFound
