import React from "react";
import experiences from "../data/experience";

const Experience = () => {
  return (
    <div className="px-16 border-b border-neutral-900 pb-16">
      <h1 className="text-neutral-300 text-4xl sm:text-5xl md:text-6xl text-center tracking-tight py-16">
        Experience
      </h1>
      {experiences.map((exp, index) => (
        <div className="sm:flex py-4" key={index}>
          <div className="text-neutral-300 sm:w-1/2 flex items-center justify-center">
            <span className="tracking-tighter">{exp.date}</span>
          </div>
          <div className="flex flex-col gap-2 sm:w-1/2">
            <h3 className="text-neutral-300 font-semibold tracking-tighter">
              {exp.title}
            </h3>
            <p className="text-neutral-300 tracking-tighter">{exp.company}</p>
            {exp.credentialId && (
              <p className="text-neutral-300 tracking-tighter">
                Credential ID: {exp.credentialId}
              </p>
            )}
            <div className="flex gap-1">
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-neutral-300 cursor-pointer bg-neutral-700 rounded-sm px-2 tracking-tighter"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
