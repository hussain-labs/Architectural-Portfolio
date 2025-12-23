import React from "react";
import img1 from "../assets/P1.jpeg";
import img2 from "../assets/P2.jpeg";
import img3 from "../assets/P3.jpeg";
import img4 from "../assets/P4.jpeg";
import img5 from "../assets/P5.jpeg";
import img6 from "../assets/P6.jpeg";
import img7 from "../assets/P7.jpeg";
import img8 from "../assets/P8.jpeg";
import img9 from "../assets/P9.jpeg";
import img10 from "../assets/P10.jpeg";
import img11 from "../assets/P11.jpeg";
import img12 from "../assets/P12.jpeg";
const ProjectsGrid = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 
        className="text-3xl font-bold mb-12 text-center opacity-0 section-item-animate text-gradient-animated"
        style={{ animationDelay: '100ms' }}
      >
        All Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          // Card with fade-in and hover animations
          <div
            key={i}
            className="bg-white border rounded-lg shadow hover:shadow-xl overflow-hidden
                       opacity-0 section-item-animate hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${200 + i * 150}ms` }}
          >
            {/* Image */}
            <img
              src={img}
              alt={`Project ${i + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
