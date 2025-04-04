import React from "react";
import about from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div id="about" className="flex justify-center items-center">
      <div className="flex justify-between items-center mt-10 gap-3 max-sm:flex max-sm:flex-col max-md:mx-[3%]">
        {/* About Image */}
        <div className="relative w-[320px] z-20 h-[300px] max-md:w-[300px] max-sm:w-[440px] max-w-sm">
          <img className="w-full h-full object-cover" src={about} alt="About" />

          {/* Play Icon */}
          <div
            className="absolute top-0 cursor-pointer translate-25 left-0 max-sm:ml-6 z-50"
            onClick={() => {
              setPlayState(true); // Show the video when clicking play icon
            }}
          >
            <img className="w-[100px]" src={play_icon} alt="Play" />
          </div>
        </div>

        {/* About Text */}
        <div className="pl-10">
          <h1 className="text-sm text-indigo-800 max-md:text-[12px]">
            Harvard University
          </h1>
          <p className="w-[340px] text-[16px] max-md:text-[15px] max-md:w-[290px]">
            Our college offers a program designed to make students feel
            comfortable and adapt easily to the new campus environment.
          </p>
          <p className="w-[340px] text-[16px] py-3 max-md:text-[15px] max-md:w-[290px]">
            We support our students as they join our campus for their studies,
            helping them adapt to a new culture and develop new skills.
            Additionally, we provide various benefits to international students,
            enabling them to grow, reach their full potential, and achieve their
            dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
