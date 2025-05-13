import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <img
        src="/images/HexaPic01.png"
        alt="Pritam Mondal"
        className="max-h-[500px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[550px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroPic;
