import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <h2 
        className="text-3xl font-bold mb-6 opacity-0 section-item-animate"
        style={{ animationDelay: '200ms' }}
      >
        <span className="text-gradient-animated">About Me</span> 
      </h2>

      {/* Apply the new static gradient class to the paragraph */}
      <p 
        className="text-lg leading-8 opacity-0 section-item-animate text-gradient-paragraph"
        style={{ animationDelay: '400ms' }}
      >
        I a'm Ar Zainab Usama, offering complete and beautifully crafted 2D and 3D architectural maps and layouts designed with creativity, precision, and affordability in mind. I provide professional services in architectural design, approval and submission drawings, interior and exterior design, structural design, and MEP design for both residential and commercial projects. With a focus on quality, functionality, and aesthetics, every project is tailored to meet client needs while maintaining high design standards. My office is located at Barkat Market, Lahore, where ideas are transformed into practical and elegant design solutions.
      </p>
    </section>
  );
};

export default About;