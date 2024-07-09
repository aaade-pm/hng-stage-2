import { NavLinks } from "../constants";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <h3>ECHOMAX</h3>
        </div>
        <div className="nav-links">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </div>
        <div className="nav-features">
          <CiSearch />
          <CgProfile />
          <a href="/cart">
            <BsCart2 color="black" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
