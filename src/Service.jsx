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
    <>
      <section id="services" className="py-4 px-6 sm:px-10 lg:px-24 bg-black text-white overflow-x-hidden ">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-500"> Services</h2>
          <p className="text-gray-300 text-md sm:text-lg max-w-2xl mx-auto">
            I provide a complete range of web development services to build modern, scalable, and beautiful websites.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -8, rotateX: 8, rotateY: 4 }}
              whileTap={{ scale: 1.03, y: -8, rotateX: 8, rotateY: 4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-black-900 rounded-2xl shadow-lg p-8 overflow-hidden transition group cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500 group-hover:opacity-100 opacity-0 transition-all duration-500 pointer-events-none" />
              <div className="absolute -inset-4 bg-blue-500 opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-700 z-0" />
              <div className="relative z-10">
                <div className="mb-4 group-hover:rotate-[6deg] transition-transform duration-300 ease-in-out">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 hover:text-blue-400">
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 sm:px-10 lg:px-24 bg-black text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-500">Benifits</h2>
          <p className="text-gray-400 text-md sm:text-lg max-w-2xl mx-auto">
            Discover the core values and advantages of collaborating with a passionate and experienced developer.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="border-l-4 border-blue-500 pl-6 ">
            <h3 className="text-2xl font-semibold mb-2">🔍 Attention to Detail</h3>
            <p className="text-gray-400">Every line of code is crafted with precision, ensuring quality and long-term stability.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold mb-2">⚡ Fast & Reliable Delivery</h3>
            <p className="text-gray-400">Projects are delivered on time, with consistent communication and professional workflow.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold mb-2">🌐 Modern Tech Stack</h3>
            <p className="text-gray-400">Always up-to-date with the latest frameworks and best practices in frontend development.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold mb-2">💬 Transparent Communication</h3>
            <p className="text-gray-400">You’re always in the loop with clear, frequent updates throughout the project lifecycle.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold mb-2">🎯 Goal-Oriented Results</h3>
            <p className="text-gray-400">Focused on delivering results that match your business objectives, not just visuals.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
