import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Heading from "./Components/Heading";
import Video from "./Components/Video";
import Program from "./Components/Program";
import Campus from "./Components/Campus";
import Contact from "./Components/Contact";
import Professor from "./Components/Professor";
import Footer from "./Components/Footer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      {/* About Section */}
      <div>
        <Heading title="About Us" subTitle="What is your about?" />
        <About setPlayState={setPlayState} />
      </div>

      <div className="pt-[2rem]">
        <Heading
          title="Our Programs"
          subTitle="The program provides good educated"
        />
        <Program />
      </div>

      <div className="pt-[2rem]">
        <Heading title="Our Campus" subTitle="Campus library and reseach " />
        <Campus />
      </div>

      <div className="pt-[2rem]">
        <Heading
          title="University's Professors"
          subTitle="Our professor full experiences"
        />
        <Professor />
      </div>

      <div className="pt-[2rem]">
        <Heading title="Contact Us" subTitle="Contact throught tips " />
        <Contact />
      </div>

      <Footer />

      {/* Video Section */}
      <Video playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
