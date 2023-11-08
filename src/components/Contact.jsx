import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { earthcanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const [form.setform]=useState({
    name:'',
    email:'',
    message:'',
  })
  return <div>Contact</div>;
};

export default Contact;
