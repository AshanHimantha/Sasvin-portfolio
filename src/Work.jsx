import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data/projectsData";

function Work() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);

  // Navigation functions
  const navigateToProject = (newId) => {
    navigate(`/selected-work/${newId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextProject = () => {
    const nextId = projectId === projects.length ? 1 : projectId + 1;
    navigateToProject(nextId);
  };

  // Find the project that matches the ID from URL params
  const selectedProject = projects.find((project) => project.id === projectId);

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center pt-46 lg:pt-20 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} // Reduced from 0.8
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={projectId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Reduced from 1
          className="lg:w-10/12 w-11/12 flex flex-col"
        >
          {/* Project Header - styled like SelectedWork */}
          <motion.div
            className="w-full flex justify-between items-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }} // Added duration, reduced delay
          >
            <h3 className="text-start lg:text-[45px] text-[35px] font-medium mt-10">
               {selectedProject.title}
            </h3>
           
          </motion.div>

		  {/* Project Description */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }} // Reduced delay and added duration
          >
            <p className="lg:text-[25px] text-[20px] text-[#929292] leading-relaxed  text-justify">
              {selectedProject.description}
            </p>
          </motion.div>

          {/* Additional Images - using flex-wrap like SelectedWork */}
          <div className="w-full flex flex-wrap justify-between mt-6">
            {selectedProject.images.slice(0).map((image, index) => (
              <motion.div
                key={index}
                className="w-full md:w-[49%] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }} // Reduced delay increment and added duration
              >
                <div className="border border-gray-200 rounded-lg aspect-[5/3] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={image}
                    alt={`${selectedProject.title} image ${index + 2}`}
                    className="w-full h-full object-cover transition-transform scale-100 hover:scale-105 duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          


          <div className="flex justify-between flex-col items-center mt-2 md:mt-4 mb-10">
            <div className="flex w-full justify-between items-center mt-2 md:mt-4 mb-10">
              <p className="font-thin lg:text-[21px]">
                {selectedProject.category}
              </p>{" "}
              {/* Changed font size */}
              <div className="flex flex-col items-end mt-1 hover:text-gray-400 hover:scale-105 duration-200 cursor-pointer">
                <p className="lg:text-[26px] text-20px md:text-sm text-gray-600 font-medium">
                  VIEW FULL CASE STUDY
                </p>
                <img
                  src="/images/arrow.svg"
                  alt=""
                  srcset=""
                  className="lg:w-72 w-44 mt-2 start-2"
                />
              </div>
            </div>
            <hr className="w-full mt-2 text-[#6A6A6A]" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center items-center space-x-6 my-12">
        {/* Numbered pagination with formatted numbers (01, 02, etc.) */}
        <div className="flex items-center space-x-4">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => navigateToProject(project.id)}
              className={`w-10 h-10 flex items-center justify-center text-[20px] transition-all duration-300 font-medium ${
                projectId === project.id
                  ? "text-black scale-110"
                  : "text-gray-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {project.id.toString().padStart(2, "0")}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={nextProject}
          className="group flex items-center justify-center w-12 h-12 rounded-full text-gray-400 hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover:translate-x-1 transition-transform duration-300"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>
      </div>

      <div className="w-full flex justify-center">
        <div className="lg:w-10/12 w-11/12 border rounded-t-lg border-b-0 px-40 pb-5 flex flex-col lg:flex-row justify-between items-center bg-white ">
          {/* Social Links Row */}
          <div className="flex flex-row items-center gap-4 lg:gap-20 mb-6 lg:mb-0 text-center ">
            <a
              href="#"
              className=" text-[#1C1C1C] pt-4 inline-block hover-underline-animation whitespace-nowrap"
            >
              Dribbble
            </a>
            <a
              href="#"
              className=" text-[#1C1C1C] pt-4 inline-block hover-underline-animation whitespace-nowrap"
            >
              Behance
            </a>
            <a
              href="#"
              className=" text-[#1C1C1C] pt-4 inline-block hover-underline-animation whitespace-nowrap"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className=" text-[#1C1C1C] pt-4 inline-block hover-underline-animation whitespace-nowrap"
            >
              Medium
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-[12.4px] text-[#6A6A6A] text-center whitespace-nowrap  lg:mt-3">
            © 2025 Imeth Sasvin
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
