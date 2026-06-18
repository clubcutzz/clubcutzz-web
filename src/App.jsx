import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import CollaborationsMarquee from "./components/CollaborationsMarquee.jsx"
import FeaturedWork from "./components/FeaturedWork.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

import ProjectPage from "./pages/ProjectPage.jsx"

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
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:slug" element={<ProjectPage />} />
    </Routes>
  )
}

export default App