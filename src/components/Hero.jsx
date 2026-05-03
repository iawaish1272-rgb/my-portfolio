import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero2.png";
import toolsImg from "../assets/tools.jpeg";

const Hero = () => {
  const colors = {
    obsidian: "#0B0C10",
    coolSilver: "#C5C6C7",
    electricBlue: "#66FCF1",
    deepCobalt: "#1F2833",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ backgroundColor: colors.obsidian }}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 right-0 w-[300px] h-[300px] blur-[150px] opacity-10 rounded-full"
          style={{ backgroundColor: colors.electricBlue }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* LEFT CONTENT: The Name and Info */}
          <motion.div
            className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* THE FIX: Fluid Typography Container */}
            <div className="w-full mb-4">
              <h1
                className="font-black leading-[0.85] tracking-tighter uppercase"
                style={{ 
                  color: colors.coolSilver,
                  // This formula ensures it never disappears but shrinks smoothly
                  fontSize: "calc(2rem + 5vw + 2vh)" 
                }}
              >
                <span className="block">MUHAMMAD</span>
                <span className="block" style={{ color: colors.electricBlue }}>
                  AWAIS
                </span>
              </h1>
            </div>

            <h2
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 tracking-widest"
              style={{ color: colors.electricBlue }}
            >
              MERN STACK DEVELOPER
            </h2>

            <p
              className="text-sm md:text-base max-w-lg mb-8 opacity-70 leading-relaxed"
              style={{ color: colors.coolSilver }}
            >
              BS IT student specializing in building high-performance web applications. 
              Turning complex problems into elegant, scalable solutions.
            </p>

            {/* Tech Stack Mini-Display */}
            <div className="mb-10 w-full flex flex-col items-center lg:items-start">
              <span className="text-[10px] tracking-[0.3em] opacity-40 mb-3" style={{ color: colors.coolSilver }}>
                CORE TECHNOLOGIES
              </span>
              <img
                src={toolsImg}
                alt="Tech Stack"
                className="h-6 sm:h-8 w-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-80"
              />
            </div>

            <motion.a
              href="#projects"
              className="px-10 py-4 font-bold uppercase tracking-widest text-xs"
              style={{
                backgroundColor: colors.electricBlue,
                color: colors.obsidian,
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)", // Stylized button shape
              }}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
          </motion.div>

          {/* RIGHT CONTENT: The Image */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative max-w-[250px] sm:max-w-[350px] lg:max-w-none">
              {/* Image Glow */}
              <div 
                className="absolute inset-0 blur-[80px] opacity-20"
                style={{ background: colors.electricBlue }}
              />
              <img
                src={heroImg}
                alt="Muhammad Awais"
                className="relative z-10 w-full h-auto object-contain"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(102, 252, 241, 0.1))",
                  maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;