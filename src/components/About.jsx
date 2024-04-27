import React from "react";
import AboutImg from "../assets/about.png";
import aboutData from "../data/about";

const About = () => {
  return (
    <div className="px-16 border-b border-neutral-900 pb-16">
      <h1 className="text-neutral-300 text-4xl sm:text-5xl md:text-6xl text-center tracking-tight py-16">
        About Me
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center justify-center h-1/2 sm:w-1/2 md:m-auto sm:m-auto relative">
          <div className="relative">
            <img
              className="w-48 h-72 md:w-60 md:h-96 rounded-md"
              src={AboutImg}
              alt="About Image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="h-1/2 sm:w-1/2">
          <p className="text-neutral-300 tracking-tighter sm:text-xl">
            {aboutData.name}
            <br />
            <br />
            {aboutData.education}
            <br />
            <br />
            {aboutData.experience}
            <br />
            <br />
            Internships:
            <ul>
              {aboutData.internships.map((internship, index) => (
                <li key={index}>{internship}</li>
              ))}
            </ul>
            <br />
            Certifications:
            <ul>
              {aboutData.certifications.map((certification, index) => (
                <li key={index}>{certification}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
