import { navlinksdata } from "../../Constants";
import { Link } from "react-scroll";
// import alumni2Img from "../../assets/alumni2.jpg";
const Header = () => {
  return (
    <div className="w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray 600">
      <div >
        <h1>logo</h1>
        {/* <img src={alumni2Img} alt="alumni2" /> */}
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
