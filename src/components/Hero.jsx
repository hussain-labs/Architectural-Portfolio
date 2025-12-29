import React, { useState, useEffect } from "react";

// An array of titles to cycle through
const titles = [
  "Ar Zainab Usama",
  "an Architect",
  "an Interior and Exterior Designer",
  "a Lifelong Learner",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  // Typing effect logic
  useEffect(() => {
    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev - 1);
          setText(titles[index].substring(0, subIndex - 1));
        }, 80);
        return () => clearTimeout(timeout);
      }
    } else {
      if (subIndex === titles[index].length) {
        const pause = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(pause);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + 1);
          setText(titles[index].substring(0, subIndex + 1));
        }, 120);
        return () => clearTimeout(timeout);
      }
    }
  }, [subIndex, isDeleting, index]);

  return (
    <section
      className="h-[900px] flex flex-col justify-center items-center p-6 md:px-16 animated-background relative overflow-hidden"
      id="home"
    >
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover opacity-70 pointer-events-none"
        style={{
          backgroundImage: "url('/images/P19.jpeg')",
        }}
      ></div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 mx-auto lg:px-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">

          {/* 🔹 Animated Text ONLY */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6
                       opacity-0 animate-on-load text-gradient-animated-hero"
            style={{ animationDelay: "100ms" }}
          >
            Hi, I'm{" "}
            <span className="text-gradient-animated-hero">{text}</span>
            <span className="blinking-cursor">|</span>
          </h2>

          {/* 🔹 Buttons (NO animation + fixed width on mobile) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 w-full sm:w-auto max-w-[220px]
                         button-gradient-animated text-white rounded-lg shadow
                         text-center mx-auto sm:mx-0"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-auto max-w-[220px]
                         bg-gray-200 text-gray-700 rounded-lg shadow
                         hover:bg-gray-300 text-center mx-auto sm:mx-0"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image (optional future content) */}
        <div className="flex-1 flex justify-center">
          {/* Image / Illustration can go here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
