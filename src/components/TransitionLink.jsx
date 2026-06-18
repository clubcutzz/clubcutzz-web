import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PageTransition from "./PageTransition"

function TransitionLink({ to, children, className }) {
  const [transitioning, setTransitioning] = useState(false)
  const navigate = useNavigate()

  function handleClick(event) {
    event.preventDefault()
    setTransitioning(true)

    setTimeout(() => {
      window.scrollTo({
  top: 0,
  left: 0,
  behavior: "instant",
})

      navigate(to)
    }, 1400)
  }

  return (
    <>
      {transitioning && <PageTransition />}

      <a href={to} onClick={handleClick} className={className}>
        {children}
      </a>
    </>
  )
}

export default TransitionLink