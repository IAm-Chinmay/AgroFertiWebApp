import React, { useState, useEffect } from "react";

import "../CSS/home.css";
import {  motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Feedback = () => {
  const txt = [
    {
      para: " I highly recommend Shri Datta Krushi Kendra to any farmer lookingfor reliable, quality products and exceptional customer service.They truly care about their customers and their success.",
      name: "Akash Ghadge",
    },
    {
      para: "Shri Datta Krushi Kendra has been my go-to for all my farming needs. Their products are of the highest quality and their customer service is exceptional.",
      name: "Rajendra Nagne",
    },
    {
      para: "I have been a customer of Shri Datta Krushi Kendra for years, and I have never been disappointed. Their expert advice and quality products have helped me achieve great success in my farming endeavors.",
      name: "Dhiraj Jagtap",
    },
  ];

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const [text, setText] = useState(txt[0].para);
  const [name, setName] = useState(txt[0].name);

  useEffect(() => {
    setInterval(() => {
      const index = Math.floor(Math.random() * txt.length);
      setText(txt[index].para);
      setName(txt[index].name);
    }, 10000);
  }, [txt]);

  return (
    <>
      <Mobile>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Our Customers speak for us</h1>
          <hr
            style={{
              width: "100rem",
              marginTop: "2rem",
              border: "solid black",
            }}
          />
        </div>
        <div className="feedbackMobCardMain">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.5,
                duration: 5,
              },
            }}
            className="feedbackMobCards"
          >
            <p>"{text}"</p>
            <div className="feedbackMobName">
              <h5>{name}</h5>
            </div>
          </motion.div>
        </div>
      </Mobile>
      <Desktop>
        <div className="feedbackMain">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Our Customers speak for us</h1>
            <hr
              style={{
                width: "100rem",
                marginTop: "2rem",
                border: "solid black",
              }}
            />
          </div>
          <div className="feedbackCardMain">
            <motion.div
              initial={{ opacity: 0.2 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 4,
                },
              }}
              className="feedbackCards"
            >
              <p>
                “I highly recommend Shri Datta Krushi Kendra to any farmer
                looking for reliable, quality products and exceptional customer
                service. They truly care about their customers and their
                success."
              </p>
              <div className="feedbackName">
                <h5>Akash Ghadge</h5>
              </div>
            </motion.div>
            {/*------------------*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 6,
                },
              }}
              className="feedbackCards"
            >
              <p>
                "Shri Datta Krushi Kendra has been my go-to for all my farming
                needs. Their products are of the highest quality and their
                customer service is exceptional."
              </p>
              <div className="feedbackName">
                <h5>Rajendra Nagne</h5>
              </div>
            </motion.div>
            {/*------------------*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: -50,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 12,
                },
              }}
              className="feedbackCards"
            >
              <p>
                "I have been a customer of Shri Datta Krushi Kendra for years,
                and I have never been disappointed. Their expert advice and
                quality products have helped me achieve great success in my
                farming endeavors."
              </p>
              <div className="feedbackName">
                <h5>Dhiraj Jagtap</h5>
              </div>
            </motion.div>
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default Feedback;
