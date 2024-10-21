// src/components/Navbar.js
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../context/Theme";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const [isDark,setDark]=useTheme()
  const handleTheme=async()=>{
    setDark(!isDark)
    localStorage.setItem("isDark",!isDark)
  }
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to={"/"} className="text-2xl font-bold text-yellow-600">
          JobPortal
        </Link>

        <div className="hidden text-xl md:flex space-x-6">
          <Link
            to={"/"}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to={"/jobs"}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600"
          >
            Jobs
          </Link>
          <Link
            to={"/contact"}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block  ">
          <div className="flex gap-4">
            <form action="#">
              <input
                type="text"
                placeholder="Search jobs..."
                className="border rounded px-4 py-2 w-64 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-600"
              />
            </form>
            <button
              onClick={handleTheme}
              className="text-gray-300  focus:outline-none"
            >
              {isDark ? (
                <MdOutlineLightMode size={30} />
              ) : (
                <MdOutlineDarkMode size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none"
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {/* Mobile Menu (collapsible) */}
      <div className="flex pb-1 px-4">
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } flex text-xl flex-col gap-2`}
        >
          <Link to={"/"} className="text-gray-200 hover:text-blue-600">
            Home
          </Link>
          <Link to={"/jobs"} className="text-gray-200 hover:text-blue-600">
            Jobs
          </Link>
          <Link to={"/contact"} className="text-gray-200 hover:text-blue-600">
            Contact
          </Link>
          <button
            onClick={handleTheme}
            className="text-gray-300  focus:outline-none"
          >
            {isDark ? (
              <MdOutlineLightMode size={30} />
            ) : (
              <MdOutlineDarkMode size={30} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
