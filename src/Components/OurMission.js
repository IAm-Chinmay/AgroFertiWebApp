import React from "react";

import misson from "../Images/mission.png";
import { useMediaQuery } from "react-responsive";

import "../CSS/home.css";

const OurMission = () => {
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
        <div className="MissionMobMain">
          <img alt="misson" src={misson} />
          <div>
            <h1>Our Mission</h1>
            <p>
              At Shri Datta Krushi Kendra, our mission is to provide farmers
              with the best possible products and services, ensuring their
              success in the field. We are committed to promoting sustainable
              farming practices and providing expert advice to help our
              customers achieve their goals.
            </p>
          </div>
        </div>
      </Mobile>
      <Desktop>
        <div className="MissionMain">
          <img alt="misson" src={misson} />
          <div>
            <h1>Our Mission</h1>
            <p>
              At Shri Datta Krushi Kendra, our mission is to provide farmers
              with the best possible products and services, ensuring their
              success in the field. We are committed to promoting sustainable
              farming practices and providing expert advice to help our
              customers achieve their goals.
            </p>
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default OurMission;
