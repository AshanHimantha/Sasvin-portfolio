import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import SayHello from "./components/Sayhello";
import SelectedWork from "./components/SelectedWork";
import "./styles/animations.css";

function MainPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Add visible class with delay for each component
    const hero = heroRef.current;
    const about = aboutRef.current;
    const work = workRef.current;
    const contact = contactRef.current;

    setTimeout(() => hero.classList.add("visible"), 200);
    setTimeout(() => about.classList.add("visible"), 400);
    setTimeout(() => work.classList.add("visible"), 600);
    setTimeout(() => contact.classList.add("visible"), 800);
  }, []);

  return (
    <div className="font-ppnm w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="lg:px-16 px-0 w-full h-full">
        <div className="fade-in" ref={heroRef}>
          <Hero />
        </div>
        <div className="fade-in" ref={aboutRef}>
          <About />
        </div>
        <div className="fade-in" ref={workRef}>
          <SelectedWork />
        </div>
      </div>
      <div className="fade-in w-full" ref={contactRef}>
        <SayHello />
      </div>
    </div>
  );
}

export default MainPage;
