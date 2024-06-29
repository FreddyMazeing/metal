import React from "react";
import disk from "../asets/disk.png";
import img12 from "../asets/img12.jpg";
import { PiNutFill } from "react-icons/pi";
import { Link } from "react-scroll";

const Homepage = () => {
  return (
    <div
      name="home"
      style={{ backgroundImage: `url(${img12})` }}
      className="content-div h-screen w-full pt-36 flex flex-col text-center bg-gradient-to-t fromb "
    >
      <div className=" sm:max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-4xl  mb-4 dec mx-auto sm:font-bold  font-extrabold tracking-wide text-white ">
          AC METAL
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {""} FABRICATORS
          </span>
        </h1>
        <h2 className="mb-4 font-bold text-xl bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent uppercase tracking-widest">
          Quality~Time~Perfection
        </h2>
        <div className="text-center sm:text-center mx-4 text-wrap ">
          <p className="text-gray-500 sm:text-gray-400 text-lg font-semibold  sm:max-w-[1000px] mb-16 sm:text-xl">
            AC Metal Fabricators, our mission is to offer the community highest
            quality services at offordable prices.We are dedicated to achieving
            this goal by continuously delivering high standards customer
            services and bringing about rapid results:
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 mb-16 font-semibold tracking-wide">
          <a
            name="quotation"
            href="#"
            className="rounded-lg py-4 mx-4 text-sm 
            bg-gradient-to-r  hover:bg-gradient-to-r from-blue-600/20   hover:from-blue-600"
          >
            <span className="text-white">
              {" "}
              <Link to="contact" smooth={true} duration={2000}>
                Get a Quotation
              </Link>
            </span>
          </a>
          <a
            name="email"
            href="#"
            className="py-4 mx-4 rounded-lg 
          bg-gradient-to-l hover:bg-gradient-to-l from-blue-600/20   hover:from-blue-600
           "
          >
            <span className="text-white">
              {" "}
              <Link to="contact" smooth={true} duration={2000}>
                Email Us Today
              </Link>
            </span>
          </a>
        </div>

        {/* backdrop */}
        <div
          className="bg-gradient-to-b  from-blue-600/20 backdrop-blur-lg hover:bg-gradient-to-tl hover:from-blue-700/40 hover:to-black/70 shadow-xl font-light tracking-widest rounded-lg 
        sm:text-xl py-8 gap-5 m-4 mb-16 text-white  grid grid-cols-2 sm:grid-cols-4"
        >
          <div className="text-center mx-6">
            <h1 className="uppercase   text-xs font-extrabold mb-2 ">
              Steel-Works
            </h1>
            <div className="flex flex-col text-md sm:text-xs text-gray-300">
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> industrial equipment</p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2">custom steel structures</p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> architecturial metalwork</p>
              </div>
            </div>
          </div>

          <div className="text-center mx-6">
            <h1 className="uppercase   text-xs font-extrabold mb-2 ">
              Construction
            </h1>
            <div className="flex flex-col text-md sm:text-xs text-gray-300">
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> renovations services</p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2">specialized builds</p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> ground-up construction</p>
              </div>
            </div>
          </div>

          <div className="text-center mx-6">
            <h1 className="uppercase   text-xs font-extrabold mb-2 ">
              Plumbing
            </h1>
            <div className="flex flex-col text-md sm:text-xs text-gray-300">
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> system upgrades</p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2">emergency repairs </p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> system installations</p>
              </div>
            </div>
          </div>

          <div className="text-center mx-6">
            <h1 className="uppercase   text-xs font-extrabold mb-2 ">
              General Work
            </h1>
            <div className="flex flex-col text-md sm:text-xs text-gray-300">
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> maintanance service line</p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2">minor home repairs</p>
              </div>
              <div className="flex items-center">
                <span className="opacity-50">
                  {" "}
                  <PiNutFill size={10} />{" "}
                </span>
                <p className="my-1 sm:my-3 mx-2"> assembling furniture</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly sm:mt-20   sm:py-5 rounded-xl">
          <div className="sm:w-20 sm:h-20 w-10 h-10 text-center flex items-center justify-center  bg-blue-900/10 rounded-full shadow-xl shadow-blue-600 backdrop-blur-md">
            <h1 className="sm:text-5xl text-xl uppercase">A</h1>
          </div>

          <div className="sm:w-20 sm:h-20 w-10 h-10 text-center flex items-center justify-center  bg-blue-900/10 rounded-full shadow-xl shadow-blue-600 backdrop-blur-md">
            <h1 className="sm:text-5xl text-xl uppercase">c</h1>
          </div>

          <div className="sm:w-20 sm:h-20 w-10 h-10 text-center flex items-center justify-center  bg-blue-900/10 rounded-full shadow-xl shadow-blue-600 backdrop-blur-md">
            <h1 className="sm:text-5xl text-xl uppercase">m</h1>
          </div>

          <div className="sm:w-20 sm:h-20 w-10 h-10 text-center flex items-center justify-center  bg-blue-900/10 rounded-full shadow-xl shadow-blue-600 backdrop-blur-md">
            <h1 className="sm:text-5xl text-xl uppercase">f</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
