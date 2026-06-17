import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CollaborationsMarquee from "./components/CollaborationsMarquee"
import FeaturedWork from "./components/FeaturedWork"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <CollaborationsMarquee />
      <FeaturedWork />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App