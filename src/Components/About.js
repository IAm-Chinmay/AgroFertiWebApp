import React from "react";

import about from "../Images/abtImg.png";

import { useMediaQuery } from "react-responsive";

const About = () => {
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
        <div className="aboutMobSec">
          <div className="aboutMobImg">
            <img alt="about" src={about} width={"200rem"} />
          </div>
          <div className="aboutMobInfo">
            <h3
              style={{
                color: "blue",
                fontWeight: "600",
                fontSize: ".8rem",
                marginTop: "2rem",
              }}
            >
              ABOUT US
            </h3>
            <h1>Expert Advice and Quality Products for Successful Farming</h1>
            <p>
              At Shri Datta Krushi Kendra, we are dedicated to providing farmers
              with the best possible solutions for their farming needs. From
              expert advice to quality products, we are here to help you achieve
              success in your agricultural endeavors.
            </p>
          </div>
        </div>
        <hr style={{ marginTop: "2rem" }} />
      </Mobile>
      <Desktop>
        <div className="aboutSec">
          <div className="aboutImg">
            <img alt="about" src={about} width={"600rem"} />
          </div>
          <div className="aboutInfo">
            <h3 style={{ color: "blue", fontWeight: "600", fontSize: "2rem" }}>
              ABOUT US
            </h3>
            <h1>Expert Advice and Quality Products for Successful Farming</h1>
            <p>
              At Shri Datta Krushi Kendra, we are dedicated to providing farmers
              with the best possible solutions for their farming needs. From
              expert advice to quality products, we are here to help you achieve
              success in your agricultural endeavors.
            </p>
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default About;
