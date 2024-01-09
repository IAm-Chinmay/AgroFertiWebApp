import React, { useState } from "react";

import "../../CSS/Service/service.css";
import ferti from "../../Images/ferti.png";
import pesti from "../../Images/pesti.jpg";

import Fertilizer from "./Fertilizer/Fertilizer";
import Pesticides from "./Pesticides/Pesticides";
import OurRef from "./OurRef";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ServicePage = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
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
        <div className="serviceMobMain">
          <h1 className="serviceMobHeadH1">Services</h1>
          <div className="serviceMobSecMain">
            <a style={{ all: "unset" }} href="#sec">
              <motion.div
                onClick={() => {
                  setShow(true);
                  setClick(true);
                }}
                className="serviceMobOption"
              >
                <motion.div className="img">
                  <motion.img
                    whileHover={{
                      scale: 1.5,
                      transition: {
                        duration: 4,
                      },
                    }}
                    src={ferti}
                    width={"150rem"}
                    height={"150rem"}
                  />
                </motion.div>
                <h1>Fertilizer</h1>
              </motion.div>
            </a>
            <a style={{ all: "unset" }} href="#sec">
              <div
                onClick={() => {
                  setShow(true);
                  setClick(false);
                }}
                className="serviceMobOption"
              >
                <motion.div className="img">
                  <motion.img
                    whileHover={{
                      scale: 1.5,
                      transition: {
                        duration: 4,
                      },
                    }}
                    src={pesti}
                    width={"150rem"}
                    height={"150rem"}
                  />
                </motion.div>
                <h1>Pesticides</h1>
              </div>
            </a>
          </div>
          <div id="sec">{show && click ? <Fertilizer /> : null}</div>
          <div id="sec">{show && !click ? <Pesticides /> : null}</div>
          <div>
            <OurRef />
          </div>
        </div>
      </Mobile>
      <Desktop>
        <div className="serviceMain">
          <h1 className="serviceHeadH1">Services</h1>
          <div className="serviceSecMain">
            <a style={{ all: "unset" }} href="#sec">
              <motion.div
                onClick={() => {
                  setShow(true);
                  setClick(true);
                }}
                className="serviceOption"
              >
                <motion.div className="img">
                  <motion.img
                    whileHover={{
                      scale: 1.5,
                      transition: {
                        duration: 4,
                      },
                    }}
                    src={ferti}
                  />
                </motion.div>
                <h1>Fertilizer</h1>
              </motion.div>
            </a>
            <a style={{ all: "unset" }} href="#sec">
              <div
                onClick={() => {
                  setShow(true);
                  setClick(false);
                }}
                className="serviceOption"
              >
                <motion.div className="img">
                  <motion.img
                    whileHover={{
                      scale: 1.5,
                      transition: {
                        duration: 4,
                      },
                    }}
                    src={pesti}
                    width={"500rem"}
                    height={"350rem"}
                  />
                </motion.div>
                <h1>Pesticides</h1>
              </div>
            </a>
          </div>
          <div id="sec">{show && click ? <Fertilizer /> : null}</div>
          <div id="sec">{show && !click ? <Pesticides /> : null}</div>
          <div>
            <OurRef />
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default ServicePage;
