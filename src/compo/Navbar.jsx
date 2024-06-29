import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../asets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full  z-10
         h-[80px] text-gray-300 flex 
        justify-between items-center px-4 backdrop-blur-lg bg-gradient-to-b  from-[#000] shadow-xl shadow-blue-600/10 "
    >
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" style={{ width: "60px" }} />
        {/* <h1 className="text-xs sm:text-xl font-bold tracking-widest text-gray-300 ">
          A.C.M.F
        </h1> */}
      </div>
      {/* PC Menu */}
      <ul className=" hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={900}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={900}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={900}>
            About
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={900}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={900}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl "
        }
      >
        <li className="hover:text-4xl  text-xl my-4 rounded-xl hover:border-b-2 duration-200 hover:shadow-md hover:shadow-blue-500">
          <span className="hover:tracking-wide">
            {" "}
            <Link onClick={handleClick} to="home" smooth={true} duration={900}>
              Home
            </Link>
          </span>
        </li>
        <li className="hover:text-4xl  text-xl my-4 rounded-xl hover:border-b-2 duration-200 hover:shadow-md hover:shadow-blue-500">
          <span className="hover:tracking-wide">
            <Link
              onClick={handleClick}
              to="services"
              smooth={true}
              duration={900}
            >
              Services
            </Link>
          </span>
        </li>
        <li className="hover:text-4xl  text-xl my-4 rounded-xl hover:border-b-2 duration-200 hover:shadow-md hover:shadow-blue-500">
          <span className="hover:tracking-wide">
            {" "}
            <Link onClick={handleClick} to="about" smooth={true} duration={900}>
              About
            </Link>
          </span>
        </li>
        <li className="hover:text-4xl  text-xl my-4 rounded-xl hover:border-b-2 duration-200 hover:shadow-md hover:shadow-blue-500">
          <span className="hover:tracking-wide">
            {" "}
            <Link
              onClick={handleClick}
              to="gallery"
              smooth={true}
              duration={900}
            >
              Gallery
            </Link>
          </span>
        </li>
        <li className="hover:text-4xl  text-xl my-4 rounded-xl hover:border-b-2 duration-200 hover:shadow-md hover:shadow-blue-500">
          <span className="hover:tracking-wide">
            {" "}
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={900}
            >
              Contact
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
