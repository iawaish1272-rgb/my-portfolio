import React from "react";
import { motion } from "framer-motion";
import skillImg from "../assets/skills.png";

const Skills = () => {
  const colors = {
    obsidian: "#0B0C10",
    coolSilver: "#C5C6C7",
    electricBlue: "#66FCF1",
    deepCobalt: "#1F2833",
  };

  const skillGroups = {
    technical: [
      { title: "Languages", skills: "JavaScript (ES6+), C++, C# (Basic)" },
      { title: "Frontend", skills: "React.js, HTML5, CSS3, Tailwind CSS, Bootstrap" },
      { title: "Backend", skills: "Node.js, Express.js, RESTful APIs" },
      { title: "Database", skills: "MongoDB, MySQL (Basic SQL)" },
      { title: "Tools", skills: "Git, GitHub, VS Code, VS" },
      { title: "Concepts", skills: "DSA, OOP, MVC, Auth, CRUD" },
    ],
    soft: [
      { title: "Intellect", skills: "Problem Solving, Critical Thinking" },
      { title: "Comm.", skills: "Technical Communication, Team Collaboration" },
      { title: "Ethic", skills: "Time Management, Self-Discipline, Consistency" },
      { title: "Mindset", skills: "Growth-Oriented, Attention to Detail" },
    ],
    office: [
      { title: "Productivity", skills: "Microsoft Word, Excel, PowerPoint" },
      { title: "Management", skills: "Documentation, Data Entry, Reporting" },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 overflow-hidden" style={{ backgroundColor: colors.obsidian }}>
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] blur-[150px] opacity-10 rounded-full" style={{ backgroundColor: colors.electricBlue }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[150px] opacity-10 rounded-full" style={{ backgroundColor: colors.deepCobalt }} />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-black tracking-tighter" 
            style={{ color: colors.coolSilver }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            SKILL<span style={{ color: colors.electricBlue }}>SET</span>
          </motion.h2>
          <div className="h-[2px] w-24 mx-auto mt-4" style={{ backgroundColor: colors.electricBlue }} />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Technical Skills Column */}
          <motion.div 
            className="lg:col-span-4 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xs uppercase tracking-[0.4em] mb-6 font-bold" style={{ color: colors.electricBlue }}>Technical Prowess</h3>
            {skillGroups.technical.map((item, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                whileHover={{ x: 10 }}
                className="p-4 rounded-lg border-l-2 border-white/10 bg-white/[0.02] backdrop-blur-md"
                style={{ borderLeftColor: colors.electricBlue }}
              >
                <h4 className="text-[10px] uppercase font-black mb-1 opacity-50" style={{ color: colors.coolSilver }}>{item.title}</h4>
                <p className="text-sm font-semibold" style={{ color: colors.coolSilver }}>{item.skills}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center: Image & Office Tools Anchor */}
          <motion.div 
            className="lg:col-span-4 flex flex-col items-center justify-center order-first lg:order-none gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-electricBlue/20 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
              <motion.img 
                src={skillImg} 
                alt="Skills" 
                className="relative z-10 w-40 md:w-56 h-auto drop-shadow-[0_0_20px_rgba(102,252,241,0.3)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Office Tools Highlight Box */}
            <div className="w-full space-y-3">
               <h3 className="text-center text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: colors.electricBlue }}>Office Suite</h3>
               {skillGroups.office.map((item, i) => (
                  <motion.div 
                    key={i}
                    className="p-3 rounded-lg border border-white/5 bg-deepCobalt/20 backdrop-blur-sm text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-xs font-bold" style={{ color: colors.coolSilver }}>{item.skills}</p>
                  </motion.div>
               ))}
            </div>
          </motion.div>

          {/* Right: Soft Skills Column */}
          <motion.div 
            className="lg:col-span-4 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xs uppercase tracking-[0.4em] mb-6 font-bold text-right" style={{ color: colors.electricBlue }}>Soft Skills</h3>
            {skillGroups.soft.map((item, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                whileHover={{ x: -10 }}
                className="p-4 rounded-lg border-r-2 border-white/10 bg-white/[0.02] backdrop-blur-md text-right"
                style={{ borderRightColor: colors.electricBlue }}
              >
                <h4 className="text-[10px] uppercase font-black mb-1 opacity-50" style={{ color: colors.coolSilver }}>{item.title}</h4>
                <p className="text-sm font-semibold" style={{ color: colors.coolSilver }}>{item.skills}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Detailed Tags */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {["Team Collaboration", "Active Listening", "Growth-Oriented", "Time Management", "Flexibility"].map((skill, i) => (
            <span key={i} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 rounded-sm" style={{ color: colors.electricBlue }}>
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;