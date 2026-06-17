import works from "../data/works"

function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-500">
        Featured Sessions
      </p>

      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        Capturing electronic culture, frame by frame.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {works.map((item) => (
          <article
            key={item.title}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition-all duration-500 hover:-translate-y-1 hover:border-white/30"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute left-5 top-5 flex gap-2">
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                DJ SET
              </span>

              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                MULTICAM
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                CLUBCUTZZ
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-400">
                {item.meta}
              </p>

              <div className="mt-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm text-white">
                  View Project →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork