import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import CollaborationsMarquee from "./components/CollaborationsMarquee.jsx"
import FeaturedWork from "./components/FeaturedWork.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"

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