import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Left Side - Contact Details */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Details</h3>

        <div className="mt-8 text-white space-y-4">
          <p>
            <span className="font-semibold">Name:</span> Viduni Ubesekara
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:viduniubesekara@gmail.com"
              className="text-blue-400 underline"
            >
              viduniubesekara@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +94 70 222 2084
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/viduni-ubesekara-789466235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              linkedin.com/in/viduni-ubesekara
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/viduni-ubesekara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              github.com/viduni-ubesekara
            </a>
          </p>

          {/* Download CV Button */}
         <div id="cv" className="mt-8">
    <a
      href="/Viduni_Ubesekara_CV.pdf"
      download
      className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
    >
      Download CV
    </a>
  </div>
        </div>
      </motion.div>

      {/* Right Side - 3D Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
