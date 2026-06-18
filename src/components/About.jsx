function About() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-black px-6 py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img
            src="/images/founders.jpg"
            alt="Founders of CLUBCUTZZ"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white text-neutral-500">
            About
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            We don't just film DJ sets.
            <br />
            We document electronic culture.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
            Founded in Montevideo, CLUBCUTZZ is an audiovisual studio dedicated
            to creating cinematic content for DJs, events and electronic music
            brands. Every frame is designed to capture the energy, atmosphere
            and emotion of the moment.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
              DJ Sets
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
              Multicam
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
              Photography
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
              Creative Direction
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About