function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-black">
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_65%,rgba(0,0,0,0.75)_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.55em] text-neutral-300 md:text-sm">
          Montevideo · Uruguay
        </p>

        <h1 className="text-6xl font-black tracking-tight text-white md:text-[10rem]">
  CLUBCUTZZ
</h1>

      <p className="mt-6 text-lg font-medium text-white md:text-2xl">
  The music deserves to be seen.
</p>

<p className="mt-3 max-w-xl text-sm text-neutral-300 md:text-base">
  Cinematic content for electronic music.
</p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:opacity-90"
          >
            Watch Our Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/25 bg-black/20 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
  ↓
</div>
    </section>
  )
}

export default Hero