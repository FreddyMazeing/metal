import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 duration-1000 ease-in-out hover:from-blue-950 hover:bg-gradient-to-bl hover:to-black text-gray-500 p-4 flex flex-col items-center  sm:justify-between ">
      <nav className="grid grid-cols-4 m-6 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-20 text-center">
        <div>
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
        </div>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
        <a href="#" className="hover:text-gray-300">
          Work
        </a>
        <a href="#" className="hover:text-gray-300">
          Legal
        </a>
      </nav>
      <div className="flex items-center mb-4">
        <a
          href="https://web.facebook.com/abel.chiyangwa.50/photos"
          className="mx-4"
        >
          <FaFacebook size={30} />
        </a>
        <a href="#" className="mx-4">
          <FaTwitter size={30} />
        </a>
        <a href="whatsapp://send?phone=+27791083663" className="mx-4">
          <FaWhatsapp size={30} />
        </a>
      </div>
      <div className=" copyright text-xs text-center text-wrap  ">
        {" "}
        Copyright &copy; {new Date().getFullYear()} All rights reserved by AC
        Metal Fabricators Company
      </div>
    </footer>
  );
};

export default Footer;
