import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        size={40}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="/"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-220 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="p-2">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="/education"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-220 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="p-2">Education</span>
          </a>
          <a
            onClick={handleNav}
            href="/projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-220 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="p-2">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="/certificates"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-220 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="p-2">Certificates</span>
          </a>
          <a
            onClick={handleNav}
            href="/contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="p-2">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="/"
            className="rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="/education"
            className="rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="/projects"
            className="rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="/certificates"
            className="rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="/contact"
            className="rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
