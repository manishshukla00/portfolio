import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../assets/image.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center scale-x-[1]"
        src={Image}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-orange-800">
            I'm Manish Shukla
          </h1>
          <h2 className="flex  sm:text-3xl text-2xl pt-4">
            <TypeAnimation
              sequence={["MERN Developer", 2000, "React Developer", 2000]}
              wrapper="div"
              className="text-blue-800"
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
