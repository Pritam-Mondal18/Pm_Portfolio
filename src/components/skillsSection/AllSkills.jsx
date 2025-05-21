import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3,
  },
  {
    skill: "JavaScript",
    icon: DiJavascript1,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: TbBrandRedux,
  },
  {
    skill: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
