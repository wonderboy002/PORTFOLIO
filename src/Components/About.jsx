import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0e1832]'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='text-white sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-green-600'>
              About
              </p>
            </div>
            <div>
            </div>
           </div>
            <div className='px-4 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 text-white'>
                 <div className='text-4xl font-bold sm:text-right'>
                    hey there, Welcome to my Portfolio have a look around
                 </div>
                 <div>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla architecto est ullam nam illo, fugit repudiandae qui quisquam, sunt distinctio nostrum. Dolorem consectetur odit deserunt sint, quidem voluptates nulla eligendi.
                 </div>
            </div>
      </div>
    </div>
  );
}

export default About;
