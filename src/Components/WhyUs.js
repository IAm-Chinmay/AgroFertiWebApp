import React from "react";

import sec1 from "../Images/sec1.png";
import disc from "../Images/disc.gif";
import cus from "../Images/cus.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const WhyUs = () => {
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
        <div className="secMobHead">
          <h1>Why Choose Us ?</h1>
          <p>
            We offer a wide range of fertilizer products and pesticides, along
            with expert advice and consulting services. Our products are of the
            highest quality and are available at discounted prices. We are
            committed to providing our customers with the best possible service,
            ensuring their success in the field.
          </p>
        </div>
        <div className="secMobMain">
          <div className="secMobImg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 5,
                },
              }}
            >
              <motion.img
                animate={{
                  borderRadius: ["20%", "40%", "50%", "40%", "20%"],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  //   times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                }}
                src={sec1}
                width={"200rem"}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: -50,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 5,
              },
            }}
            className="secMobDesc"
          >
            <h2>Quality Products</h2>
            <p>
              We offer a wide variety of high-quality fertilizer products and
              pesticides, ensuring that your crops get the nutrients they need
              to thrive.
            </p>
          </motion.div>
        </div>
        {/* ------------------ */}
        <div className="secMobMain">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: -50,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 5,
              },
            }}
            className="secMobDesc"
          >
            <h2>Discounted Prices</h2>
            <p>
              Our products are available at discounted prices, ensuring that you
              get the best value for your investment.
            </p>
          </motion.div>
          <div className="secMobImg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 5,
                },
              }}
            >
              <motion.img
                animate={{
                  borderRadius: ["20%", "40%", "50%", "40%", "20%"],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  //   times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                }}
                src={disc}
                width={"200rem"}
              />
            </motion.div>
          </div>
        </div>
        {/*---------------------------------*/}
        <div className="secMobMain">
          <div className="secMobImg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 5,
                },
              }}
            >
              <motion.img
                animate={{
                  borderRadius: ["20%", "40%", "50%", "40%", "20%"],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  //   times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                }}
                src={cus}
                width={"200rem"}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: -50,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 5,
              },
            }}
            className="secMobDesc"
          >
            <h2>Customer Satisfaction</h2>
            <p>
              We are committed to providing our customers with the best possible
              service, ensuring their satisfaction with our products and
              services.
            </p>
          </motion.div>
        </div>
      </Mobile>

      {/* ------------------------------------------------------------ */}

      <Desktop>
        <div className="WhyMain">
          <div className="secHead">
            <h1>Why Choose Us ?</h1>
            <p>
              We offer a wide range of fertilizer products and pesticides, along
              with expert advice and consulting services. Our products are of
              the highest quality and are available at discounted prices. We are
              committed to providing our customers with the best possible
              service, ensuring their success in the field.
            </p>
          </div>
          <div className="secMain">
            <div className="secImg">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: -50,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 5,
                  },
                }}
              >
                <motion.img
                  animate={{
                    borderRadius: ["20%", "40%", "50%", "40%", "20%"],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    //   times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                  src={sec1}
                  width={"500rem"}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 5,
                },
              }}
              className="secDesc"
            >
              <h2>Quality Products</h2>
              <p>
                We offer a wide variety of high-quality fertilizer products and
                pesticides, ensuring that your crops get the nutrients they need
                to thrive.
              </p>
            </motion.div>
          </div>
          {/*---------------------------------*/}
          <div className="secMain">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 5,
                },
              }}
              className="secDesc"
            >
              <h2>Discounted Prices</h2>
              <p>
                Our products are available at discounted prices, ensuring that
                you get the best value for your investment.
              </p>
            </motion.div>
            <div className="secImg">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: -50,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 5,
                  },
                }}
              >
                <motion.img
                  animate={{
                    borderRadius: ["20%", "40%", "50%", "40%", "20%"],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    //   times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                  src={disc}
                  width={"500rem"}
                />
              </motion.div>
            </div>
          </div>
          {/*---------------------------------*/}
          <div className="secMain">
            <div className="secImg">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: -50,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 5,
                  },
                }}
              >
                <motion.img
                  animate={{
                    borderRadius: ["20%", "40%", "50%", "40%", "20%"],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    //   times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                  src={cus}
                  width={"500rem"}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 5,
                },
              }}
              className="secDesc"
            >
              <h2>Customer Satisfaction</h2>
              <p>
                We are committed to providing our customers with the best
                possible service, ensuring their satisfaction with our products
                and services.
              </p>
            </motion.div>
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default WhyUs;
