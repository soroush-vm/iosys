import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import Services from "@/components/Services/Services"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App