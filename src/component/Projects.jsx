import React from "react";
import one from "../assets/one.avif";
import two from "../assets/two.avif";
import three from "../assets/three.avif";
import four from "../assets/four.avif";
import Projectsitem from "./Projectsitem";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        All Projects details and related inofrmations are given below.
      </p>
      <div className="grid sm:grid-cols-2  gap-12">
        <Projectsitem
          Url={"https://blog-mern-ruby.vercel.app/"}
          img={one}
          title="Blog-App"
          description="React, Node JS, Express JS, Mongodb"
        />
        <Projectsitem
          Url={"https://sarkariexamshub.onrender.com"}
          img={two}
          title="Sarkari Exam Hub Portal"
          description="React, Node JS, Express JS, Mongodb"
        />
        <Projectsitem
          Url={"https://onlineshop-mern.vercel.app/"}
          img={three}
          title="E-Commerce App"
          description="React, MUI, Tailwind CSS, Tailwind UI"
        />
        <Projectsitem
          Url={"https://detail-app.vercel.app/"}
          img={four}
          title="Portfolio"
          description="React, Tailwind CSS"
        />
      </div>
    </div>
  );
};

export default Projects;
