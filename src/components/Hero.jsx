import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { EarthCanvas } from "./canvas";
import { GoCloudDownload } from "react-icons/go";
import cvPDF from "../assets/Curriculum Vitae - Ishara Madusanka.pdf";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] sm:top-[250px] max-w-7xl mx-auto flex flex-row items-start gap-5 mt-20`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div className="flex flex-col justify-center items-start ">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className="text-[#915eff]"> Viduni </span>
          </h1>

          <p className="mt-10">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&duration=2000&pause=2000&color=F7E976&width=1500&lines=A+Full+Stack+Developer+%7C%7C+IT+Undergraduate"
              alt="Typing SVG"
            />
          </p>
          
          <div className="container mx-auto">
            <div className="flex gap-5 mt-10 sm:gap-10">
              <Link to={"https://github.com/viduni-ubesekara"}>
                <FaGithub className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
              </Link>
              <Link to={"https://www.linkedin.com/in/viduni-ubesekara-789466235/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BY2lY5Un0RQaXZ67ECmN5Vw%3D%3D"}>
                <AiOutlineLinkedin className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
              </Link>
              <Link
                to={
                  "https://instagram.com/chill_broh_98?igshid=NTc4MTIwNjQ2YQ=="
                }
              >
                <BsInstagram className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
              </Link>
              <Link to={"https://twitter.com/ChillBroh_98"}>
                <FiTwitter className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
              </Link>
            </div>
          </div>
          <a
            href={cvPDF}
            download
            className="mt-10 flex items-center gap-4  text-2xl sm:text-3xl text-[#915eff]  cursor-pointer"
          >
            <span>Download CV</span>
            <GoCloudDownload className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
        </div>

        {/* <ComputersCanvas /> add image here*/}
      </div>
    </section>
  );
};

export default Hero;
