import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    obsidian: "#0B0C10",
    coolSilver: "#C5C6C7",
    electricBlue: "#66FCF1",
    deepCobalt: "#1F2833",
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 10);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl"
      style={{
        background: `linear-gradient(180deg, ${colors.obsidian} 0%, rgba(11, 12, 16, 0.95) 100%)`,
        borderBottom: `1px solid ${colors.deepCobalt}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={(e) => handleLinkClick(e, "#home")}
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
          />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setActive(link.label)}
              onMouseLeave={() => setActive(null)}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative text-sm font-medium tracking-wide px-3 py-2 transition-colors duration-300"
              style={{ color: active === link.label ? colors.obsidian : colors.coolSilver }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="relative z-10">{link.label}</span>
              <AnimatePresence>
                {active === link.label && (
                  <motion.div
                    className="absolute inset-0 rounded-md z-0"
                    style={{ background: colors.electricBlue }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>

        {/* Desktop Hire Me */}
        <motion.a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "#contact")}
          className="hidden md:block px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-tighter"
          style={{
            backgroundColor: colors.electricBlue,
            color: colors.obsidian,
            borderRadius: "4px",
          }}
          whileHover={{
            scale: 1.03,
            boxShadow: `0 0 20px ${colors.electricBlue}66`,
          }}
          whileTap={{ scale: 0.98 }}
        >
          Hire Me
        </motion.a>

        <button
          className="md:hidden text-2xl outline-none"
          style={{ color: colors.electricBlue }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col gap-2 px-6 pb-8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              background: colors.obsidian,
              borderTop: `1px solid ${colors.electricBlue}22`,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-4 text-lg font-semibold tracking-widest border-b border-white/5"
                style={{ color: colors.coolSilver }}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            {/* HIRED ME BUTTON ADDED BACK TO SLIDER */}
            <motion.a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="mt-6 py-4 text-center font-bold uppercase tracking-widest text-sm"
              style={{ 
                backgroundColor: colors.electricBlue, 
                color: colors.obsidian, 
                borderRadius: "4px" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;