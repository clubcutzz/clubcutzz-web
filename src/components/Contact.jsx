function Contact() {
  return (
 <section
  id="contact"
  className="bg-black px-6 py-24 text-white"
>

      <h2 className="text-5xl font-black text-white">
  Let's create the next visual moment.
</h2>

      <div className="mt-10 flex flex-col gap-4 text-neutral-300">
        <a href="mailto:hello@clubcutzz.com" className="text-2xl hover:text-white">
          bookings@clubcutzz.com
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