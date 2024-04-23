import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-4 bg-[#0e1832]">
      <div>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "76px", height: "70px", borderRadius: "100%" }}
        />
      </div>
      {/* Menu */}

      <ul className="text-white hidden md:flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact Us</li>
      </ul>

      {/* Hamburger menu */}
      <div
        onClick={(e) => setFlag(!flag)}
        className="md:hidden z-10 text-white"
      >
        {!flag ? (
          <GiHamburgerMenu style={{ fontSize: "30px", color: "white" }} />
        ) : (
          <ImCross />
        )}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !flag
            ? "hidden"
            : "text-white absolute top-0 left-0 font-bold bg-[#0e1832] w-full flex flex-col items-center justify-center h-screen md:hidden"
        }
      >
        <li className="py-6 cursor-pointer text-2xl">Home</li>
        <li className="py-6 cursor-pointer text-2xl">About</li>
        <li className="py-6 cursor-pointer text-2xl">Skills</li>
        <li className="py-6 cursor-pointer text-2xl">Contact Us</li>
      </ul>

      {/* social icons */}
      <div className="social hidden lg:flex fixed flex-col top-[35%] left-0 z-10 ">
        <ul className="flex flex-col text-white">
          <li className="w-[118px] h-[40px] flex items-center ml-[-60px] hover:ml-[0px] duration-300 bg-[#282c34]">
            <a href="#" className="w-full flex gap-[15px] items-center">
              Github
              <FaGithub style={{ color: "white", fontSize: "25px" }} />
            </a>
          </li>
          <li className="w-[132px] h-[40px] flex items-center  ml-[-74px] hover:ml-[0px] duration-300 bg-[#FFA500]">
            <a href="#" className="w-full flex  gap-[15px] items-center">
              Leetcode
              <SiLeetcode style={{ color: "white", fontSize: "25px" }} />
            </a>
          </li>

          <li className="w-[128px] h-[40px] flex  items-center ml-[-70px] hover:ml-[0px] duration-300 bg-[#0077b5]">
            <a href="#" className="w-full flex  gap-[15px]  items-center">
              LinkedIn
              <FaLinkedin style={{ color: "white", fontSize: "25px" }} />
            </a>
          </li>
          <li className="w-[138px] h-[40px] flex  items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#E1306C]">
            <a href="#" className="w-full flex  gap-[15px]  items-center">
              Instagram
              <FaInstagram style={{ color: "white", fontSize: "25px" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
