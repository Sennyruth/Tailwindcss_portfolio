
import alumni2Img from "../../assets/alumni2.jpg"
const RightHero = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img 
      className="w-[500px] z-10"
      src={alumni2Img} alt="heroimg" />
      <div className="absolute bottom-0 w-[500] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      
      </div>
  )
}

export default RightHero
