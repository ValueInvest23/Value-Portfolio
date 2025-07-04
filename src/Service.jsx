import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaServer, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-500" />, 
    title: "Custom Web Development",
    description: "Building high-performance, scalable, and SEO-friendly websites tailored to your business needs.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-pink-400" />, 
    title: "UI/UX Design",
    description: "Crafting user-focused, interactive, and visually stunning designs for a seamless digital experience.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-green-400" />, 
    title: "Responsive Design",
    description: "Ensuring your site looks perfect and performs flawlessly on desktops, tablets, and mobiles.",
  },
  {
    icon: <FaSearch className="text-4xl text-yellow-400" />, 
    title: "SEO Optimization",
    description: "Optimizing your website for top rankings and increased organic traffic on search engines.",
  },
  {
    icon: <FaServer className="text-4xl text-purple-400" />, 
    title: "Backend Integration",
    description: "Robust backend services and API integrations to support your frontend with dynamic content.",
  },
  {
    icon: <FaCloud className="text-4xl text-cyan-400" />, 
    title: "Cloud Deployment",
    description: "Deploying and maintaining your applications on scalable, secure cloud platforms for maximum uptime.",
  },
];

const Services = () => {
  return (
    <div className="scroll-smooth">
      <section id="services" className="py-16 px-6 sm:px-10 lg:px-24 bg-gradient-to-b from-black via-black to-[#090914] text-white overflow-x-hidden min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-400 tracking-tight"> Services</h2>
          <p className="text-gray-400 text-md sm:text-lg max-w-2xl mx-auto">
            I provide a complete range of web development services to build modern, scalable, and beautiful websites.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-[#0f172a] rounded-2xl shadow-xl p-8 overflow-hidden transition group cursor-pointer hover:shadow-blue-500/30"
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500 group-hover:opacity-100 opacity-0 transition-all duration-500 pointer-events-none" />
              <div className="absolute -inset-4 bg-blue-900 opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-700 z-0" />
              <div className="relative z-10">
                <div className="mb-4 transition-transform duration-300 ease-in-out">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        id="benefits"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="py-30 pt-42 px-6 sm:px-10  lg:px-24 bg-gradient-to-b from-[#0A0D1C] via-black to-black text-white min-h-screen"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-400 tracking-tight">Benefits</h2>
          <p className="text-gray-400 text-md sm:text-lg max-w-2xl mx-auto">
            Discover the core values and advantages of collaborating with a passionate and experienced developer.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {[
            ["🔍 Attention to Detail", "Every line of code is crafted with precision, ensuring quality and long-term stability."],
            ["⚡ Fast & Reliable Delivery", "Projects are delivered on time, with consistent communication and professional workflow."],
            ["🌐 Modern Tech Stack", "Always up-to-date with the latest frameworks and best practices in frontend development."],
            ["💬 Transparent Communication", "You’re always in the loop with clear, frequent updates throughout the project lifecycle."],
            ["🎯 Goal-Oriented Results", "Focused on delivering results that match your business objectives, not just visuals."]
          ].map(([title, desc], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className="border-l-4 border-blue-500 pl-6 hover:border-white transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
