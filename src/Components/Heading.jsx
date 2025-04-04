import React from "react";

const Heading = ({ title, subTitle }) => {
  return (
    <div className="max-sm:text-2xl text-center mt-[2.5rem] flex flex-col justify-center items-center font-serif text-indigo-500">
      <h1 className="border-b-2 ">{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default Heading;
