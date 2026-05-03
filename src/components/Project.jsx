import React from "react";
import { motion } from "framer-motion";
import projectMainImg from "../assets/project.png";

const Projects = () => {
  const colors = {
    obsidian: "#0B0C10",
    coolSilver: "#C5C6C7",
    electricBlue: "#66FCF1",
    deepCobalt: "#1F2833",
  };

  // Replace these with your actual project data later
  const projectList = [
    {
      id: 1,
      title: "E-Commerce Architecture",
      desc: "A high-performance MERN platform featuring secure JWT authentication and real-time inventory management with optimized MongoDB queries.",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
    },
    {
      id: 2,
      title: "AI Integration Hub",
      desc: "An intelligent web interface leveraging external AI APIs to provide automated data insights and interactive user experiences.",
      tech: ["Express", "OpenAI API", "Tailwind", "Framer"],
    },
    {
      id: 3,
      title: "Task Management Suite",
      desc: "Full-stack productivity tool focused on CRUD operations, dynamic state handling, and seamless multi-device synchronization.",
      tech: ["MERN", "Socket.io", "CSS3", "Git"],
    },
    {
      id: 4,
      title: "Portfolio Engine",
      desc: "Custom-built portfolio framework designed for high speed and accessibility, featuring smooth GSAP/Framer transitions.",
      tech: ["React.js", "Vite", "Animation", "UI/UX"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ backgroundColor: colors.obsidian }}
    >
      {/* Background Atmosphere */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] blur-[150px] opacity-[0.03] rounded-full"
        style={{ backgroundColor: colors.electricBlue }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-20">
          <motion.p 
            className="text-[10px] uppercase tracking-[0.6em] mb-3"
            style={{ color: colors.electricBlue }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            My Creative Works
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-6xl font-black italic tracking-tighter"
            style={{ color: colors.coolSilver }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            PROJECTS<span style={{ color: colors.electricBlue }}>.</span>
          </motion.h2>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/5"
              style={{ backgroundColor: colors.deepCobalt + "33" }}
            >
              {/* Top Section: Image Box */}
              <div className="relative h-64 md:h-80 border-b border-white/5 overflow-hidden flex items-center justify-center">
                {/* Visual Placeholder for Project Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                   <div 
                    className="w-full h-full" 
                    style={{ 
                      backgroundImage: `radial-gradient(${colors.electricBlue} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px' 
                    }} 
                   />
                </div>
                
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 group-hover:opacity-100 transition-all group-hover:scale-110" style={{ color: colors.electricBlue }}>
                  "Image is here placed"
                </span>

                {/* Optional: Floating project icon from your assets */}
                <img 
                  src={projectMainImg} 
                  alt="deco" 
                  className="absolute bottom-4 right-4 h-12 opacity-10 group-hover:opacity-30 transition-all group-hover:rotate-12" 
                />
              </div>

              {/* Bottom Section: Detail Box */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: colors.coolSilver }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 opacity-70" style={{ color: colors.coolSilver }}>
                    {project.desc}
                  </p>
                </div>

                {/* Techniques / Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span 
                      key={tool}
                      className="text-[9px] font-black px-3 py-1 rounded-sm tracking-tighter"
                      style={{ 
                        backgroundColor: colors.electricBlue + "15", 
                        color: colors.electricBlue,
                        border: `1px solid ${colors.electricBlue}33`
                      }}
                    >
                      {tool.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  boxShadow: `inset 0 0 50px ${colors.electricBlue}15` 
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;