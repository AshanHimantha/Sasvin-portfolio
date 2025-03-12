import "./App.css";
import "./fonts.css";
import SelectedWork from "./components/SelectedWork";
import Sayhello from "./components/Sayhello";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <>

    
      <div className="font-ppnm w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="lg:px-16 px-0 w-full h-full">

          <Hero />

          
          <About />
          <SelectedWork />
          
        </div>

        <Sayhello />


      </div>
    </>
  );
}

export default App;
