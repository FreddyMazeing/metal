import React from "react";
import g41 from "../asets/g41.jpg";
import g21 from "../asets/g21.jpg";
import g24 from "../asets/g24.jpg";
import g30 from "../asets/g30.jpg";
import img_5 from "../asets/img_5.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mainImg from "../asets/mainImg.jpg";

const Services = () => {
  return (
    <div
      name="services"
      className="bg-gradient-to-b  from-black  to-black flex flex-col items-center text-center  pt-52"
    >
      <div className=" bg-blue-500/10 rounded-full px-4 py-1 mt-48 sm:mt-2 sm:mb-10 mb-4 hover:rounded-lg duration-300 ease-in-out hover:shadow-md hover:shadow-blue-900">
        <h1 className="uppercase font-semibold tracking-widest hover:tracking-normal text-blue-800/90 duration-300 ease-in-out">
          Services
        </h1>
      </div>
      <h1
        className="font-semibold tracking-widest mb-10  text-xl sm:text-4xl bg-gradient-to-r
         from-blue-300 to-blue-800 hover:bg-gradient-to-r
          hover:to-blue-300  hover:from-blue-800 duration-300 ease-in-out
      bg-clip-text text-transparent"
      >
        A brief description of our company services
      </h1>

      {/* steel-Work */}
      <div className="grid sm:grid-cols-3 gap-4 sm:mt-20 sm:text-start items-center">
        {/* <img src={g21} alt="disk" className="sm:w-96 rounded-lg" /> */}
        <div className=" relative">
          <img
            src={g21}
            alt=""
            className="w-96 h-full object-cover pb-2 rounded-lg mx-auto  sm:mx-0"
          />
          <div className="absolute inset-0 top-36 bg-gradient-to-t from-black hover:opacity-0   z-10"></div>
        </div>
        <div className="sm:h-full sm:w-2 h-2 w-1/2 mx-auto sm:bg-gradient-to-b bg-gradient-to-r from-black via-blue-500  hover:bg-gradient-to-r hover:from-black hover:via-blue-400 shadow-lg shadow-blue-600"></div>

        <div className="">
          <h1 className="text-2xl font-bold tracking-widest mb-4 uppercase bg-gradient-to-r sm:bg-gradient-to-r sm:from-white sm:to-blue-400 from-black via-blue-400 to-black text-transparent bg-clip-text">
            Steel-Work
          </h1>
          <p className="text-justify font-semibold  text-gray-700 sm:text-start mx-4 mb-10  sm:mx-0 sm:mr-4 text-md sm:text-lg tracking-widest">
            Our steel fabrication business specializes in custom steel
            structures, architecturial metalwork, and industrial equipment.We
            have a talented team of welders, machinists, and engineers who can
            bring any metalworking project to life, from custom stairs to
            complex industrial machinery. Our state-of-the-art facility allows
            us to tackle projects of all sizes with precision and efficiency.
          </p>
          {/* <div className="flex justify-start mx-4 items-center"> */}
          <div className="mx-4 sm:mx-0 flex justify-center sm:justify-start  ">
            <button className="  hover:text-blue-900 group  px-6 py-2 my-2 flex  items-center hover:tracking-widest text-white   bg-blue-600  duration-500 ease-in-out">
              steel work
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* Construction */}
      <div className="grid sm:grid-cols-3 mt-20 sm:mt-64 gap-4 sm:text-start items-center">
        {/* <img src={g24} alt="disk" className="rounded-lg sm:hidden sm:w-96" /> */}
        <div className=" relative sm:hidden">
          <img
            src={g24}
            alt=""
            className="w-96 h-full  object-cover pb-2 rounded-lg mx-auto sm:mx-0 "
          />
          <div className="absolute inset-0 top-36 bg-gradient-to-t from-black  hover:opacity-0  z-10"></div>
        </div>
        <div className="sm:h-full sm:hidden sm:w-2 h-2 w-1/2 mx-auto sm:bg-gradient-to-b bg-gradient-to-r from-black via-blue-500 hover:bg-gradient-to-r hover:from-black hover:via-blue-400 shadow-lg shadow-blue-600"></div>
        <div className="">
          <h1 className="text-2xl font-bold tracking-widest  mb-4  bg-gradient-to-r sm:from-white sm:to-blue-400 from-black via-blue-400 to-black text-transparent bg-clip-text uppercase">
            Construction
          </h1>
          <p className="text-justify  sm:text-start font-semibold  text-gray-700 mx-4 mb-10  sm:mx-0 sm:mr-4 text-md sm:text-lg tracking-widest">
            The construction division of our company handles a wide range of
            commercial and residential building projects. Whether it's ground-up
            construction, renovations, or specialized builds, our experienced
            project managers and skilled tradespeople diliver high-quality work
            on time and within budget.We pride ourselves on our attention to
            detail and our commitment to safety on the job site.
          </p>
          {/* <div className="flex justify-start mx-4 items-center"> */}
          <div className="mx-4 sm:mx-0 flex justify-center sm:justify-start  ">
            <button className=" hover:text-blue-900 group  px-6 py-2 my-2 flex  items-center hover:tracking-widest text-white   bg-blue-600   duration-500 ease-in-out">
              construction
            </button>
          </div>
          {/* </div> */}
        </div>
        {/* <img
          src={g24}
          alt="disk"
          className="sm:rounded-lg hidden sm:w-96 sm:block"
        /> */}
        <div className="sm:h-full hidden sm:block sm:w-2 h-2 w-1/2 mx-auto sm:bg-gradient-to-b bg-gradient-to-r from-black via-blue-500 "></div>
        <div className=" relative hidden sm:block">
          <img
            src={g24}
            alt=""
            className="w-96 h-full object-cover pb-2 rounded-lg mx-auto sm:mx-0 brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t top-36 from-black hover:opacity-0  z-10"></div>
        </div>
      </div>

      {/* Plumping */}
      <div className="grid sm:grid-cols-3 mt-20 gap-4 sm:mt-64 sm:text-start items-center">
        {/* <img src={g41} alt="disk " className="rounded-lg sm:w-96  " /> */}
        <div className=" relative ">
          <img
            src={g41}
            alt=""
            className="w-96 h-full object-cover   pb-2 rounded-lg mx-auto sm:mx-0 brightness-125"
          />
          <div className="absolute inset-0   bg-gradient-to-t from-black  hover:opacity-0  z-10"></div>
        </div>
        <div className="sm:h-full  sm:w-2 h-2 w-1/2 mx-auto sm:bg-gradient-to-b bg-gradient-to-r from-black via-blue-500 shadow-lg shadow-blue-600 "></div>

        <div className="">
          <h1 className="text-2xl font-bold tracking-widest mb-4 uppercase bg-gradient-to-r sm:from-white sm:to-blue-400 text-transparent bg-clip-text  from-black via-blue-400 to-black ">
            Plumbing
          </h1>
          <p className="text-justify  sm:text-start font-semibold  text-gray-700 mx-4 mb-10  sm:mx-0 sm:mr-4 text-md sm:text-lg tracking-widest">
            Our plumping services cover everything from emergency repairs to
            full-scale plumping system installations and upgrades.Our licensed
            and insured plumbers are experts in both residential and commercial
            plumbing, adept at troubleshooting issues and implementing
            efficiency, long-lasting solutions.We strive to provide prompt,
            professional service with minimal disruption to your daily
            operations.
          </p>
          {/* <div className="flex justify-start mx-4 items-center"> */}
          <div className="mx-4 sm:mx-0 flex justify-center sm:justify-start  ">
            <button className=" hover:text-blue-900 group  px-6 py-2 my-2 flex  items-center hover:tracking-widest text-white   bg-blue-600   duration-500 ease-in-out">
              plumbing
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* General Handyman */}
      <div className="grid sm:grid-cols-3 mt-20 sm:mt-64 sm:text-start items-center">
        {/* <img src={g30} alt="disk" className="rounded-lg sm:hidden sm:w-96 " /> */}
        <div className=" relative sm:hidden pt-2">
          {/* <img
            src={g30}
            alt=""
            className="w-96 h-full  object-cover pb-2 rounded-lg mx-auto sm:mx-0 hover:brightness-150"
          /> */}
          <div className=" relative  sm:hidden">
            <img
              src={g30}
              alt=""
              className="w-96 h-full object-cover pb-2 rounded-lg mx-auto sm:mx-0 brightness-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t hover:opacity-0 from-black  z-10"></div>
          </div>
        </div>
        <div className="sm:h-full sm:hidden sm:w-2 h-2 w-1/2 mx-auto sm:bg-gradient-to-b bg-gradient-to-r shadow-lg shadow-blue-600 from-black via-blue-500 "></div>

        <div className="">
          <h1 className="text-2xl font-bold tracking-widest mb-4 mt-4 uppercase bg-gradient-to-r text-transparent bg-clip-text sm:from-white sm:to-blue-400  from-black via-blue-400 to-black ">
            General Handyman
          </h1>
          <p className="text-justify  sm:text-start font-semibold  text-gray-700 mx-4 mb-10  sm:mx-0 sm:mr-4 text-md sm:text-lg tracking-widest">
            For those smaller jobs and household tasks that fall outside the
            scope of our other service line, our general handyman division is
            here to help.From minor home repairs and maintanance to assembling
            furniture and appliances, our skilled handymen can tackle a wide
            variety of tasks with care and precision. We're your one-stop-shop
            for all those pesky little jobs that you just don't have time or
            expertise to handle yourself.
          </p>
          {/* <div className="flex justify-start mx-4 items-center"> */}
          <div className="mx-4 sm:mx-0 flex justify-center sm:justify-start  ">
            <button className=" hover:text-blue-900 group hover:tracking-widest px-6 py-2 my-2 flex items-center text-white   bg-blue-600   duration-500 ease-in-out">
              handyman
            </button>
          </div>
          {/* </div> */}
        </div>
        {/* <img
          src={g30}
          alt="disk"
          className="rounded-lg sm:w-96 hidden sm:block "
        /> */}
        <div className="sm:h-full hidden sm:block  sm:w-2 h-2 w-1/2 mx-auto sm:bg-gradient-to-b bg-gradient-to-r from-black via-blue-500 "></div>

        <div className=" relative hidden sm:block">
          <img
            src={g30}
            alt=""
            className="w-96 h-full object-cover pb-2 rounded-lg mx-auto sm:mx-0 brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t hover:opacity-0 from-black  z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
