import { FaArrowRight } from "react-icons/fa6";

const Card = ({ title, des, icon }) => {
  return (
    <div 
      className="relative w-full px-12 h-80 py-10 rounded-lg flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300 shadow-md group-hover:shadow-shadowOne transition-shadow duration-300" 
    >
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-5xl text-designColor">{icon}</span>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-designColor text-2xl">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Card;
