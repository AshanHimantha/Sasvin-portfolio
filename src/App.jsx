import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts.css";
import Navbar from "./components/Navbar";
import MainPage from "./MainPage";
import SelectedWork from "./components/SelectedWork";
import InvertedCursor from "./components/InvertedCursor";

function App() {
  return (
    <>
      <InvertedCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selected-work" element={<SelectedWork />} />
      </Routes>
    </>
  );
}

export default App;
