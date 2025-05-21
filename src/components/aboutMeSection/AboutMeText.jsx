import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-centermd:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I,Pritam Mondal, am a passionate web developer with a strong foundation
        in HTML, CSS, and JavaScript. I love creating beautiful and functional
        websites that provide an excellent user experience. I am always eager to
        learn new technologies and improve my skills.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-white text-lg flex items-center mt-10 hover:bg-orange hover:text-black trsnsition-all duration-500 cursor-pointer md:self-start sm:self-center">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
