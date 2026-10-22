import useLanguage from '../context/useLanguage.js'

function About() {
  const { text } = useLanguage()

  return (
    <section className="mx-auto max-w-3xl py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
        {text.about.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {text.about.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{text.about.description}</p>
    </section>
  )
}

export default About
