import React from "react";
import mainImg from "../asets/mainImg.jpg";
import img_1 from "../asets/img_1.jpg";
import g24 from "../asets/g24.jpg";
import img_6 from "../asets/img_6.jpg";
import img_4 from "../asets/img_4.jpg";
import disk from "../asets/disk.png";
import gg1 from "../asets/gg1.jpg";

const AboutUs = () => {
  return (
    <div
      name="about"
      //   style={{ backgroundImage: `url(${gg1})` }}
      className="max-w-full bg-black mt-10  flex  flex-col justify-center items-center "
    >
      <div className=" text-center">
        <h1 className="font-semibold text-4xl mb-5">Meet Our Team</h1>
        <p className="text-gray-500 mb-5">
          Here are some of our team , we are proud to be part of the team known
          for it's workmanship and excellence
        </p>
        <h2 className="uppercase text-5xl sm:mb-20 font-extrabold text-gray-800">
          AC metal <span className="font-light">fabricators </span>
        </h2>
      </div>

      {/* Team */}
      <div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-20 mt-5">
          {/* The Founder */}
          <div className="text-center">
            <div className="bg-gradient-to-b  from-white to-[#01308C] hover:bg-gradient-to-b  hover:to-white hover:from-[#01308C]  duration-1000 ease-in-out   w-64  h-64 rounded-full flex items-center justify-center">
              <img src={img_1} alt="abel" className=" w-60 h-60 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              The Founder
            </h1>
            <h2 className="text-md uppercase font-bold">Abel C Ndlovu</h2>
            <p className="text-center text-xs  text-gray-400">
              The onwer and founder of AC Metal Fabricators
            </p>
          </div>

          {/* Manager */}
          <div className="text-center">
            <div className="bg-gradient-to-b  from-white to-[#01308C]   hover:bg-gradient-to-b  hover:to-white hover:from-[#01308C]  duration-1000 ease-in-out    w-64  h-64 rounded-full flex items-center justify-center">
              <img src={img_6} alt="abel" className=" w-60 h-60 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              Sinior Manager
            </h1>
            <h2 className="text-md uppercase font-bold">Fredy M Nkomo</h2>
            <p className="text-center text-xs  text-gray-400">
              Sinior Manager at AC Metal Fabricators
            </p>
          </div>

          {/* Chief Engineer */}
          <div className="text-center">
            <div className="bg-gradient-to-b   from-white to-[#01308C]   hover:bg-gradient-to-b  hover:to-white hover:from-[#01308C]  duration-1000 ease-in-out   w-64  h-64 rounded-full flex items-center justify-center">
              <img
                src={mainImg}
                alt="abel"
                className=" w-60 h-60 rounded-full"
              />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              Chief Engineer
            </h1>
            <h2 className="text-md uppercase font-bold">Tony Brown</h2>
            <p className="text-center text-xs  text-gray-400">
              Chief Engineer at AC Metal Fabricators
            </p>
          </div>

          {/* Supervisor */}
          <div className="text-center">
            <div className="bg-gradient-to-b  from-white to-[#01308C] w-64  hover:bg-gradient-to-b  hover:to-white hover:from-[#01308C]  duration-1000 ease-in-out  h-64 rounded-full flex items-center justify-center">
              <img src={img_4} alt="abel" className=" w-60 h-60 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">Supervisor</h1>
            <h2 className="text-md uppercase font-bold">Braham Noel</h2>
            <p className="text-center text-xs  text-gray-400">
              Steel and Metal Department manager
            </p>
          </div>

          {/* Junior Manager */}
          <div className="text-center">
            <div className="bg-gradient-to-b   from-white to-[#01308C]   hover:bg-gradient-to-b  hover:to-white hover:from-[#01308C]  duration-1000 ease-in-out  w-64  h-64 rounded-full flex items-center justify-center">
              <img src={g24} alt="abel" className=" w-60 h-60 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              Junior Manager
            </h1>
            <h2 className="text-md uppercase font-bold">Belvin T</h2>
            <p className="text-center text-xs  text-gray-400">
              Construction Manager
            </p>
          </div>

          {/* Diak */}
          <div className="text-center">
            <div className="  w-72 h-72 rounded-full flex items-center  justify-center">
              <img
                src={disk}
                alt="abel"
                className="hover:scale-150 hover:rotate-[3600deg]  duration-1000 ease-in-out hover:contrast-150 hover:brightness-150 w-64 h-64 rounded-full"
              />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              {/* AC Metal Fabricator */}
            </h1>
            {/* <h2 className="text-md uppercase font-bold">AC Metal Fabricator</h2> */}
            <p className="text-center text-xs  text-gray-400">
              {/* We ARE AC Metal Fabricators */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
