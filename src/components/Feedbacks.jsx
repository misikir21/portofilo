import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils";
import { testimonials } from "../constants";
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      ></div>
    </div>
  );
};

export default Feedbacks;
