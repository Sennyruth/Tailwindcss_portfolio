import LeftHero from "../Header/LeftHero";
import RightHero from "../Header/RightHero";
const Hero = () => {
  
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center font title-font border-b-[1px] border-b-black"
    >
    <LeftHero/>
     <RightHero/>
      {/* <div className="w-1/2 flex justify-center items-center relative">
      <img 
      className="w-[500px] z-10"
      src={alumni2Img} alt="heroimg" />
      <div className="absolute bottom-0 w-[500] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      
      </div> */}
      <div></div>
    </section>
  );
};

export default Hero;
