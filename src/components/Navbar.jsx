import { Link } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow shadow-blue-200 animate-slide-down">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center shadow shadow-blue-200 md:shadow-none">
        {/* Logo with Gradient */}
        <a href="/">
        <h1 className="text-2xl font-bold text-gradient-animated">
          Ar Zainab Usama
        </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-[16px] text-gray-700 font-medium items-center text-gradient-animated">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          {/* <li><a href="#education" className="hover:text-blue-600">Education</a></li> */}
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <li>
            {/* Desktop Download Button with Gradient */}
            
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden relative w-8 h-6 flex flex-col justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-[11px]" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[11px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out px-6 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium ">
          <li className="opacity-0 menu-item-animate text-gradient-static" style={{ animationDelay: '100ms' }}>
            <a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="opacity-0 menu-item-animate text-gradient-static" style={{ animationDelay: '200ms' }}>
            <a href="#skills" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li className="opacity-0 menu-item-animate text-gradient-static" style={{ animationDelay: '300ms' }}>
            <a href="#projects" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="opacity-0 menu-item-animate text-gradient-static" style={{ animationDelay: '400ms' }}>
            <a href="#experience" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Experience</a>
          </li>
          <li className="opacity-0 menu-item-animate text-gradient-static" style={{ animationDelay: '500ms' }}>
            <a href="#education" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Education</a>
          </li>
          <li className="opacity-0 menu-item-animate text-gradient-static" style={{ animationDelay: '600ms' }}>
            <a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
          <li className="w-full flex mx-auto opacity-0 menu-item-animate" style={{ animationDelay: '700ms' }}>
            {/* Mobile Download Button with Gradient */}
            <a
              href="/cv/Muzamil_Hussain.pdf"
              download="Muzamil Hussain.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full px-6 text-center text-white py-3 rounded-lg shadow transition button-gradient-animated hover:scale-105"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;