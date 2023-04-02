import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="border-gray-200 border-b-2 bg-[#0a192F] fixed top-0 left-0 w-full text-white">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:px-8 lg:px-10 xl:px-12 2xl:px-20">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} className="h-8 mr-3" alt="my logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Ali ODABAŞI
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-[#0a192F] duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 hover:bg-[#0a192F] hover:text-white duration-300 ease-in rounded text-black md:text-white md:p-0 cursor-pointer"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 hover:bg-[#0a192F] hover:text-white duration-300 ease-in rounded text-black md:text-white md:p-0 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 hover:bg-[#0a192F] hover:text-white duration-300 ease-in rounded text-black md:text-white md:p-0 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 hover:bg-[#0a192F] hover:text-white duration-300 ease-in rounded text-black md:text-white md:p-0 cursor-pointer"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 hover:bg-[#0a192F] hover:text-white duration-300 ease-in rounded text-black md:text-white md:p-0 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ali-odaba%C5%9F%C4%B1/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/odabasi61"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-pink-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/aliodabas_a/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://myaccount.google.com/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
