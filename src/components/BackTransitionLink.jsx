import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

function BackTransitionLink({ to = "/", children, className }) {
  const [transitioning, setTransitioning] = useState(false)
  const navigate = useNavigate()

  function handleClick(event) {
    event.preventDefault()
    setTransitioning(true)

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      navigate(to)
    }, 700)
  }

  return (
    <>
      {transitioning && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />
      )}

      <a href={to} onClick={handleClick} className={className}>
        {children}
      </a>
    </>
  )
}

export default BackTransitionLink