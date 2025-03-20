import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts.css";
import Navbar from "./components/Navbar"; // Import your Navbar component

import MainPage from "./MainPage";
import SelectedWork from "./components/SelectedWork";

function App() {
  return (
    <>
      <Navbar /> {/* Add Navbar here, outside Routes */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selected-work" element={<SelectedWork />} />
      </Routes>
    </>
  );
}

export default App;
