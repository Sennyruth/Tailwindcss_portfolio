import { navlinksdata } from "../../Constants";
// import alumni2Img from "../../assets/alumni2.jpg";
const Header = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center">
      <div >
        <h1>logo</h1>
        {/* <img src={alumni2Img} alt="alumni2" /> */}
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navlinksdata.map(({id,title,link}) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
