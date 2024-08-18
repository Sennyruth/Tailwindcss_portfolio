import { FaArrowRight } from "react-icons/fa6";

const Card = ({title,des,icon}) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group ">
<div className="h-72 overflow-y-hidden">
<div className="flex h-full flex-col gap-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
    <span className="text-5xl text-designColor">{icon}</span>
    <div className="flex flex-col gap-6">
    <h2 className="text-2xl font-titleFont font-bold text-gray-300">{title}</h2>
    </div>
    <p className="base">{des}</p>
    <span className=" text-designColor"><FaArrowRight /></span>

</div>
</div>
    </div>
  )
}

export default Card
