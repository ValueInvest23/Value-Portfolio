import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Globe, Clock, Smartphone, RefreshCw, DollarSign } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer as a website service provider?",
    answer:
      "We offer website design, development, maintenance, SEO, and hosting services tailored to your business needs.",
    icon: <Globe className="text-blue-400 w-5 h-5 mr-2" />
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Depending on the complexity, a standard website takes 2-4 weeks from design to deployment.",
    icon: <Clock className="text-green-400 w-5 h-5 mr-2" />
  },
  {
    question: "Do you offer mobile-friendly website design?",
    answer:
      "Absolutely! All our designs are fully responsive and optimized for mobile devices.",
    icon: <Smartphone className="text-pink-400 w-5 h-5 mr-2" />
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we specialize in modernizing and optimizing existing websites for better performance and aesthetics.",
    icon: <RefreshCw className="text-yellow-400 w-5 h-5 mr-2" />
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing varies based on requirements. Contact us for a free consultation and custom quote.",
    icon: <DollarSign className="text-purple-400 w-5 h-5 mr-2" />
  }
];

const iconVariants = {
  initial: { rotate: 0, scale: 1, opacity: 0.5 },
  open: { rotate: 180, scale: 1.3, opacity: 1 },
  close: { rotate: 0, scale: 1, opacity: 1 },
};

const contentVariants = {
  initial: { opacity: 0, y: -10, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.4, ease: "easeInOut" } }
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (activeIndex !== null && containerRef.current) {
      const activeItem = containerRef.current.querySelector(`#faq-${activeIndex}`);
      if (activeItem) {
        const yOffset = -100;
        const y = activeItem.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  return (
    <div
      id="F&Q"
      className="min-h-screen bg-black text-white py-28 px-4 sm:px-6 md:px-16 transition-all duration-700 ease-in-out"
      ref={containerRef}
      style={{ overflowX: 'hidden' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl sm:text-4xl text-blue-400 font-bold text-center mb-12"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.div layout className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              id={`faq-${index}`}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className={`border ${isActive ? 'border-blue-100' : 'border-gray-700'} rounded-xl overflow-hidden shadow-lg transition duration-300 bg-gray-900`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium transition duration-300 focus:outline-none"
              >
                <div className="flex items-center">
                  {faq.icon}
                  <span className="text-white">{faq.question}</span>
                </div>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  animate={isActive ? "open" : "close"}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {isActive ? (
                    <X className="text-white" />
                  ) : (
                    <ChevronDown className="text-white" />
                  )}
                </motion.span>
              </button>
              <AnimatePresence initial={false} mode="wait">
                {isActive && (
                  <motion.div
                    key="content"
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="px-6 pb-4 text-gray-300 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FAQSection;
