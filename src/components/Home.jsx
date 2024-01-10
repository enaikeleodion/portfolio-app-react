import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Enaikele Odion
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a software engineer(frontend-dev).
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I’m a performance driven Software Engineer with over 2 years of professional experience. 

By utilizing various tools, I build scalable infrastructure programs which focus on effective Design Systems, Big Data, Web Development, and Server-Side Cloud technologies that solve complex problems.

Also, I am passionate about voluntarily teaching the underprivileged how to program, empowering them with remunerative skills.

Proficient in the following skills;
- Front-end: React.js, TypeScript, Material-UI - UI/UX Design: Tailwind CSS
- Web Tech: HTML, CSS, JavaScript
- Backend Services: Firebase
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
