function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
           <video
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src="https://pub-9ed42f7fce6c47ceb394ecb509f1d6ee.r2.dev/hero.mp4"
    type="video/mp4"
  />
</video>
      

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-neutral-400 md:text-sm">
          Montevideo · Uruguay
        </p>

        <h1 className="text-7xl font-black tracking-tight md:text-[10rem]">
  CLUBCUTZZ
</h1>

        <p className="mt-6 text-lg text-neutral-200 md:text-2xl">
          The music deserves to be seen.
        </p>

        <p className="mt-3 text-sm text-neutral-400 md:text-base">
          Cinematic content for electronic music.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-80"
          >
            Watch Our Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
