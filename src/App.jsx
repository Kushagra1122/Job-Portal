import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobList from "./components/JobList";
import Contact from "./pages/Contact";
import { useTheme } from "./context/Theme";


function App() {
   const [isDark] = useTheme();
 
  return (
    <div>
      <div
        className={` min-h-screen ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-100 "
        }`}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs" element={<JobList />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
