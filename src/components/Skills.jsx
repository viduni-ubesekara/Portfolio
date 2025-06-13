import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, frameworks, databases, hosting } from "../constants";
import { styles } from "../styles";

const Skills = () => {
  return (
    <div>
      <h2 className={styles.sectionHeadText}>Languages and Frameworks</h2>
      <div>
        <p className="text-3xl mt-20 mb-20">Languages:</p>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-center">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-3xl mt-20 mb-20">Frameworks: </p>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          {frameworks.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-center">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-10">
        <p className="text-3xl mt-20 mb-20">DataBases: </p>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          {databases.map((databases) => (
            <div className="w-28 h-28" key={databases.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-center">{databases.name}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
