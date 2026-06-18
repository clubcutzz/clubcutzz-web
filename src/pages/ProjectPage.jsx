import { Link, useParams } from "react-router-dom"
import { works } from "../data/works"
import BackTransitionLink from "../components/BackTransitionLink"

function ProjectPage() {
  const { slug } = useParams()
  const work = works.find((item) => item.slug === slug)

  if (!work) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link to="/" className="mt-6 inline-block text-neutral-400 hover:text-white">
            ← Back home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={work.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/90" />

      <BackTransitionLink
  to="/"
  className="absolute left-6 top-6 z-20 rounded-full border border-white/20 bg-black/30 px-5 py-2 text-sm text-white backdrop-blur transition hover:bg-white hover:text-black"
>
  ← Back
</BackTransitionLink>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-neutral-400">
            CLUBCUTZZ Session
          </p>

          <h1 className="text-6xl font-black md:text-[9rem]">
            {work.title}
          </h1>

          <p className="mt-6 text-xl text-neutral-200">
            {work.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-neutral-400">
            {work.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-500">
          Project Details
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-neutral-500">Format</p>
            <p className="mt-2 text-xl">Multicam DJ Content</p>
          </div>

          <div>
            <p className="text-neutral-500">Location</p>
            <p className="mt-2 text-xl">Montevideo, Uruguay</p>
          </div>

          <div>
            <p className="text-neutral-500">Studio</p>
            <p className="mt-2 text-xl">CLUBCUTZZ</p>
          </div>
        </div>
      </section>
      {work.drops && work.drops.length > 0 && (
  <section className="mx-auto max-w-7xl px-6 pb-28">
    <div className="mb-12">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-500">
        Selected Drops
      </p>

      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
        Three moments from the night.
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {work.drops.map((drop) => (
        <article
          key={drop.title}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
        >
          <video
            className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-105"
            controls
            playsInline
          >
            <source src={drop.video} type="video/mp4" />
          </video>

          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              CLUBCUTZZ
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {drop.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  </section>
)}

    </main>
  )
}

export default ProjectPage