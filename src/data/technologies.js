import {
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { SiExpress, SiC } from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: DiHtml5, color: "text-orange-400" },
  { name: "CSS3", icon: DiCss3, color: "text-blue-400" },
  { name: "JavaScript", icon: DiJavascript, color: "text-yellow-400" },
  { name: "React", icon: DiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: DiNodejs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-neutral-500" },
  { name: "MongoDB", icon: DiMongodb, color: "text-green-600" },
  { name: "C++", icon: SiC, color: "text-blue-600" },
  {
    name: "Python",
    icon: DiPython,
    color: "bg-gradient-to-r from-blue-500 to-yellow-500",
  },
];

export default technologies;
