import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Enaikele odion</p>
            </div>
            <div>
              <p>i am a self-taught software developer with experience spanning the development and maintenance of software products. i have 2 years of experience building core web applications with C# and JavaScript programming language.
               he possesses strong communication skills, a solid work ethic, and a history of building maintainable codebases.
              he is also a Social Entrepreneur and community enthusiast who takes pleasure in participating and sharing knowledge at technology conferences and events.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
