import React from "react";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <div className="mt-10 h-[200px] flex-col flex justify-center items-center text-white w-full bg-violet-900">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Harverd University",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Best Educated in the World",
          1000,
          "Top One of the National Rank",
          1000,
          "Outstanding Student Real-Challege",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1.5em", display: "inline-block", color: "Red" }}
        repeat={Infinity}
      />
      <p className="text-center text-sm pt-3">
        © 2025 COPIRIGHT. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
