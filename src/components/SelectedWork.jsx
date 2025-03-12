import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "UI / UX",
    image: "https://cdn.dribbble.com/userupload/7792710/file/original-f348e1173d8e400462fd3bf01efec4fd.png?resize=1504x1128&vertical=center"
  },
  {
    id: 2,
    title: "Project Two",
    category: "Web Design",
    image: "https://cdn.dribbble.com/userupload/13462281/file/original-1aee713c2ef9a32d0ed3da431e128b60.png?resize=1504x1128&vertical=center"
  },
  {
    id: 3,
    title: "Project Three",
    category: "UI / UX",
    image: "https://cdn.dribbble.com/userupload/14103766/file/original-d6521c10214b1870f3a31ec8dca2ea64.png?resize=1504x1128&vertical=center"
  },
  {
    id: 4,
    title: "Project Four",
    category: "Development",
    image: "https://cdn.dribbble.com/userupload/13523127/file/original-7b5cb18f0a102be8c5cfacb51c475c69.png?resize=1024x768&vertical=center"
  }
];

const SelectedWork = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:mt-20 mt-10 px-4 ">
      <div className="w-11/12">
        <h3 className="text-start lg:text-[65px] text-[40px] font-light">
          SELECTED <span className="font-medium">WORK.</span>
        </h3>
      </div>
      
      <div className="w-11/12 mt-10 md:mt-12 flex flex-wrap justify-between ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedWork;