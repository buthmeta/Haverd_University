import React from "react";
import background from "../assets/hero.png";
import arrow from "../assets/white-arrow.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full relative h-screen flex items-center justify-center text-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-indigo-800 opacity-50"></div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={background}
          alt="Hero"
        />
      </div>

      {/* Hero Text Content */}
      <div className="absolute text-center px-6 md:px-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 max-sm:text-3xl">
          The Harvard University
        </h1>
        <h2 className="text-lg max-sm:text-[15px]">
          This program is designed to support outstanding students during their
          studies at the university campus.
        </h2>
      </div>

      {/* bottun */}
      <div className="absolute mt-[13rem] flex items-center gap-5">
        <button className="cursor-pointer  hover:bg-red-700 max-sm:text-[13px] max-md:px-4 max-md:py-[7px] sm:py-[6px] bg-red-500 px-5 py-1 rounded flex items-center gap-2">
          Read More <img className="w-6" src={arrow} alt="" />
        </button>
        <button className="cursor-pointer border-2 px-5 py-[3px] rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Hero;
