import React from "react";
import program_one from "../assets/program-1.png";
import program_two from "../assets/program-2.png";
import program_three from "../assets/program-3.png";
import program_icon_one from "../assets/program-icon-1.png";
import program_icon_two from "../assets/program-icon-2.png";
import program_icon_three from "../assets/program-icon-3.png";

const Program = () => {
  return (
    <div
      id="programs"
      className="flex justify-center items-center gap-3 mt-8 max-sm:flex max-sm:flex-col max-md:px-[2%] max-lg:px-[2%]"
    >
      {/* person 1 */}
      <div className="relative group flex justify-center flex-col items-center">
        <img
          className="w-[280px] cursor-pointer h-auto mx-auto max-sm:w-[300px]"
          src={program_one}
          alt=""
        />

        <div
          className=" absolute 
           top-0 cursor-pointer overflow-hidden  w-full h-full flex justify-center items-center"
        >
          <div
            className="translate-y-10 opacity-0 group-hover:translate-y-0 w-full h-full group-hover:opacity-100 transition-all duration-400  flex justify-center flex-col items-center"
            style={{
              background: "rgba(75, 0, 130, 0.6)", // Indigo with 60% opacity
            }}
          >
            <img src={program_icon_one} className="w-[70px]" alt="" />
            <h1 className="text-white pt-2 text-lg font-semibold">
              Bachelor Degree
            </h1>
          </div>
        </div>
      </div>

      {/* person 2 */}
      <div className="relative group flex justify-center flex-col items-center">
        <img
          className="w-[280px] cursor-pointer h-auto mx-auto max-sm:w-[300px]"
          src={program_two}
          alt=""
        />

        {/* Background overlay with slide-up effect */}
        <div
          className=" absolute 
           top-0 cursor-pointer overflow-hidden  w-full h-full flex justify-center items-center"
        >
          <div
            className="translate-y-10 opacity-0 group-hover:translate-y-0 w-full h-full group-hover:opacity-100 transition-all duration-400  flex justify-center flex-col items-center"
            style={{
              background: "rgba(75, 0, 130, 0.6)", // Indigo with 60% opacity
            }}
          >
            <img src={program_icon_two} className="w-[70px]" alt="" />
            <h1 className="text-white pt-2 text-lg font-semibold">
              Master Degree
            </h1>
          </div>
        </div>
      </div>

      {/* person 3 */}
      <div className="relative group flex justify-center items-center flex-col">
        <img
          className="w-[280px] cursor-pointer h-auto mx-auto max-sm:w-[300px]"
          src={program_three}
          alt=""
        />

        <div
          className=" absolute 
           top-0 cursor-pointer overflow-hidden  w-full h-full flex justify-center items-center"
        >
          <div
            className="translate-y-10 opacity-0 group-hover:translate-y-0 w-full h-full group-hover:opacity-100 transition-all duration-400  flex justify-center flex-col items-center"
            style={{
              background: "rgba(75, 0, 130, 0.6)", // Indigo with 60% opacity
            }}
          >
            <img src={program_icon_three} className="w-[70px]" alt="" />
            <h1 className="text-white pt-2 text-lg font-semibold">
              PHP Degree
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
