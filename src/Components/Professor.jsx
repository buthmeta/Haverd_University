import React, { useState } from "react";
import professor_one from "../assets/user-1.png";
import professor_two from "../assets/user-2.png";
import professor_three from "../assets/user-3.png";
import professor_four from "../assets/user-4.png";
import arrow_next from "../assets/next-icon.png";
import arrow_back from "../assets/back-icon.png";

const professors = [
  {
    id: 1,
    name: "William Hacker",
    institution: "Edusity, USA",
    image: professor_one,
  },
  {
    id: 2,
    name: "Diana Oka",
    institution: "Edusity, USA",
    image: professor_two,
  },
  {
    id: 3,
    name: "Jacker Spier",
    institution: "Edusity, USA",
    image: professor_three,
  },
  {
    id: 4,
    name: "Jacker Spier",
    institution: "Edusity, USA",
    image: professor_four,
  },
];

const Professor = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 1;
  const totalSlides = Math.ceil(professors.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex + 1 < totalSlides ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : 0));
  };

  return (
    <div id="professors">
      <div className="flex max-sm:px-[15%] px-[20%] justify-between items-center ">
        <img
          className="bg-black w-10 h-10 p-2 rounded-full cursor-pointer"
          src={arrow_back}
          alt="Previous"
          onClick={prevSlide}
        />
        <img
          className="bg-black w-10 h-10 p-2 rounded-full cursor-pointer"
          src={arrow_next}
          alt="Next"
          onClick={nextSlide}
        />
      </div>

      {/* Professors List */}
      <div className="overflow-hidden flex justify-center flex-col ml-[25%] w-[600px] px-[5%]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid grid-cols-4 gap-2 flex-shrink-0 w-full"
            >
              {professors
                .slice(
                  slideIndex * itemsPerPage,
                  (slideIndex + 1) * itemsPerPage
                )
                .map((prof) => (
                  <div
                    key={prof.id}
                    className="w-full  max-lg:w-[400px] max-md:h-[23em] max-md:w-[300px] max-sm:h-[23em] max-sm:-ml-[1.5rem] max-sm:w-[300px] px-5 py-6 rounded-lg h-[280px] text-white shadow-lg bg-violet-700"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="w-14 h-14 border-2 border-white rounded-full"
                        src={prof.image}
                        alt={prof.name}
                      />
                      <div>
                        <h1 className="font-semibold text-lg">{prof.name}</h1>
                        <h2 className="text-sm text-gray-200">
                          {prof.institution}
                        </h2>
                      </div>
                    </div>
                    <p className="pt-3 text-sm">
                      Choosing to pursue my degree at a U.S. college was one of
                      the best decisions I’ve ever made. The supportive
                      community, state-of-the-art facilities, and commitment to
                      academic excellence have truly exceeded my expectations.
                      Choosing to pursue my degree at a U.S. college was one of
                      the best decisions I’ve ever made. The supportive
                      community, state-of-the-art facilities, and commitment to
                      academic excellence have truly exceeded my expectations.
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professor;
