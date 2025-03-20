import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import SayHello from "./components/Sayhello";
import SelectedWork from "./components/SelectedWork";

function MainPage() {
  return (
    <div className="font-ppnm w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="lg:px-16 px-0 w-full h-full">

        <Hero />
        <About />
        <SelectedWork />
      </div>
      <SayHello />
    </div>
  );
}

export default MainPage;
