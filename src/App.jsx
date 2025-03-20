import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts.css";
import Navbar from "./components/Navbar";
import MainPage from "./MainPage";
import Work from "./Work";
import InvertedCursor from './components/InvertedCursor';

function App() {
  return (
    <>
      <InvertedCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selected-work/:id" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
