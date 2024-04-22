import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [flag,setFlag]=useState(false);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-4 bg-[#0e1832]">
      <div>
        <img src={Logo} alt="Logo" style={{width : "76px",height : "70px" ,borderRadius : "100%"}} />
      </div>
      {/* Menu */}
      
        <ul className="text-white hidden md:flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact Us</li>
        </ul>
      
       
      {/* Hamburger menu */}
      <div onClick={(e)=>setFlag(!flag)} className="md:hidden z-10 text-white">
        {
            !flag?<GiHamburgerMenu style={{fontSize : '30px',color : 'white'}}/>:<ImCross/>
        }
      </div>

      {/* mobile menu */}
      
        <ul className={!flag?'hidden':'text-white absolute top-0 left-0 font-bold bg-[#0e1832] w-full flex flex-col items-center justify-center h-screen md:hidden'}>
            <li className="py-6 cursor-pointer text-2xl">Home</li>
            <li className="py-6 cursor-pointer text-2xl">About</li>
            <li className="py-6 cursor-pointer text-2xl">Skills</li>
            <li className="py-6 cursor-pointer text-2xl">Contact Us</li>
            
        </ul>
     
    </div>
  );
};

export default Navbar;
