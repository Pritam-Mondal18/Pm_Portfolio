import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="py-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] max-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
