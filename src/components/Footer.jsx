import React from "react";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { Twitter, Instagram } from "lucide-react";
import projects from "../services/projects";

const Footer = () => {
  // Get the last two projects (latest)
  const latestProjects = projects.slice(-2);

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Section */}
        <div 
          className="flex flex-col items-center md:items-start text-center md:text-left 
                     opacity-0 section-item-animate"
          style={{ animationDelay: '100ms' }}
        >
          <h2 className="text-2xl font-bold text-gradient-animated">Ar Zainab Usama</h2>
          <p className="mt-2 text-gray-300 max-w-xs">
            Crafting clean and modern web experiences with passion. Always learning and building.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://tiktok.com/@muzamilcreates" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-purple-500">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/muzamilhussain" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-purple-500">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-purple-500">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/muzamilcreates?igsh=bWc4eWltc3E5aXpi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-purple-500">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section - Menu */}
        <div 
          className="hidden md:flex flex-col items-center md:items-start text-[14px] 
                     opacity-0 section-item-animate"
          style={{ animationDelay: '300ms' }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gradient-static">Menu</h3>
          {/* --- Change #1: Added hover-text-gradient to menu links --- */}
          <a href="#projects" className="mb-2 text-gray-300 hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Projects</a>
          <a href="#experience" className="mb-2 text-gray-300 hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Experience</a>
          <a href="#education" className="mb-2 text-gray-300 hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Education</a>
          <a href="#contact" className="mb-2 text-gray-300 hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Contact</a>
        </div>

        {/* Right Section - Latest Projects */}
        <div 
          className="flex flex-col items-center md:items-start text-center md:text-left 
                     opacity-0 section-item-animate"
          style={{ animationDelay: '500ms' }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gradient-static">Latest Projects</h3>
          <div className="space-y-4 w-full">
            {latestProjects.slice().reverse().map((project, i) => (
              <div 
                key={i} 
                className="flex flex-row gap-4 items-center text-start group opacity-0 section-item-animate"
                style={{ animationDelay: `${600 + i * 150}ms` }}
              >
                <img
                  className="w-24 h-16 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  src={project.image}
                  alt={project.name}
                />
                <div>
                  {/* --- Change #2: Added hover-text-gradient to project titles --- */}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="block hover:underline font-bold text-white hover-text-gradient">
                    {project.name}
                  </a>
                  <p className="text-[14px] text-gray-300">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div 
        className="text-center bg-gray-900 text-gray-400 text-sm py-4
                   opacity-0 section-item-animate"
        style={{ animationDelay: '800ms' }}
      >
        © {new Date().getFullYear()} Copyright Ar Zainab Usama. | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;