import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { FaUpwork, FaStackOverflow } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* --- Left: Contact Form (No Changes) --- */}
        <div 
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 
                     transition-all duration-300 opacity-0 section-item-animate"
          style={{ animationDelay: '100ms' }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient-animated">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have a project or just want to say hi? Fill the form below and I'll get back to you soon!
          </p>
          <ContactForm />
        </div>

        {/* --- Right: Contact Info + Social (No Changes except icons) --- */}
        <div 
          className="flex flex-col justify-start space-y-6 opacity-0 section-item-animate"
          style={{ animationDelay: '300ms' }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient-animated">Contact Info</h2>
          <p className="text-gray-700">
            I'd love to hear from you! Whether it's a project idea, collaboration, or just a hello, feel free to reach out through any of the options below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <Mail className="w-6 h-6 text-blue-500" />
              <a href="mailto:muzamilhussain369@gmail.com" className="text-gradient-static hover:underline">
                muzamilhussain369@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Phone className="w-6 h-6 text-blue-500" />
              <span className="text-gradient-static">0303-0458064</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 text-gradient-static"><span className="text-gradient-static">Follow Me</span></h3>
          <div className="flex space-x-4 mt-2">
            
            {/* --- ONLY THESE ICONS ARE CHANGED --- */}
            <a href="https://www.linkedin.com/in/muzamil-hussain-990691375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-12 h-12 p-2 rounded-md social-icon-themed transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:-translate-y-1" />
            </a>
            <a href="https://github.com/muzamilhussain33" target="_blank" rel="noopener noreferrer">
              <Github className="w-12 h-12 p-2 rounded-md social-icon-themed transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:-translate-y-1" />
            </a>
            <a href="https://stackoverflow.com/users/30405022/muzamil-hussain" target="_blank" rel="noopener noreferrer">
              <FaStackOverflow className="w-12 h-12 p-2 rounded-md social-icon-themed transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:-translate-y-1" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaUpwork className="w-12 h-12 p-2 rounded-md social-icon-themed transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:-translate-y-1" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;