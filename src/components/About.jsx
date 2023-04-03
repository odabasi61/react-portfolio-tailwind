import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-bold">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Hi. I'm Ali ODABAŞI, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. My goal as a frontend developer is
              to create user-friendly websites that provide an excellent user
              experience. I believe that every website should be accessible and
              easy to navigate for all users, regardless of their abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
