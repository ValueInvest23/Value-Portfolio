import React, { useState, useMemo } from "react";
import ContactForm from "./Contact";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Send, CheckCircle,  } from 'lucide-react';


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const whatsappLink = "https://wa.me/9265637794?text=I%20am%20interested%20in%20a%20website%20inquiry";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black p-4 text-white w-full shadow-md fixed top-0 left-0 z-50 overflow-hidden"
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          id="#navbar"
          className="text-2xl  ml-4 text-blue-450 font-bold cursor-pointer hover:text-blue-600 transition-colors duration-300"
        >
         <a href="#hero">Value.in</a> 
        </motion.div>

        {/* Toggle Button (Mobile) */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mr-8 p-2 rounded-full transition-transform duration-300 hover:rotate-60 hover:bg-blue-600"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="hidden md:flex md:items-center md:space-x-8 text-white text-lg"
        >
          <a href="#work" className="relative group">
            <span className="hover:text-blue-400 transition-colors duration-300">Work</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="relative group">
            <span className="hover:text-blue-400 transition-colors duration-300">Service</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#benefits" className="relative group">
            <span className="hover:text-blue-400 transition-colors duration-300">Benefits</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
         <a href="#F&Q" className="relative group">
            <span className="hover:text-blue-400 transition-colors duration-300">Faq</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </motion.div>

        {/* Contact Button (Desktop) */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="hidden sm:block md:block"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        } flex flex-col space-y-4 text-white text-lg px-4`}
      >
        <a href="#work" className="relative group transition-all duration-300" onClick={toggleMenu}>
          <span className="hover:text-blue-400 transition-colors duration-300">Work</span>
          <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#services" className="relative group transition-all duration-300" onClick={toggleMenu}>
          <span className="hover:text-blue-400 transition-colors duration-300">Service</span>
          <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#benefits" className="relative group transition-all duration-300" onClick={toggleMenu}>
          <span className="hover:text-blue-400 transition-colors duration-300">Benefits</span>
          <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#F&Q" className="relative group transition-all duration-300" onClick={toggleMenu}>
          <span className="hover:text-blue-400 transition-colors duration-300">Faq</span>
          <span className="block w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
         <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          >
            Contact Us
          </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;



