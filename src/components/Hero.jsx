import React from "react";
import "../styles/animations.css";

function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-between mt-20 bg-white" id="#">


      <div className="flex-grow flex flex-col justify-center w-full pt-10 lg:pt-0">
        <div className="flex w-full h-28 lg:mt-30 mt-10 px-6 lg:px-[125px]">
          <div className=" h-full lg:w-1/3 w-1/2">
            <p className="text-[#6A6A6A] lg:text-[13px] text-[10.5px] ">
              COMPUTER SCIENCE STUDENT
            </p>
          </div>
          <div className=" h-full lg:w-1/3 w-1/2 flex justify-end lg:justify-center ">
            <p className="text-[#6A6A6A] lg:text-[13px] text-[10.5px] lg:pr-32">
              BASED IN COLOMBO, LK.
            </p>
          </div>

          <div className=" h-full w-1/3  hidden lg:flex justify-end">
            <p className="hidden lg:block text-[#6A6A6A] text-[16px] max-w-sm text-justify xl:pr-12 ">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PASSIONATE
              UI/UX AND GRAPHIC DESIGNER CRAFTING SEAMLESS EXPERIENCES SINCE 2017.
              WITH A STRONG FOUNDATION IN BRANDING AND VISUAL STORYTELLING, I
              BLEND CREATIVITY AND STRATEGY TO BRING DESIGNS TO LIFE.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <p className=" lg:hidden block text-[#6A6A6A] text-[16px]  max-w-sm text-justify px-6 ">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PASSIONATE
            UI/UX AND GRAPHIC DESIGNER CRAFTING SEAMLESS EXPERIENCES SINCE 2017.
            WITH A STRONG FOUNDATION IN BRANDING AND VISUAL STORYTELLING, I BLEND
            CREATIVITY AND STRATEGY TO BRING DESIGNS TO LIFE.
          </p>
        </div>

        <div className="w-full p-0 m-0 px-1 lg:px-0 mt-20">
          <h1 class="text-[41.5px] sm:text-[50px] md:text-[70px] lg:text-[100px] 2xl:text-[130px]  font-light mb-[-25px] p-0 m-0 lg:pl-28">
            IMETH SASVIN
          </h1>
        </div>
        <div className="w-full text-end xl:text-center px-1 lg:-mt-6">
          <h2 class="text-[41.5px] sm:text-[50px] md:text-[70px]  xl:text-[100px] 2xl:text-[130px]  font-medium lg:pl-40 ml-0">
            UI / UX DESIGNER
          </h2>
        </div>

        <div className="w-full flex flex-col items-center mt-12 2xl:mt-24">
          <div className="lg:w-1/2 w-10/12 flex justify-between lg:px-[125px]">
            <a href="#" className=" inline-block hover-underline-animation">
              Dribbble
            </a>
            <a href="#" className=" inline-block hover-underline-animation">
              Behance
            </a>
            <a href="#" className=" inline-block hover-underline-animation">
              LinkedIn
            </a>
            <a href="#" className=" inline-block hover-underline-animation">
              Medium
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <hr className="w-11/12 bg-gray-100 mb-0 mt-10" />
      </div>
    </section>
  );
}

export default Hero;
