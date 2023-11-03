import React from "react";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";

function PhoneComponent() {
  return (
    <div className="phone-box">
      <img className="gradient" src={gradient} />
      <motion.img
        className="phone"
        src={iphone}
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default PhoneComponent;
