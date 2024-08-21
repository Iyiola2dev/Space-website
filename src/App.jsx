import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <div className="w-full h-screen bg-[url('https://res.cloudinary.com/dtlejpoxq/image/upload/v1724247731/space/background-home-mobile_ockwvn.jpg')] md:bg-[url('https://res.cloudinary.com/dtlejpoxq/image/upload/v1724247732/space/background-home-tablet_rptx9v.jpg')] lg:bg-[url('https://res.cloudinary.com/dtlejpoxq/image/upload/v1724247731/space/background-home-desktop_lcdlmr.jpg')]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/destination" element={<Destination/>}></Route>
        <Route path="/crew" element={<Crew/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
