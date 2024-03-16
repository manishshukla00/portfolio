import React from "react";
import Main from "./component/Main";
import Sidenav from "./component/Sidenav";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Certificate from "./component/Certificate";
import Contact from "./component/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="select-none">
      <Sidenav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
