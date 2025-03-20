import React from 'react'

function Sayhello() {
  return (
	<section className="w-full flex justify-center px-4 md:px-6 lg:px-8 mb-10 mt-20" id="contact">
          <div className="border border-[#6A6A6A] rounded-2xl w-full  p-6 md:p-6 lg:p-[115px] lg:pt-14 lg:pb-14">
            <div className="w-full flex flex-col md:flex-row gap-6 ">
              <div className="w-full md:w-1/2">
                <p className="text-[54.5px]  lg:text-[65px]  font-medium leading-14 lg:leading-22">
                  Let's turn your <br />dreams into <br /> reality.
                </p>
                <p className="lg:text-[12.4px] text-[11px] text-[#6A6A6A] mt-6 ">
                  BASED IN COLOMBO - PUSHING CREATIVITY EVERYWHERE
                </p>
              </div>
              <div className="w-full md:w-1/2 flex flex-col lg:items-end items-end text-center justify-center lg:justify-end gap-4 hover:scale-105 duration-300 hover:opacity-75">
                <p className="  text-[35px] lg:text-[36px] self-start lg:self-end ">
                  Say hello, I'll be there.
                </p>
                <img src="/images/arrow.svg" alt="" srcset=""  />
              </div>
            </div>


            <div className="w-full mt-10 flex justify-center p-0 m-0 lg:hidden mb-8">
            <hr className="w-full text-[#6A6A6A]" />
          </div>

            <div className="w-full  flex flex-col md:flex-row justify-between items-center p-0 m-0 lg:mt-32">
              <div className="lg:block hidden">
                <img src="./images/logo.svg" alt="Logo" className="h-8 " />
              </div>

              <div className="grid grid-cols-4 lg:gap-20 gap-5 text-center pb-4 w-full lg:w-auto m-auto">
                <a href="#" className=" font-medium text-start text-[#1C1C1C] pt-4 inline-block hover-underline-animation">
                  Dribbble
                </a>
                <a href="#" className=" font-medium text-[#1C1C1C] pt-4 inline-block hover-underline-animation">
                  Behance
                </a>
                <a href="#" className=" font-medium text-[#1C1C1C] pt-4 inline-block hover-underline-animation">
                  LinkedIn
                </a>
                <a href="#" className=" font-medium text-end text-[#1C1C1C] pt-4 inline-block hover-underline-animation">
                  Medium
                </a>
              </div>

              <div className="lg:block hidden" ><p className="text-[12.4px] text-[#6A6A6A]">© 2025 Imeth Sasvin</p></div>
            </div>
            <div className="w-full text-center mt-5 lg:hidden" ><p className="text-[12.4px] text-[#6A6A6A]">© 2025 Imeth Sasvin</p> </div>

          </div>

        </section>
  )
}

export default Sayhello