import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../CSS/nav.css";
import logo from "../Images/logo2.png";

import { useMediaQuery } from "react-responsive";
import { CiHome } from "react-icons/ci";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const Nav = () => {
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
        <div className="navMain">
          <div className="logo">
            <img alt="logo" height={"80px"} width={"80px"} src={logo} />
            <h4 style={{ color: "rgb(32, 105, 48)",fontSize:'1.4rem' }}>
              Shri Datta Krushi Seva Kendra
            </h4>
          </div>
          <div className="navMobMain">
            <Link style={{ all: "unset" }} to="/">
              <div className="navMobLink">
                <CiHome style={{ fontSize: "2rem" }} />
                <span>Home</span>
              </div>
            </Link>
            <Link style={{ all: "unset" }} to="/service">
              <div className="navMobLink">
                <MdOutlineMiscellaneousServices style={{ fontSize: "2rem" }} />
                <span>Services</span>
              </div>
            </Link>
            <Link style={{ all: "unset" }} to="/contact">
              <div className="navMobLink">
                <GrContact style={{ fontSize: "1.8rem" }} />
                <span>Contact Us</span>
              </div>
            </Link>
          </div>
        </div>

        <Outlet />
      </Mobile>
      <Desktop>
        <div className="navMain">
          <div className="logo">
            <img alt="logo" height={"80px"} width={"80px"} src={logo} />
            <h3>Shri Datta Krushi Seva Kendra</h3>
          </div>
          <div className="navLinks">
            <Link style={{ all: "unset" }} to="/">
              {" "}
              <h4>Home</h4>{" "}
            </Link>
            <Link style={{ all: "unset" }} to="/service">
              <h4>Service</h4>
            </Link>
            <Link style={{ all: "unset" }} to="/contact">
              <h4>Contact Us</h4>
            </Link>
          </div>
        </div>

        <Outlet />
      </Desktop>
    </>
  );
};

export default Nav;
