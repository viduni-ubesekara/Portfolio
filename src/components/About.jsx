import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services, experience } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Logo from "../assets/myphoto.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div className="relative">
      <motion.div>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <div className="flex justify-center items-start mb-10 mt-10 p-10">
        <div>
          <img
            src={Logo}
            className="w-full sm:w-[300px] h-auto rounded-full"
            alt="Logo"
          />
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-justify text-xl  leading-[30px]"
      >
      I’m an IT undergraduate with a strong passion for creating innovative, user-centered digital solutions. With interests in UI/UX design, web development, and software development, I enjoy building intuitive and impactful experiences that enhance the efficiency and effectiveness of systems and workflows.

I’m a hardworking, flexible, and self-motivated individual with a friendly attitude and a continuous desire to learn and grow in the tech field. I thrive in both individual and team environments and have experience leading and collaborating with others to achieve shared goals. My strong interpersonal and communication skills help me work seamlessly with people from diverse backgrounds.

Whether I'm designing user interfaces, developing responsive websites, or solving complex problems through code, I’m committed to delivering functional, visually engaging, and meaningful digital experiences that make a real impact.</motion.p>

      <div className="mt-20 justify-center flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mt-24">
        <motion.div>
          <h2 className={styles.sectionHeadText}>Experience</h2>
        </motion.div>
      </div>

      <div className="mt-20 justify-center flex flex-wrap gap-10">
        {experience.map((experience, index) => (
          <ExperienceCard key={experience.name} index={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const ExperienceCard = ({
  name,
  icon,
  title,
  working_type,
  bg,
  year,
  details,
  techs,
  projects,
}) => {
  return (
    <div className="bg-tertiary false w-full  text-white justify-center  rounded-3xl min-h-[400px] gap-4 p-5  ">
      <div className="flex md:justify-between max-[500px]:gap-4 max-[500px]:flex-col">
        <span className="bg-gradient-to-r from-indigo-300 flex  items-center py-1 md:px-3 px-3 rounded-full md:w-64 min-w-[192px]">
          <img
            src={icon}
            alt="sezenta"
            className="md:w-12 md:h-12 h-16 w-16   "
          />
          <span className="flex ml-4 flex-col">
            <p className="text-white whitespace-nowrap font-bold ml-2 text-3xl">
              {name}
            </p>
            <p className="text-white ml-2">{working_type}</p>
          </span>
        </span>
        <span className="bg-[#F7E976] text-black  h-12 px-5 font-bold rounded-full md:min-w-[250px] min-w-[288px]  flex md:py-4 items-center max-[500px]:text-sm gap-2">
          <FaRegCalendarAlt /> {year}
        </span>
      </div>
      <div className="flex py-8 text-3xl">{title}</div>
      <div className="flex flex-col gap-4 p-4 ">
        {details.map((data, index) => {
          return (
            <div key={index} className="flex flex-row gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl" /> {data}
            </div>
          );
        })}
      </div>
      {/* <div className=" flex flex-wrap gap-3 mb-5 justify-start">
        Projects :
        {projects.map((data, index) => {
          return <div className=" p-5 text-white rounded-2xl">{data}</div>;
        })}
      </div> */}
      <div className=" flex flex-wrap gap-3 justify-center">
        {techs.map((data, index) => {
          return (
            <div className="bg-[#F7E976] p-5 text-black rounded-2xl">
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
