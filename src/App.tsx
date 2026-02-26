import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
