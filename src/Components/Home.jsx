import React from 'react';
import { IoDocument } from "react-icons/io5";
const Home = () => {
  return (
    <div className='h-screen w-full bg-[#0e1832]'>
        {/* Container */}
        <div className='max-w-[1000px] text-white flex mx-auto px-8 flex-col  justify-center h-[90%]'>
            <p className='text-[#0be881] text-xl font-semibold'>Hi , My name is </p>
            <h1 className='text-4xl sm:text-6xl text-[#d2dae2] font-extrabold'>Nipun Kupatkar</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a full stack web developer </h2>
            <p className='py-4 max-w-[800px] text-[#8892b0] font-bold'>With expertise in both front-end and back-end technologies, I thrive on bringing creative ideas to life through clean, efficient code.
            Currently i am Learning backend technologies in depth.</p>
            <div>
                <button className='flex p-4 items-center gap-[4px] bg-[#05c46b] rounded-lg duration-500 hover:bg-white hover:text-black  hover:rounded-none'> <IoDocument/>View my Resume</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
