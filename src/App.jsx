import { useState } from "react";
import "./App.css";
import "./fonts.css";

function App() {
  return (
    <>
      <div className="font-ppnm h-screen w-screen m-0 p-0 overflow-x-hidden flex justify-center inset-0">
        <div className="lg:px-16 px-0 w-full h-full">
          <div className="w-full ">
            <header class="flex justify-between items-center gap-5 p-5 px-[66px] relative">
              <div class="flex items-center gap-5">
                <img src="./images/logo.svg" alt="Logo" class="h-10" />
              </div>
              <nav class="flex items-center gap-10">
                <a
                  href="#"
                  class="relative text-black text-lg hover:underline transition duration"
                >
                  Work
                </a>
                <a
                  href="#"
                  class="relative text-black text-lg hover:underline transition"
                >
                  About me
                </a>
                <button class="px-4 py-2 border border-black rounded-md text-lg hover:bg-black hover:text-white transition ">
                  Say Hello
                </button>
              </nav>
            </header>
          </div>

          <div className="flex w-full h-28  lg:mt-30 mt-10 px-6 lg:px-[125px] ">
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
              <p className="hidden lg:block text-[#6A6A6A] text-[16px] max-w-sm text-justify lg:pr-12 ">
                PASSIONATE UI/UX AND GRAPHIC DESIGNER CRAFTING SEAMLESS
                EXPERIENCES SINCE 2017. WITH A STRONG FOUNDATION IN BRANDING AND
                VISUAL STORYTELLING, I BLEND CREATIVITY AND STRATEGY TO BRING
                DESIGNS TO LIFE.
              </p>
            </div>
          </div>

          <div className=" w-full flex justify-center ">
            <p className=" lg:hidden block text-[#6A6A6A] text-[16px]  max-w-sm text-justify px-6 ">
              PASSIONATE UI/UX AND GRAPHIC DESIGNER CRAFTING SEAMLESS
              EXPERIENCES SINCE 2017. WITH A STRONG FOUNDATION IN BRANDING AND
              VISUAL STORYTELLING, I BLEND CREATIVITY AND STRATEGY TO BRING
              DESIGNS TO LIFE.
            </p>
          </div>

          <div className="w-full  p-0 m-0 px-1 lg:px-0 mt-28">
            <h1 class="lg:text-[100px] 2xl:text-[130px] text-[41.5px] font-light mb-[-25px] p-0 m-0 lg:pl-28">
              IMETH SASVIN
            </h1>
          </div>
          <div className="w-full text-end lg:text-center px-1 lg:-mt-14">
            <h2 class="lg:text-[100px] 2xl:text-[130px] text-[41.5px] font-medium lg:pl-40 ml-0">
              UI / UX DESIGNER
            </h2>
          </div>

          <div className=" w-full flex justify-center mt-12">
            <div className="lg:w-1/2 w-10/12  grid grid-cols-4 gap-4 lg:gap-0 lg:px-[125px] text-center ">
              <a href="#" class="hover:text-gray-400">
                Dribbble
              </a>
              <a href="#" class="hover:text-gray-400">
                Behance
              </a>
              <a href="#" class="hover:text-gray-400">
                LinkedIn
              </a>
              <a href="#" class="hover:text-gray-400">
                Medium
              </a>
            </div>
          </div>

          <div className="w-full mt-10 flex justify-center">
            <hr className="w-5/6 bg-gray-100" />
          </div>


          <div className="h-20 mt-48 w-full bg-amber-900"></div>
        </div>

      </div>
    </>
  );
}

export default App;
