function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-md">
        <a href="#" className="text-sm font-bold tracking-[0.35em]">
          CLUBCUTZZ
        </a>

        <div className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-neutral-400 md:flex">
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar