import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

const SelectedWork = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    console.log(`Navigating to project ${id}`);
    try {
      navigate(`/selected-work/${id}`);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center pt-10 px-4 bg-white" id="work">
      <div className="w-17/20 flex justify-between items-center lg:mt-10 ">
        <h3 className="text-start lg:text-[65px] text-[33px] font-light">
          SELECTED <span className="font-medium">WORK.</span>
        </h3>
       
      </div>
      
      <div className="w-10/12 mt-10 md:mt-12 flex flex-wrap justify-between ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.thumbnail}
            title={project.title}
            category={project.category}
            onClick={() => {
              console.log(`Clicking project ${project.id}`);
              handleProjectClick(project.id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;