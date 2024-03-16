import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm John Adams
          </h1>
          <h2 className="flex  sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="max-w-[200px] flex justify-start gap-4 pt-6">
            <Link
              to={"https://www.linkedin.com/in/manish-shukla-79540623b"}
              target="_blank"
            >
              <FaLinkedinIn
                className="cursor-pointer text-blue-800 hover:text-orange-400 border-2 border-blue-800 hover:border-orange-400 rounded-full p-2"
                size={40}
              />
            </Link>
            {/* https://github.com/manishshukla00 */}
            <Link to={"https://github.com/manishshukla00"} target="_blank">
              <FaGithub
                className="cursor-pointer text-blue-800 hover:text-orange-400 border-2 border-blue-800 hover:border-orange-400 rounded-full p-2"
                size={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
