import React from "react";

const Certificateitem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-full w-full shadow-xl  shadow-gray-400 rounded-2xl">
      <img src={img} alt="/" className="w-[100%] h-full rounded-xl" />
    </div>
  );
};

export default Certificateitem;
