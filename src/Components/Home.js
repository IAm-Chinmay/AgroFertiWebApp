import React from "react";

import "../CSS/home.css";
import home from "../Images/home.jpg";

import About from "./About";
import WhyUs from "./WhyUs";
import Feedback from "./Feedback";
import OurMission from "./OurMission";

import { useMediaQuery } from "react-responsive";

const Home = () => {
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
      <div className="mainSection">
        <Mobile>
          <div className="upperMobSection">
            <img
              className="posterMobImg"
              width={"200%"}
              height={"120%"}
              alt="poster"
              src={home}
            />
            <h1 className="imgMobText">
              Fertilize Your Fields,
              <span style={{ color: "green" }}>
                {" "}
                Nurture Your <br /> Yields!
              </span>
            </h1>
          </div>
        </Mobile>
        <Desktop>
          <div className="upperSection">
            <img className="posterImg" alt="poster" src={home} />
            <h1 className="imgText">
              Fertilize Your Fields,
              <span style={{ color: "green" }}>
                {" "}
                Nurture Your <br /> Yields!
              </span>
            </h1>
          </div>
        </Desktop>
        <div>
          <div>
            <About />
          </div>
          <div>
            <WhyUs />
          </div>
          <div>
            <Feedback />
          </div>
          <div>
            <OurMission />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
