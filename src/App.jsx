import Header from "./Components/Header/Header"
import Features from "./Components/Features/Features"
import Hero from "./Components/Hero/Hero"

function App() {
  return (
    <>
     <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
      <Header />
      <Hero />
      <Features />
      </div>
      
      </div> 
      
    </>
  )
}
export default App
