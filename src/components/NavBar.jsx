import { NavLinks } from "../constants";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../providers/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);

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
          <CiSearch id="nf-1" />
          <CgProfile id="nf-1" />
          <div className="cart-btn">
            <a href="/cart">
              <BsCart2 color="black" />
            </a>
            <p>{cart.length}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
