import React from "react";
import { motion } from "framer-motion";

import "../../CSS/Service/service.css";

const OurRef = () => {
  return (
    <main className="refMain">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -50,
          transition: {
            type: "spring",
            bounce: 0.5,
            duration: 4,
          },
        }}
        className="refSec"
      >
        <h1>Our Retailers !</h1>
        <div
          style={{
            marginBottom: "4rem",
            display: "flex",
            justifyContent: "space-evenly",
            width: "102rem",
          }}
        >
          <img
            alt="l1"
            width={"200rem"}
            src={require("../../Images/icons/l1.png")}
          />
          <img
            alt="l2"
            width={"200rem"}
            src={require("../../Images/icons/l2.png")}
          />
          <img
            alt="l3"
            width={"200rem"}
            src={require("../../Images/icons/l3.png")}
          />
          <img
            alt="l4"
            width={"200rem"}
            src={require("../../Images/icons/l4.png")}
          />
          <img
            alt="l5"
            width={"200rem"}
            src={require("../../Images/icons/l5.png")}
          />
          <img
            alt="l6"
            width={"200rem"}
            src={require("../../Images/icons/l6.png")}
          />
        </div>
      </motion.div>
    </main>
  );
};

export default OurRef;
