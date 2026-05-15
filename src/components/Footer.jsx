import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const colors = {
    obsidian: "#0B0C10",
    coolSilver: "#C5C6C7",
    electricBlue: "#66FCF1",
    deepCobalt: "#1F2833",
  };

  // Define your social links here
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/iawaish1272-rgb" },
    { name: "LinkedIn", url: "https://linkedin.com/in/muhammad-awais-30a2b0375" },
    { name: "Instagram", url: "https://instagram.com/iaw_aish?igsh=eHh0dG5zZmlvNzJv" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="relative py-12 overflow-hidden border-t border-white/5" 
      style={{ backgroundColor: colors.obsidian }}
    >
      {/* Subtle Glow behind text */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 blur-[100px] opacity-10 rounded-full" 
        style={{ backgroundColor: colors.electricBlue }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo / Name Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black tracking-tighter" style={{ color: colors.coolSilver }}>
              M.AWAIS<span style={{ color: colors.electricBlue }}>.</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mt-1" style={{ color: colors.coolSilver }}>
              Full Stack Developer
            </p>
          </div>

          {/* Updated Social Links */}
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                whileHover={{ y: -3, color: colors.electricBlue }}
                className="text-xs font-bold uppercase tracking-widest transition-colors"
                style={{ color: colors.coolSilver + "88" }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group flex flex-col items-center gap-2"
          >
            <span 
              className="text-[10px] font-black uppercase tracking-widest group-hover:opacity-100 opacity-40 transition-opacity"
              style={{ color: colors.electricBlue }}
            >
              Back to top
            </span>
            <div className="w-1 h-8 rounded-full bg-white/10 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 w-full h-1/2"
                style={{ backgroundColor: colors.electricBlue }}
                animate={{ y: [-20, 40] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.button>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest opacity-30" style={{ color: colors.coolSilver }}>
            © 2026 MUHAMMAD AWAIS — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest" style={{ color: colors.coolSilver + "44" }}>
            DESIGNED BY <span style={{ color: colors.electricBlue }}>MUHAMMAD AWAIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;