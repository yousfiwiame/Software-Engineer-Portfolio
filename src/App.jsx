import ScrollAnimation from "./hooks/scrollAnimation"
import Navbar from "./components/Navbar"
import About from "./pages/about"
import Home from "./pages"
import Work from "./pages/work"
import Contact from "./pages/contact"
import Footer from "./pages/footer"
import { LanguageProvider } from "./context/LanguageContext"
import LanguageToggle from "./context/LanguageToggle"
function App() {
  ScrollAnimation();
  return (
    <LanguageProvider>
      <div className="App">

        <LanguageToggle />

        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />

      </div>
    </LanguageProvider>

  )
}
export default App
