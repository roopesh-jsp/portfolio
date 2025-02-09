import { skills } from "@/assests/assests";
import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <>
      <h1 className="skills_heading">skill set</h1>
      {/* <div className="skills">
        {skills.map((skill, idx) => (
          <a href={skill.link} target="_blank" key={idx}>
            <div className="skill">
              <Image src={skill.img} alt="skills"></Image>
              <span>{skill.name}</span>
            </div>
          </a>
        ))}
      </div> */}
      <div className="skills">
        <div className="marque">
          {skills.map((skill, idx) => (
            <div className="skill" key={idx}>
              <Image src={skill.img} alt="skills"></Image>
              <span>{skill.name}</span>
            </div>
          ))}
          {skills.map((skill, idx) => (
            <div className="skill" key={idx}>
              <Image src={skill.img} alt="skills"></Image>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
