import { navlinksdata } from "../../Constants";
import { Link } from "react-scroll";
import logo from "../../assets/alumni2.jpg"
const Header = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray 600">
      <div className="ml-10 flex flex-col items-center gap-2" >
        <img className="w-12 h-12 rounded-full object-cover" src={logo} alt="" />
        <h2 className="uppercase">Software enginner</h2>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navlinksdata.map(({id,title,link}) => (
            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={id}>
          <Link
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
