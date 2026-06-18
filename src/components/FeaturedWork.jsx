import { works } from "../data/works"
import { Link } from "react-router-dom"
import TransitionLink from "./TransitionLink"

function FeaturedWork() {
  return (
    <section
      id="work"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.5em] text-neutral-500">
          Selected Projects
        </p>

        <h2 className="mb-16 text-center text-5xl font-black">
          Featured Work
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {works.map((work) => (
           <article
  key={work.title}
  className="group cursor-pointer"
>
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">

    <video
      className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={work.video} type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-black/35 transition-opacity duration-500 group-hover:opacity-10" />

    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">
      Live Session
    </div>

    <div className="absolute bottom-6 left-6">
      <h3 className="text-3xl font-bold text-white">
        {work.title}
      </h3>

      <p className="mt-1 text-sm text-neutral-300">
        {work.subtitle}
      </p>

      <TransitionLink
  to={`/work/${work.slug}`}
  className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur transition hover:bg-white hover:text-black"
>
  View Project →
</TransitionLink>
    </div>

  </div>
</article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork