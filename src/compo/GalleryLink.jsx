import React, { useState } from "react";
import Gallery from "./Gallery";

const GalleryLink = () => {
  const [showGallery, setShowGallery] = useState(false);
  const handleClick = () => {
    setShowGallery(true);
  };

  return (
    <div
      name="gallery"
      className="max-w-full mb-4 sm:pb-16 text-center flex mt-16 sm:mt-64 justify-center"
    >
      <div>
        <h1
          className="font-semibold tracking-widest text-xl sm:mb-4 sm:text-4xl bg-gradient-to-r
         from-blue-300 to-blue-800
      bg-clip-text text-transparent"
        >
          Check Out Our Gallery
        </h1>
        <p className="text-lg sm:text-2xl text-gray-500 mx-4 sm:mb-42">
          This is where you will find most of our recent work.Take a look, find
          similar designs and contact us,
          <span
            className="font-bold text-sm text-transparent bg-gradient-to-r from-blue-800 to-blue-300 
        bg-clip-text"
          >
            {""} WE ARE HERE TO SERVE YOU!
          </span>
        </p>
        <div className="mt-10">
          <button
            className="text-2xl bg-gradient-to-r from-blue-300
           to-blue-800  hover:bg-gradient-to-r hover:to-blue-300 
            hover:from-blue-800 duration-300 ease-in-out rounded-lg py-2 mb-10  px-8 "
            onClick={() => setShowGallery(!showGallery)}
          >
            View
          </button>
          {showGallery ? <Gallery /> : null}
        </div>
      </div>
    </div>
  );
};

export default GalleryLink;
