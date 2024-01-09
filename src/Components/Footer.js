import React from "react";

import "../CSS/footer.css";
import grass from "../Images/grass.png";
import logo from "../Images/logo2.png";

import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { useMediaQuery } from "react-responsive";

import { Link } from "react-router-dom";

const Footer = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  return (
    <>
      <Mobile>
        <div className="footerMobMain">
          <img className="mobgrass" src={grass} alt="grass" />
         
          <div className="footerMobSec">
            <div className="footerMobAddress">
              <h1> Address </h1>
              <span>
                <CiLocationOn
                  style={{ fontSize: "2.5rem", marginTop: "2rem" }}
                />
                <h3>
                  Shri Datta Krushi Seva Kendra, Kalaj, Phaltan,Satara,415528
                </h3>
              </span>
              <span>
                <IoCall style={{ fontSize: "1.5rem", marginTop: "2rem" }} />
                <h3>+91 9421373864</h3>
              </span>
              <span>
                <MdEmail style={{ fontSize: "1.5rem", marginTop: "2rem" }} />
                <h3>shridattakrushi1974@gmail.com</h3>
              </span>
            </div>
          </div>
          <img className="footerMobLogo" src={logo} alt="grass" />
        </div>
      </Mobile>
      <Desktop>
        <div className="footerMain">
          <img className="grass" src={grass} alt="grass" />
          <img className="footerLogo" src={logo} alt="grass" />
          <div className="footerSec">
            <div className="footerLinks">
              <h1>Usefull Links : </h1>
              <ul>
                <li>
                  <Link style={{ all: "unset", cursor: "pointer" }} to="/">
                    {" "}
                    <h3> Home</h3>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ all: "unset", cursor: "pointer" }}
                    to="/service"
                  >
                    {" "}
                    <h3>Service</h3>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ all: "unset", cursor: "pointer" }}
                    to="/contact"
                  >
                    {" "}
                    <h3>Contact Us</h3>{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footerAddress">
              <h1> Address </h1>
              <span>
                <CiLocationOn
                  style={{ fontSize: "1.5rem", marginTop: "2rem" }}
                />
                <h3>
                  Shri Datta Krushi Seva Kendra, Kalaj, Phaltan,Satara,415528
                </h3>
              </span>
              <span>
                <IoCall style={{ fontSize: "1.5rem", marginTop: "2rem" }} />
                <h3>+91 9421373864</h3>
              </span>
              <span>
                <MdEmail style={{ fontSize: "1.5rem", marginTop: "2rem" }} />
                <h3>shridattakrushi1974@gmail.com</h3>
              </span>
            </div>
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default Footer;
