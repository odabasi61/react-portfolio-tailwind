import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 md:px-20 xl:px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#ccd6f6]">
          Ali ODABAŞI
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8892b0]">
          I'm a frontend web developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I have experience working with HTML, CSS, JavaScript, React, and
          TypeScript. I've always been interested in technology and the way it
          can be used to solve real-world problems. That's why I decided to
          pursue a career in web development. I love the creative process of
          designing and building websites that are both beautiful and
          functional.
        </p>
        <Link to="work">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
