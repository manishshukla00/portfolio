import React from "react";

const EducationItem = ({ type, title, subject, details }) => {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l-2 border-x-blue-800">
        <li className="mb-10 ml-10">
          <div className="absolute w-4 h-4 bg-orange-400 rounded-full mt-1.5 -left-2 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              {type}
            </span>
            <span className="text-lg font-semibold text-[#001b5e]">
              {title}
            </span>
            <span className="my-1 text-sm font-normal text-stone-600">
              {subject}
            </span>
          </p>
          <p className="mt-4 text-base font-normal text-stone-950">{details}</p>
        </li>
      </ol>
    </>
  );
};

export default EducationItem;
