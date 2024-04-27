import React from "react";
import { HeroImg } from "../data/hero";
import heroData from "../data/hero";
const Hero = () => {
  return (
    <div className="w-screen h-screen px-16 flex flex-col sm:flex-row py-16 sm:gap-4 border-b border-neutral-900">
      <div className="flex flex-col gap-2 sm:gap-4 h-1/2 sm:w-1/2">
        <h1 className="text-4xl text-neutral-300 tracking-tight sm:text-5xl md:text-6xl">
          {heroData.name}
        </h1>
        <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-[2rem] md:text-5xl tracking-tight text-transparent">
          {heroData.role}
        </h3>
        <p className=" text-neutral-300 tracking-tighter sm:text-xl">
          {heroData.description}
        </p>
      </div>
      <div className="h-1/2 m-auto md:h-auto md:mt-4 relative">
        <div className="flex items-center justify-center">
          <div className="h-48 w-48 md:h-80 md:w-80 rounded-md overflow-hidden relative">
            <img className="h-full w-full object-cover" src={HeroImg} alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
