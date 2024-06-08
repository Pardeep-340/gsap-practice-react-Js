import React from "react";
import ImageOne from "../assets/image/png/Image.png";
import ImageTwo from "../assets/image/png/Imagetwo.png";
import ImageThree from "../assets/image/png/imagethree.png";
import ImageFour from "../assets/image/png/imagefour.png";
const DreamTempleJourney = () => {
  return (
    <div className="container max-w-[1140px] mx-auto pt-10">
      <div className="flex justify-between items-center">
        <button className="bg-yellow-800 px-3 py-2 rounded-md">btn1</button>
        <span className="bg-slate-600 h-[4px] w-full"></span>
        <button className="bg-yellow-800 px-3 py-2 rounded-md">btn2</button>
        <span className="bg-slate-600 h-[4px] w-full"></span>
        <button className="bg-yellow-800 px-3 py-2 rounded-md">btn3</button>
        <span className="bg-slate-600 h-[4px] w-full"></span>
        <button className="bg-yellow-800 px-3 py-2 rounded-md">btn4</button>
      </div>
      <div className="flex">
          <img src={ImageOne} alt="" />
          <img src={ImageTwo} alt="" />
          <img src={ImageThree} alt="" />
          <img src={ImageFour} alt="" />
      </div>
    </div>
  );
};

export default DreamTempleJourney;
