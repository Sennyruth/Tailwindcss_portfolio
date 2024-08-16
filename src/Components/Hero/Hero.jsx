import { useTypewriter,Cursor } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer","FullStack Developer", "FrontEnd Developer","UI/UX Designer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delay: 2000,
  });
  return (
    <section
      id="home"
      className="w-full py-20 flex items-center font title-font border-b-[1px] border-b-black"
    >
      <div className="w-1/2 flex flex-col gap-20" >
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            {""}Hi, I'm{" "}
            <span className="text-designColor capitalize">Ruth Mutisya</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
            colorBlinking="false"
            cursorStyle="|"
            cursorBlink="true"
            cursorColor="#ff014f"
            />

          </h2>

          <p className="text-base font-bodyFont leading-6 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis natus accusamus autem ipsam maiores, ducimus voluptatibus pariatur expedita consequuntur reiciendis quos amet quisquam nam recusandae, eos vitae aliquid error.</p>
        </div>
        <div className="text-base uppercase font-titleFont mb-4">
          <h2>FIND ME IN</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/ruthmutisya/"><FaLinkedin /></a>
              
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/ruthmutisya/"><FaFacebookSquare /></a>
              
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/ruthmutisya/"><FaSquareInstagram /></a>
              
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/ruthmutisya/"><FaSquareXTwitter /></a>
              
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
      <div></div>
    </section>
  );
};

export default Hero;
