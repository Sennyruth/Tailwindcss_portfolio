
import contactImg from "../../assets/contact.jpg"
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8 py-5" >
                <img className="w-full h-64 object-cover rounded-lg mb-3" 
                src={contactImg} alt="contactImg" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-white">Ruth Mutisya</h3>
                    <p className="text-lg font-normal text-gray-300">PERN Stack Developer</p>
                    <p className="text-base text-gray-300 tracking-wide"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt magni vitae recusandae rem mollitia? Dolor porro dignissimos a corrupti voluptates.</p>
                <p className="text-base text-gray-300 flex items-center gap-2">phone:<span className="text-lightText">+254794374545</span></p>
                <p className="text-base text-gray-300 flex items-center gap-2">Email:{""}<span className="text-lightText">ruthmmutisya01@gmail.com</span></p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-base uppercase font-titleFont mb-4">find me in</h2>
                    <div className="flex gap-4">
                    <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><FaLinkedinIn /></a>
          
        </span>
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><FaFacebookF /></a>
          
        </span>
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ruthmutisya/"><FaTwitter /></a>
          
        </span>
                    </div>
                </div>
              </div>
  )
}

export default ContactLeft
