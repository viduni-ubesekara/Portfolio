import React from "react";
// import Tilt from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { design_projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {link} from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div>
        <div className="relative w-full h-96">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
  onClick={() => window.open(source_code_link, "_blank")}
  className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black"
>
  <img
    src={link}
    alt="source code"
    className="w-6 h-6 object-contain rounded-full"
  />
</div>

          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My works</p>
        <h2 className={`${styles.sectionHeadText}`}> Development Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
     
        <h2 className={`${styles.sectionHeadText}`}> Design Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          The following design projects demonstrate my creativity and user-centered approach to problem-solving. Each project includes a brief description along with links to interactive Figma designs. These works highlight my skills in UI/UX design, visual hierarchy, and usability principles, as well as my ability to communicate ideas clearly through prototypes and design systems.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {design_projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-10 text-3xl justify-center flex flex-row gap-4">
        <Link to={"https://github.com/viduni-ubesekara/"}>
          Visit My github Account to view projects
        </Link>
        <FaRegArrowAltCircleRight className="animate-jump" />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
