import React from "react";
import technologies from "../data/technologies";

const Technologies = () => {
  return (
    <div className="px-16 border-b border-neutral-900 pb-16">
      <h1 className="text-neutral-300 text-4xl sm:text-5xl md:text-6xl text-center tracking-tight py-16">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="border-4 border-neutral-800 rounded-md p-4"
          >
            <tech.icon className={`text-7xl ${tech.color}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
