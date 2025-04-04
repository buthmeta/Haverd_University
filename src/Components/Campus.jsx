import React from "react";
import gallary_one from "../assets/gallery-1.png";
import gallary_two from "../assets/gallery-2.png";
import gallary_three from "../assets/gallery-3.png";
import gallary_four from "../assets/gallery-4.png";

const Campus = () => {
  return (
    <div
      id="campus"
      className="grid grid-cols-4 mt-7 w-full px-[4%] max-lg:flex max-lg:gap-x-2 max-md:flex max-md:gap-x-2 max-sm:gap-y-3 max-sm:flex max-sm:flex-col  max-sm:justify-center max-sm:items-center"
    >
      {/* gallary one */}
      <div className="relative max-lg:h-[310px] max-lg:w-auto max-md:w-auto max-md:h-[310px] max-sm:w-[300px] max-sm:h-auto w-[250px] h-[315px]">
        <img
          className="w-[250px] max-lg:h-full max-lg:w-auto max-md:w-auto max-md:h-full max-sm:w-full h-auto"
          src={gallary_one}
          alt=""
        />
        <div
          className="absolute flex-col  top-0 w-full h-full text-white"
          style={{
            background: "rgba(75, 0, 130, 0.6)", // Indigo with 60% opacity
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl">Research Student</h1>
          <p className="w-[150px] pt-2">
            Study hard to make sure that can work
          </p>
        </div>
      </div>

      {/* gallary two */}
      <div className="relative max-lg:h-[310px] max-lg:w-auto max-md:w-auto max-md:h-[310px] max-sm:w-[300px] max-sm:h-auto w-[250px] h-[315px]">
        <img
          className="w-[250px] max-lg:h-full max-lg:w-auto max-md:w-auto max-md:h-full max-sm:w-full h-auto"
          src={gallary_two}
          alt=""
        />
        <div
          className="absolute flex-col top-0 w-full h-full text-white"
          style={{
            background: "rgba(75, 0, 130, 0.6)", // Indigo with 60% opacity
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl">Working Group</h1>
          <p className="w-[150px] pt-2 text-center">
            Campus provide them a new skill
          </p>
        </div>
      </div>

      {/* gallary three */}
      <div className="relative max-lg:h-[310px] max-lg:w-auto max-md:w-auto max-md:h-[310px] max-sm:w-[300px] max-sm:h-auto w-[250px] h-[315px]">
        <img
          className="w-[250px] max-lg:h-full max-lg:w-auto max-md:w-auto max-md:h-full max-sm:w-full h-auto"
          src={gallary_three}
          alt=""
        />
        <div
          className="absolute flex-col top-0 w-full h-full text-white"
          style={{
            background: "rgba(75, 0, 130, 0.6)", // Indigo with 60% opacity
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl">Fresh Graduate</h1>
          <p className="w-[150px] pt-2 text-center">
            Fresh graduate for gain occation
          </p>
        </div>
      </div>

      {/* gallary four */}
      <div className="relative max-lg:h-[310px] max-lg:w-auto max-md:w-auto max-md:h-[310px] max-sm:w-[300px] max-sm:h-auto w-[250px] h-[315px]">
        <img
          className="w-[250px] max-lg:h-full max-lg:w-auto max-md:w-auto max-md:h-full max-sm:w-full h-auto"
          src={gallary_four}
          alt=""
        />
        <div
          className="absolute flex-col top-0 w-full h-full text-white"
          style={{
            background: "rgba(75, 0, 130, 0.6)", // Indigo with 60% opacity
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-xl">Master Program</h1>
          <p className="w-[150px] pt-2 text-center">
            We can learn to catch dream
          </p>
        </div>
      </div>
    </div>
  );
};

export default Campus;
