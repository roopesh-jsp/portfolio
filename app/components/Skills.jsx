import { skills } from "@/assests/assests";
import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div className="skills">
      {skills.map((skill, idx) => (
        <a href={skill.link} target="_blank" key={idx}>
          <div className="skill">
            <Image src={skill.img} alt="skills"></Image>
            <span>{skill.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Skills;
