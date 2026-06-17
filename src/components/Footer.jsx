function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-black tracking-[0.25em]">
            CLUBCUTZZ
          </h2>

          <p className="mt-4 text-sm text-neutral-500">
            The music deserves to be seen.
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-600">
            Built in Montevideo. Shot everywhere.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-sm text-neutral-500 md:items-end">
          <a
            href="https://www.instagram.com/clubcutzz/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Instagram → @clubcutzz
          </a>

          <p>Montevideo, Uruguay</p>

          <p>© 2026 CLUBCUTZZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer