import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Mhdsyd14</div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white">
            Home
          </a>
          <a href="#skill" className="text-white">
            Skill
          </a>
          <a href="#project" className="text-white">
            Project
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-amber-400 p-4 rounded mt-3 shadow-lg">
          <a href="#home" className="block text-white p-2">
            Home
          </a>
          <a href="#skill" className="block text-white p-2">
            Skill
          </a>
          <a href="#project" className="block text-white p-2">
            Project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
