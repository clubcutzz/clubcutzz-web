import { Link, useParams } from "react-router-dom"
import { works } from "../data/works"

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
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={work.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-neutral-400">
            CLUBCUTZZ Project
          </p>

          <h1 className="text-6xl font-black md:text-[9rem]">
            {work.title}
          </h1>

          <p className="mt-6 text-xl text-neutral-300">
            {work.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-neutral-400">
            {work.description}
          </p>

          <Link
            to="/"
            className="mt-10 rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProjectPage