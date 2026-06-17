function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-500">
        Contact
      </p>

      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        Let’s create the next visual moment.
      </h2>

      <div className="mt-10 flex flex-col gap-4 text-neutral-300">
        <a href="mailto:hello@clubcutzz.com" className="text-2xl hover:text-white">
          hello@clubcutzz.com
        </a>

        <a
          href="https://www.instagram.com/clubcutzz/"
          target="_blank"
          rel="noreferrer"
          className="text-2xl hover:text-white"
        >
          @clubcutzz
        </a>
      </div>
    </section>
  )
}

export default Contact