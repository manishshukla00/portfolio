import React from "react";
// import Degree from "../assets/Degree.jpg";
import Frontend from "../assets/frontend-Certificate.jpg";
import Javascript from "../assets/JavaScript.jpg";
import Nodejs from "../assets/NodeJs.jpg";
import MernOne from "../assets/MERN-1.jpg";
import MernTwo from "../assets/MERN-2.jpg";
import ReactOne from "../assets/React.jpg";
import Js from "../assets/js.jpg";
import DSA from "../assets/DSA.jpg";
import sOne from "../assets/Scalar-1.jpg";
import sTwo from "../assets/Scalar-2.jpg";
import sThree from "../assets/Scalar-3.jpg";
// import sFour from "../assets/Scalar-4.jpg";
import sFive from "../assets/Scalar-5.jpg";
import Certificateitem from "./Certificateitem";

const Certificate = () => {
  return (
    <div id="certificates" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Certificates
      </h1>
      <p className="text-center py-8">
        Graduation Degree,Certificate of frontend,javascript and nodejs.
      </p>
      <div className="grid sm:grid-cols-2  gap-12">
        {/* <Certificateitem img={Degree} title="First App" /> */}
        <Certificateitem img={MernOne} title="First App" />
        <Certificateitem img={MernTwo} title="First App" />
        <Certificateitem img={Frontend} title="Second App" />
        <Certificateitem img={Javascript} title="Third App" />
        <Certificateitem img={Nodejs} title="Forth App" />
        <Certificateitem img={ReactOne} title="Third App" />
        <Certificateitem img={Js} title="Third App" />
        <Certificateitem img={DSA} title="Third App" />
        <Certificateitem img={sOne} title="Third App" />
        <Certificateitem img={sTwo} title="Third App" />
        <Certificateitem img={sThree} title="Third App" />
        {/* <Certificateitem img={sFour} title="Third App" /> */}
        <Certificateitem img={sFive} title="Third App" />
      </div>
    </div>
  );
};

export default Certificate;
