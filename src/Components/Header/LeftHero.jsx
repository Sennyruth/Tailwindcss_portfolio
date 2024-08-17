
import { useTypewriter,Cursor } from "react-simple-typewriter";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
// import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
// import { LuFigma } from "react-icons/lu";
const LeftHero = () => {
    const [text] = useTypewriter({
        words: ["Software Engineer","FullStack Developer", "FrontEnd Developer","UI/UX Designer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delay: 2000,
      });
  return (
    <div className=" w-1/2 flex flex-col gap-20" >
    <div className="flex flex-col gap-5">
      <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className="text-6xl font-bold text-white">
        {""}Hi, I'm{" "}
        <span className="text-designColor capitalize">Ruth Mutisya</span>
      </h1>
      <h2 className="text-4xl font-bold text-white">
        a <span>{text}.</span>
        <Cursor
        colorBlinking="false"
        cursorStyle="|"
        // cursorBlink="true"
        cursorColor="#ff014f"
        />

      </h2>

      <p className="text-base font-bodyFont leading-6 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis natus accusamus autem ipsam maiores, ducimus voluptatibus pariatur expedita consequuntur reiciendis quos amet quisquam nam recusandae, eos vitae aliquid error.</p>
    </div>
    <div className="flex justify-between gap-20">
      <div>
      <h2 className="text-base uppercase font-titleFont mb-4">FIND ME IN</h2>
      <div className="flex gap-2">
     
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><FaLinkedinIn /></a>
          
        </span>
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><FaFacebookF /></a>
          
        </span>
        {/* <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><FaSquareInstagram /></a>
          
        </span> */}
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><FaTwitter /></a>
          
        </span>
        
      </div>
      </div>
      <div>
      <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILLS IN</h2>
      <div className="flex  gap-3">
     
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><IoLogoHtml5 /></a>
          
        </span>
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><IoLogoCss3 /></a>
          
        </span>
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><AiOutlineJavaScript /></a>
          
        </span>
        <span className="bannerIcon">
          
          <a href="https://www.linkedin.com/in/ruthmutisya/"><SiTailwindcss /></a>
        </span>
        <span className="bannerIcon">
          
          <a href="https://www.linkedin.com/in/ruthmutisya/"><IoLogoReact /></a>
        </span>
        {/* <span className="bannerIcon">
          
          <a href="https://www.linkedin.com/in/ruthmutisya/"><BiLogoPostgresql /></a>
        </span>
        <span className="bannerIcon">
          
          <a href="https://www.linkedin.com/in/ruthmutisya/"><LuFigma /></a>
        </span>  */}
      </div>
      </div>
    </div>
  </div>
  )
}

export default LeftHero
