import React from "react";

function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center" id="about">
      {/* Mobile and Tablet Screen */}
      <div className="w-full flex flex-col items-center justify-center mt-10 p-4 lg:hidden">
        <p className="self-start text-[10.5px] md:text-[12px] text-[#6A6A6A]">ABOUT</p>

        <p className="uppercase text-justify mt-10 p-4 text-base md:text-lg text-[#6A6A6A]">
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Computer
          Science major with a strong design background, blending technology and
          creativity to craft seamless digital experiences. Currently studying
          at the <strong>University of Westminster</strong> and Informatics
          Institute of Technology.
        </p>

        <img
          src="/images/name.png"
          alt="imeth sasvin"
          className="w-full md:w-3/4 px-4 mt-8"
        />
        <div className="w-full px-4 flex justify-end">
          <button className="uppercase mt-3 text-[16px] md:text-[18px] text-[#6A6A6A] font-medium">
            Download CV
          </button>
        </div>

        <p className="self-start text-[10.5px] md:text-[12px] text-[#6A6A6A] uppercase mt-14">
          Skills
        </p>

        <div className="w-full px-4 flex justify-between text-[28px] md:text-[35px] text-[#1C1C1C] mt-10 items-center gap-2">
          <p>UI / UX</p>
          <hr className="flex-1 h-[0.5px] bg-[#6A6A6A] border-0" />
          <p>LOGO DESIGN</p>
        </div>

        <div className="w-full px-4 text-[28px] md:text-[35px] text-[#1C1C1C]">
          <div className="flex justify-between items-center gap-4">
            <p>GRAPHIC DESIGN</p>
            <hr className="flex-1 text-[#6A6A6A] h-[0.5px]" />
          </div>

          <div className="flex justify-between items-center gap-4">
            <p>BRANDING</p>
            <hr className="w-10 flex-1 text-[#6A6A6A] h-[0.5px]" />
          </div>
          <p className="flex-1">PHOTOGRAPHY.</p>
        </div>

        <hr className="flex-1 text-[#6A6A6A] w-full mt-12" />
      </div>

      {/* Desktop Screen */}
      <div className="w-full flex-col items-center justify-center mt-10 px-20 hidden lg:flex">
        <div className="w-full flex justify-between items-start mt-16">
          <p className="self-start text-[13px] w-1/3">
            ABOUT
          </p>

          <img
            src="/images/name2.png"
            alt="imeth sasvin"
            className="px-4 max-w-sm mr-12 w-1/3"
          />

          <p className="uppercase text-justify w-1/3 text-[16px] text-[#6A6A6A] max-w-sm">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Computer
            Science major with a strong design background, blending technology
            and creativity to craft seamless digital experiences. Currently
            studying at the <strong>University of Westminster</strong> and
            Informatics Institute of Technology.
          </p>
        </div>

        <div className="w-full  flex justify-end -mt-8">
          <button className="uppercase mt-3 text-[16px] text-[#6A6A6A] hover:text-black font-medium hover-underline-animation">
            Download CV
          </button>
        </div>

        <div className="w-full justify-between hidden mt-16 lg:flex">
          <p className="self-start text-sm lg:text-base text-[#6A6A6A] text-[13px] mt-16">
            SKILLS
          </p>

          <div className=" flex flex-col justify-between  text-[#1C1C1C] mt-2 items-center gap-2 ">
            <div className="w-full  flex justify-end text-[45px] text-[#1C1C1C] mt-10 items-center gap-2">
              <p>UI / UX</p>
              <hr className="flex-1 h-[0.5px] bg-[#6A6A6A] border-0 max-w-[50px] min-w-10" />
              <p>LOGO DESIGN</p>
              <hr className="flex-1 h-[0.5px] bg-[#6A6A6A] border-0 max-w-[50px] min-w-10" />
              <p>GRAPHIC DESIGN</p>
            </div>

            <div className="w-full  flex justify-start text-[45px] text-[#1C1C1C]  items-center gap-2">
              <p>BRANDING</p>
              <hr className="flex-1 h-[0.5px] bg-[#6A6A6A] border-0 max-w-[50px] min-w-10" />
              <p>PHOTOGRAHY.</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 flex justify-center p-0 pb-0 mb-0 bottom-0">
          <hr className="w-full bg-gray-100" />
        </div>
      </div>
    </section>
  );
}

export default About;
