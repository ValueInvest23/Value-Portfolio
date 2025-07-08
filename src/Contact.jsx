import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUser, faEnvelope, faCommentDots, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  setSubmitted(true);

  const defaultNote = "[Website Inquiry]%0ARequirement received from website.";
  const whatsappMessage = `${defaultNote}%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const phoneNumber = "9265637794";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
  form.reset();

  setTimeout(() => setSubmitted(false), 4000);
};

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-12">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg text-white p-8 rounded-3xl shadow-2xl\"
      >
        <h2
          className={`text-4xl font-extrabold mb-10 text-center text-blue-400 tracking-wide transition-all duration-500 ${submitted ? "-translate-y-8 scale-90" : ""}`}
        >
          Contact Us
        </h2>

        <div className="mb-6 relative">
          <label className="block mb-2 text-sm font-semibold uppercase tracking-wide">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 bg-black/80 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-blue-500/20 shadow-md"
              required
            />
          </div>
        </div>

        <div className="mb-6 relative">
          <label className="block mb-2 text-sm font-semibold uppercase tracking-wide">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 bg-black/80 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-blue-500/20 shadow-md"
              required
            />
          </div>
        </div>

        <div className="mb-8 relative">
          <label className="block mb-2 text-sm font-semibold uppercase tracking-wide">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faCommentDots} className="absolute left-3 top-4 text-gray-400" />
            <textarea
              rows="5"
              name="message"
              placeholder="Your message..."
              className="w-full pl-10 pr-4 py-3 bg-black/80 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-blue-500/20 shadow-md resize-none"
              required
            ></textarea>
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl transition duration-300 shadow-lg hover:shadow-blue-500/30"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
          Send Message
        </motion.button>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 4 }}
              className="mt-6 flex items-center justify-center text-green-400 text-lg font-semibold"
            >
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" /> Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
}
