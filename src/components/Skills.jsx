import React, { useState, useEffect } from "react";
import { mainSkills } from "../services/skills";
import { otherSkills } from "../services/skills";

const ProgressBar = ({ level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 300); 

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
      <div
        className="h-3 rounded-full transition-all duration-1000 ease-out 
                   bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl font-bold mb-10 opacity-0 section-item-animate text-gradient-animated"
          style={{ animationDelay: '100ms' }}
        >
          <span className="text-gradient-animated">My Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {mainSkills.map((skill, i) => (
            <div 
              key={i} 
              className="w-full opacity-0 section-item-animate"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <span className="text-gradient-static">{skill.level}%</span>
              </div>
              
              <ProgressBar level={skill.level} />
            </div>
          ))}
        </div>

        <div className="mt-16">
          {/* <h3 
            className="text-2xl font-semibold mb-4 opacity-0 section-item-animate text-gradient-animated"
            style={{ animationDelay: '800ms' }}
          >
            <span className="text-gradient-animated">Other Skills</span>
          </h3> */}
          {/* <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, i) => (
              <span
                key={i}
                // --- THIS IS THE UPDATED LINE ---
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm font-medium
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300 ease-in-out cursor-pointer
                           opacity-0 section-item-animate other-skill-text-gradient" 
                style={{ animationDelay: `${900 + i * 75}ms` }}
              >
                {skill}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;