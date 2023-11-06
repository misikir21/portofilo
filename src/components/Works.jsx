import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return <motion.div variants={fadeIn("up","spring" index * 0.5,0.75)}>
    <Tilt 
    options={{
      max:45,
      scale:1,
      speed:450
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >

    </Tilt>
  </motion.div>;
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          debitis nisi sed, autem laborum ipsam, enim excepturi , neque possimus
          provident deleniti laudantium quo ratione iure. Ad quisquam possimus
          unde in, sit illo eaque dolores quos!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Works, "");
