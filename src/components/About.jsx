import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";

const About = () => {
  const colors = {
    obsidian: "#0B0C10",
    coolSilver: "#C5C6C7",
    electricBlue: "#66FCF1",
    deepCobalt: "#1F2833",
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const techStack = [
    { category: "Frontend", tools: "React.js, Tailwind CSS, HTML5/CSS3" },
    { category: "Backend", tools: "Node.js, Express.js" },
    { category: "Database", tools: "MongoDB, MySQL" },
  ];

  const education = [
    {
      title: "BS Information Technology",
      inst: "University of Agriculture, Faisalabad",
      year: "2024 – 2028",
      isMain: true
    },
    {
      title: "Intermediate (Pre-Medical)",
      inst: "Govt. Boys Associate College",
      year: "2024",
      isMain: false
    },
    {
      title: "Matriculation (Science)",
      inst: "Govt. Boys High School",
      year: "2022",
      isMain: false
    }
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 overflow-hidden" style={{ backgroundColor: colors.obsidian }}>
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] blur-[150px] opacity-5 rounded-full z-0" style={{ backgroundColor: colors.electricBlue }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Image with Enhanced Glow */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="relative group flex justify-center items-center">
              {/* Primary Outer Glow */}
              <div 
                className="absolute w-[110%] h-[110%] blur-[80px] opacity-30 rounded-full animate-pulse"
                style={{ background: `radial-gradient(circle, ${colors.electricBlue} 0%, transparent 70%)` }}
              />
              
              {/* Secondary Sharper Glow */}
              <div 
                className="absolute w-[80%] h-[80%] blur-[40px] opacity-40 rounded-full"
                style={{ background: `radial-gradient(circle, ${colors.electricBlue} 0%, transparent 60%)` }}
              />

              <motion.img
                src={aboutImg}
                alt="About Muhammad Awais"
                className="relative z-10 w-full max-w-sm"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  filter: `drop-shadow(0 0 15px ${colors.electricBlue}44)`,
                  maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                }}
              />
            </div>

            {/* Certification Highlight */}
            <div className="w-full p-6 border border-electricBlue/20 rounded-xl bg-deepCobalt/30 backdrop-blur-md shadow-[0_0_15px_rgba(102,252,241,0.05)]">
              <h4 className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: colors.electricBlue }}>Specialization</h4>
              <p className="text-sm font-bold leading-tight" style={{ color: colors.coolSilver }}>
                Certified Full Stack Web Developer
              </p>
              <p className="text-[11px] mt-1 opacity-60" style={{ color: colors.coolSilver }}>
                Edify College of IT, Faisalabad
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Story & Education (Content remains the same) */}
          <div className="lg:col-span-7">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.coolSilver }}>
                About <span style={{ color: colors.electricBlue }}>Me</span>
              </h2>
              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: colors.coolSilver + "BB" }}>
                I am a <span className="text-white font-semibold">Full Stack Web Developer</span> and BS IT student dedicated to building scalable, user-centered applications. I specialize in the <span style={{ color: colors.electricBlue }} className="font-mono">MERN STACK</span>, bridging the gap between elegant frontend design and robust backend logic.
              </p>
            </motion.div>

            {/* Tech Stack Chips */}
            <motion.div className="flex flex-wrap gap-3 mb-12" initial="hidden" whileInView="visible" variants={itemVariants}>
              {techStack.map((tech, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium uppercase tracking-widest" style={{ color: colors.coolSilver }}>
                  {tech.category}: <span style={{ color: colors.electricBlue }}>{tech.tools}</span>
                </div>
              ))}
            </motion.div>

            {/* Education Timeline */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.coolSilver }}>
                <span className="h-[2px] w-8" style={{ backgroundColor: colors.electricBlue }} />
                Educational Background
              </h3>
              
              <div className="space-y-6 border-l border-white/10 ml-1">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full shadow-[0_0_8px_#66FCF1]" style={{ backgroundColor: edu.isMain ? colors.electricBlue : colors.deepCobalt, border: `2px solid ${colors.electricBlue}` }} />
                    
                    <h4 className={`text-lg font-bold ${edu.isMain ? "text-white" : "opacity-80"}`} style={{ color: edu.isMain ? colors.electricBlue : colors.coolSilver }}>
                      {edu.title}
                    </h4>
                    <p className="text-sm opacity-70" style={{ color: colors.coolSilver }}>{edu.inst}</p>
                    <p className="text-xs font-mono mt-1" style={{ color: colors.electricBlue }}>{edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Strengths Section */}
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-4"
              initial="hidden" whileInView="visible" variants={itemVariants}
            >
              {[ "Scalable Dev", "RESTful APIs", "Responsive UI", "Clean Code"].map((strength, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: colors.coolSilver }}>
                  <span className="text-lg" style={{ color: colors.electricBlue }}>▹</span> {strength}
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;