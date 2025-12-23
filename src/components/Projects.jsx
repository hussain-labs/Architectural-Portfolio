import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import projects from "../services/projects";

// --- Step 1: Create a helper function to calculate the color ---
// This function transitions the HUE from blue (~220) to purple (~270)
const getGradientColor = (index, total) => {
  if (total <= 1) {
    return 'hsl(220, 90%, 60%)'; // Default to blue if only one item
  }
  const startHue = 220; // Blue
  const endHue = 270;   // Purple
  const fraction = index / (total - 1);
  const currentHue = startHue + (endHue - startHue) * fraction;
  return `hsl(${currentHue}, 90%, 60%)`;
};


const Projects = () => {
  const reversedProjects = [...projects].reverse();
  const totalProjects = reversedProjects.length;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 
        className="text-3xl font-bold mb-12 text-center opacity-0 section-item-animate text-gradient-animated"
        style={{ animationDelay: '100ms' }}
      >
        <span className="text-gradient-animated">Projects Timeline</span>
      </h2>

      <div className="relative mb-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 
                       bg-gradient-to-b from-blue-500 to-purple-600 h-full"></div>

        {reversedProjects.map((project, i) => {
          // Get the unique color for this specific project
          const circleColor = getGradientColor(i, totalProjects);

          return (
            <div
              key={i}
              className={`mb-12 flex w-full justify-center opacity-0 section-item-animate ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              style={{ animationDelay: `${200 + i * 200}ms` }}
            >
              <div
                className="relative w-full md:w-5/12 p-6 bg-white rounded-lg shadow-md 
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* --- Step 2: Apply the dynamic color to the desktop circle --- */}
                <span
                  className={`image-glow absolute top-6 w-6 h-6 rounded-full border-4 border-white shadow
                    hidden md:block 
                    ${i % 2 === 0 ? "-right-12 md:-right-3" : "-left-12 md:-left-3"}`}
                  style={{ backgroundColor: circleColor, boxShadow: `0 0 15px ${circleColor}` }}
                >
                  <span
                    className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-blue-500
                      ${i % 2 === 0 ? "left-full w-12" : "right-full w-12"}`}
                  ></span>
                </span>

                {/* --- Step 3: Apply the dynamic color to the mobile circle --- */}
                <span 
                  className="image-glow md:hidden absolute left-1/2 transform -translate-x-1/2 -top-3 w-5 h-5 
                             border-4 border-white shadow rounded-full"
                  style={{ backgroundColor: circleColor, boxShadow: `0 0 15px ${circleColor}` }}
                ></span>

                <span className="text-xl font-semibold mb-2 text-gradient-static">
                  {project.name}
                </span>
                <p className="text-gray-600 mb-2">{project.desc}</p>
                <p className="text-sm text-gray-500 mb-1">Role: {project.role}</p>
                <p className="text-sm text-gray-500 mb-3">
                  <span className="font-semibold">Duration:</span> {project.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <ProjectsGrid />
    </section>
  );
};

export default Projects;