import Header from "./Components/Header/Header"
import Features from "./Components/Features/Features"
import Hero from "./Components/Hero/Hero"
import Projects from "./Components/Projects/Projects"
import Resume from "./Components/Resume/Resume"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import FooterBottom from "./Components/Footer/FooterBottom"
function App() {
  return (
    <>
     <div className="w-full h-auto bg-bodyColor text-lightText">
      <Header />
      <div className="max-w-screen-2xl mx-auto px-16">
      
      <Hero />
      <Features />
      <Projects />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer/>
      <FooterBottom/>


      
      </div>
      </div> 
      
    </>
  )
}
export default App
