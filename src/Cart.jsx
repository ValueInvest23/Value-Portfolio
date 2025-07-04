import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const projects = [
  "/image6.png",
  "/image5.jpg",
  "/image3.png",
  "/image4.jpg",
  "/image5.jpg",
  "/image7.jpg",
];

export default function ProjectCarousel() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoScrollInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const startAutoScroll = () => {
    const slider = scrollRef.current;
    if (!slider) return;
    autoScrollInterval.current = setInterval(() => {
      if (slider.scrollLeft + 1 >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollTo({ left: 0, behavior: "auto" });
      } else {
        slider.scrollLeft += 0.5;
      }
    }, 10);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    return stopAutoScroll;
  }, [isHovered]);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      slider.classList.add("scrolling");
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove("scrolling");
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("scrolling");
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <motion.div
      id="work"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="bg-black text-white py-16 px-4 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl sm:text-4xl font-bold mb-10 text-center text-blue-400 drop-shadow-lg"
      >
        Work
      </motion.h2>
      <div className="relative">
        <motion.div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-6 px-2 sm:px-6 overflow-hidden cursor-grab active:cursor-grabbing select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {projects.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-shrink-0 rounded-2xl overflow-hidden bg-[#0d0d0d] p-4 sm:p-6 min-w-[300px] sm:min-w-[400px] min-h-[400px] sm:min-h-[480px] shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transform hover:scale-105 transition duration-700 ease-in-out relative before:content-[''] before:absolute before:inset-y-0 before:right-[-15px] before:w-8 before:rounded-full before:shadow-[20px_0_40px_rgba(59,130,246,0.6)] after:content-[''] after:absolute after:inset-y-0 after:left-[-15px] after:w-8 after:rounded-full after:shadow-[-20px_0_40px_rgba(59,130,246,0.3)]"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-120 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
