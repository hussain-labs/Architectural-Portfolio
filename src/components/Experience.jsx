import React from "react";
import { Briefcase } from "lucide-react";
import experiences from "../services/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading with animated gradient */}
        <h2 
          className="text-3xl font-bold mb-12 text-start opacity-0 section-item-animate "
          style={{ animationDelay: '100ms' }}
        >
          <span className="text-gradient-animated">Work Experience</span>
        </h2>

        {/* Timeline container with gradient line */}
        <div className="relative ml-4">
          {/* This div creates the vertical gradient line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
          
          {experiences.map((exp, index) => (
            // Staggered animation for each timeline entry
            <div 
              key={index} 
              className="mb-10 ml-6 group opacity-0 section-item-animate"
              style={{ animationDelay: `${200 + index * 200}ms` }}
            >
              {/* Icon with gradient and glow effect */}
              <span className="image-glow absolute -left-11 flex items-center justify-center w-10 h-10 
                               bg-gradient-to-br from-blue-500 to-purple-600 
                               rounded-full ring-4 ring-blue-100 shadow-md 
                               group-hover:scale-110 transition-transform">
                <Briefcase className="text-white w-5 h-5" />
              </span>

              {/* Card with added hover lift effect */}
              <div className="bg-white p-6 rounded-xl mx-2 shadow-md 
                              hover:shadow-xl hover:-translate-y-1
                              transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">
                  {/* Job title with static gradient */}
                  <span className="text-gradient-static">{exp.title}</span> – <span className="text-blue-600">{exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;