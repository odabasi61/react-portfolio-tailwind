import { data } from "../helper/data";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="shadow-xl shadow-[#040c16] group rounded-lg 
              flex justify-center text-center items-center mx-auto h-48 w-80 overflow-hidden"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-300 bg-black/60 w-full h-full pt-4">
                <span className="text-lg md:text-xl font-bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-sm md:text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-sm md:text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
