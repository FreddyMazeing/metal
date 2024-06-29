import React from "react";
import gg1 from "../asets/gg1.jpg";

const Image = () => {
  return (
    <div className="flex items-center justify-center pt-2 ">
      <div className=" relative">
        <img
          src={gg1}
          alt=""
          className="w-full brightness-125 contrast-125 h-full object-cover pb-2"
        />
        <h1>This Is Our Craft</h1>
        <div className="absolute inset-0 bg-gradient-to-t from-black  z-10"></div>
      </div>
    </div>
  );
};

export default Image;
