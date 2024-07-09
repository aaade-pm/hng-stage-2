import { FooterLinks } from "../constants";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-nav">
          <div className="footer-title">
            <h2>ECHOMAX</h2>
          </div>
          <div className="footer-links">
            <ul>
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <p>Copyright © 2024, All rights reserved</p>
            <p>OUR POLICIES</p>
            <p>TERMS OF USE</p>
          </div>

          <div className="footer-bottom-links">
            <FaInstagram />
            <FiFacebook />
            <FiYoutube />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
