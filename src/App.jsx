import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CollaborationsMarquee from "./components/CollaborationsMarquee"
import FeaturedWork from "./components/FeaturedWork"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectPage from "./pages/ProjectPage"
import Loader from "./components/Loader"
import ScrollToTop from "./components/ScrollToTop"

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CollaborationsMarquee />
      <FeaturedWork />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
<>
  <ScrollToTop />

  <AnimatePresence mode="wait">
    {loading && <Loader key="loader" />}
  </AnimatePresence>

  {!loading && (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:slug" element={<ProjectPage />} />
    </Routes>
  )}
</>
  )
}

export default App