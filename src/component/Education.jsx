import React from "react";
import Workitem from "./EducationItem";

const data = [
  {
    type: "Training",
    title: "Web Development",
    subject: "Frontend",
    details:
      "I completed Front-end Web Development course from Internshala Trainings.It consisted of HTML,CSS,Bootstrap,Javascript.And scored 81% marks in the final assessment of this course.",
  },
  {
    type: "B.Tech",
    title: "Graduation",
    subject: "Computer Science",
    details:
      "I completed my graduation in computer science & engineerig with first class passed from A.P.J. abdul kalam technical University,lucknow.",
  },
  {
    type: "Intermediate",
    title: "12th",
    subject: "Science",
    details:
      "I did my intermediate with Science stream and passed with first class from K.V. old cantt Prayagraj affiliated by C.B.S.E..",
  },
  {
    type: "High School",
    title: "10th",
    subject: "Science",
    details:
      "I did my High School with Science stream and passed with first class from K.V. old cantt Prayagraj affiliated by C.B.S.E..",
  },
];

const Education = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] h-screen m-auto md:pl-20 px-4 py-4"
    >
      <h1 className="text-4xl font-bold text-center mb-20 text-[#001b5e]">
        Education
      </h1>
      {data.map((item, idx) => {
        return (
          <Workitem
            key={idx}
            type={item.type}
            title={item.title}
            subject={item.subject}
            details={item.details}
          />
        );
      })}
    </div>
  );
};

export default Education;
