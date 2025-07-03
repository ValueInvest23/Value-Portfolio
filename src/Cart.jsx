import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const projects = [
  "/src/assets/image6.png",
  "/src/assets/image1.jpg",
  "/src/assets/image3.png",
  "/src/assets/image4.jpg",
  "/src/assets/image5.jpg",
  "/src/assets/image7.jpg",
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
        slider.scrollLeft += 0.5; // Slower speed
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
    <div id="work" className="bg-black text-white py-12 px-4 overflow-hidden ">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-blue-400 drop-shadow-lg">
        Work
      </h2>
      <div className="relative">
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-6 px-2 sm:px-6 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {projects.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-2xl overflow-hidden bg-[#0d0d0d] p-4 sm:p-6 min-w-[300px] sm:min-w-[400px] min-h-[400px] sm:min-h-[480px] shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transform hover:scale-105 transition duration-700 ease-in-out relative before:content-[''] before:absolute before:inset-y-0 before:right-[-15px] before:w-8 before:rounded-full before:shadow-[20px_0_40px_rgba(59,130,246,0.6)] after:content-[''] after:absolute after:inset-y-0 after:left-[-15px] after:w-8 after:rounded-full after:shadow-[-20px_0_40px_rgba(59,130,246,0.3)]"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-120 object-cover-fit rounded-lg shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
