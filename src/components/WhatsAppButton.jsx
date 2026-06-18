import { useEffect, useState } from "react"

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  const phone = "59899286799" // <-- Tu número
  const message = encodeURIComponent(
    "Hi CLUBCUTZZ! 👋 I’m interested in booking a DJ set recording. Can we talk?"
  )

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={`
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full border border-white/15
        bg-black/70 backdrop-blur-md
        transition-all duration-500
        hover:scale-110 hover:bg-white
        group
        ${isVisible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white transition-colors duration-300 group-hover:fill-black"
      >
        <path d="M16.04 3C8.84 3 3 8.74 3 15.83c0 2.5.73 4.93 2.12 7L3 29l6.37-2.06a13.2 13.2 0 006.67 1.8h.01C23.16 28.74 29 23 29 15.91 29 8.74 23.24 3 16.04 3zm7.62 18.1c-.32.9-1.86 1.74-2.56 1.84-.66.1-1.5.15-2.43-.15-.56-.18-1.28-.42-2.21-.82-3.9-1.67-6.44-5.58-6.64-5.84-.2-.26-1.58-2.08-1.58-3.98 0-1.9 1-2.84 1.36-3.23.36-.4.78-.5 1.04-.5.26 0 .52 0 .74.01.24.01.56-.09.88.68.32.78 1.08 2.68 1.18 2.88.1.2.16.44.03.7-.12.26-.18.42-.36.64-.18.22-.38.48-.54.64-.18.18-.36.38-.16.74.2.36.88 1.44 1.88 2.34 1.3 1.15 2.4 1.5 2.74 1.66.34.16.54.14.74-.08.2-.22.86-1 1.1-1.34.24-.34.48-.28.8-.16.32.12 2.02.94 2.36 1.1.34.16.56.24.64.38.08.14.08.82-.24 1.72z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton