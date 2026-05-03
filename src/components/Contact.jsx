import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.png";
import touchImg from "../assets/touch.png";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const colors = {
    obsidian: "#0B0C10",
    coolSilver: "#C5C6C7",
    electricBlue: "#66FCF1",
    deepCobalt: "#1F2833",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm('service_ngh9kpx', 'template_ee14tuz', form.current, 'vGrol_No3sEZvoYcs')
      .then(() => {
          setStatus("Message Sent Successfully!");
          form.current.reset();
      }, (error) => {
          setStatus("Failed to send. Please try again.");
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 overflow-hidden" style={{ backgroundColor: colors.obsidian }}>
      <div className="container mx-auto px-6 relative z-10">
        
        <header className="mb-16 text-center lg:text-left">
          <motion.h2 
            className="text-4xl md:text-6xl font-black tracking-tighter" 
            style={{ color: colors.coolSilver }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            LET'S <span style={{ color: colors.electricBlue }}>CONNECT</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 blur-3xl opacity-20" style={{ backgroundColor: colors.electricBlue }} />
              <img src={contactImg} alt="Contact" className="relative w-48 h-auto" />
            </div>

            <div className="space-y-6">
              {[
                { label: "CALL", value: "03492344361" },
                { label: "EMAIL", value: "mymail03235@gmail.com" },
                { label: "LOCATION", value: "University of Agriculture, Faisalabad" },
                { label: "GITHUB", value: "github.com/MuhammadAwais", link: "https://github.com/MuhammadAwais" },
                { label: "LINKEDIN", value: "linkedin.com/in/MuhammadAwais", link: "https://linkedin.com/in/MuhammadAwais" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-[10px] font-black tracking-[0.3em]" style={{ color: colors.electricBlue }}>{item.label}</p>
                  <a 
                    href={item.link || "#"} 
                    className="text-lg font-semibold hover:pl-2 transition-all duration-300 block" 
                    style={{ color: colors.coolSilver }}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Get In Touch Form */}
          <motion.div 
            className="lg:col-span-7 p-8 rounded-2xl border border-white/5 relative overflow-hidden"
            style={{ backgroundColor: colors.deepCobalt + "22" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-8">
                <img src={touchImg} alt="Touch" className="h-10 w-auto" />
                <h3 className="text-2xl font-bold" style={{ color: colors.coolSilver }}>Get In Touch</h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" name="user_name" placeholder="Full Name" required 
                  className="bg-black/40 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-electricBlue transition-colors w-full"
                  style={{ color: colors.coolSilver }}
                />
                <input 
                  type="email" name="user_email" placeholder="Your Email" required 
                  className="bg-black/40 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-electricBlue transition-colors w-full"
                  style={{ color: colors.coolSilver }}
                />
              </div>
              <textarea 
                name="message" placeholder="Your Message" rows="5" required
                className="w-full bg-black/40 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-electricBlue transition-colors"
                style={{ color: colors.coolSilver }}
              ></textarea>
              
              <motion.button 
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 font-bold uppercase tracking-widest text-sm rounded-lg transition-all"
                style={{ backgroundColor: colors.electricBlue, color: colors.obsidian }}
              >
                Send Message
              </motion.button>
              
              {status && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center text-xs mt-4 font-bold uppercase tracking-tighter" 
                  style={{ color: colors.electricBlue }}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;