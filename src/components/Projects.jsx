import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="px-16 border-b border-neutral-900 pb-16">
      <h1 className="text-neutral-300 text-4xl sm:text-5xl md:text-6xl text-center tracking-tight py-16">
        Projects
      </h1>
      {projects.map((project, index) => (
        <div className="sm:flex py-4 sm:gap-2" key={index}>
          <div className="text-neutral-300 sm:w-1/2">
            <img
              className="h-48 rounded-md m-auto"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="flex flex-col gap-2 sm:w-1/2">
            <h3 className="text-neutral-300 font-semibold tracking-tighter">
              {project.title}
            </h3>
            <p className="text-neutral-300 tracking-tighter">
              {project.description}
            </p>
            <div className="flex gap-1">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-neutral-300 cursor-pointer bg-neutral-700 rounded-sm px-2 tracking-tighter"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-1">
              <a
                href={project.demo}
                className="text-neutral-300 cursor-pointer bg-neutral-700 hover:bg-neutral-500 hover:text-neutral-100 rounded-sm px-2 tracking-tighter"
              >
                View Demo
              </a>
              <a
                href={project.sourceCode}
                className="text-neutral-300 cursor-pointer bg-neutral-700 hover:bg-neutral-500 hover:text-neutral-100 rounded-sm px-2 tracking-tighter"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
