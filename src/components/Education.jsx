// import React from "react";
// import { GraduationCap } from "lucide-react"; // nice education icon

// // Education Data
// const education = [
//   {
//     degree: "BSCS",
//     institute: "University of Sahiwal",
//     period: "2022 – 2026 (Ongoing)",
//   },
//   {
//     degree: "FSc Pre-Engineering",
//     institute: "Govt Higher Secondary School 105/15-L, Mian Channu, Khanewal",
//     period: "2020 – 2022",
//   },
// ];

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="bg-gradient-to-b from-gray-50 to-gray-100 py-16"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 
//           className="text-3xl font-bold mb-12 text-start opacity-0 section-item-animate text-gradient-animated"
//           style={{ animationDelay: '100ms' }}
//         >
//           <span className="text-gradient-animated">Education</span>
//         </h2>

//         {/* --- This is the main change --- */}
//         {/* Container for the timeline. The border is removed from here. */}
//         <div className="relative ml-4">
//           {/* This new div creates the vertical gradient line */}
//           <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

//           {education.map((edu, index) => (
//             <div 
//               key={index} 
//               className="mb-10 ml-6 group opacity-0 section-item-animate"
//               style={{ animationDelay: `${200 + index * 200}ms` }}
//             >
//               {/* The icon's position is now relative to the new line */}
//               <span className="image-glow absolute -left-11 flex items-center justify-center w-10 h-10 
//                                bg-gradient-to-br from-blue-500 to-purple-600 
//                                rounded-full ring-4 ring-blue-100 shadow-md 
//                                group-hover:scale-110 transition-transform">
//                 <GraduationCap className="text-white w-5 h-5" />
//               </span>

//               <div className="bg-white p-6 mx-2 rounded-xl shadow-md 
//                               hover:shadow-xl hover:-translate-y-1
//                               transition-all duration-300 border border-gray-100 ">
//                 <span className="text-xl font-semibold mb-1 text-gradient-static">
//                   {edu.degree}
//                 </span>
//                 <p className="text-blue-600 font-medium">{edu.institute}</p>
//                 <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;