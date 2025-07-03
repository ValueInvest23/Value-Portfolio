import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const defaultNote = "[Website Inquiry]%0ARequirement received from website.";
    const whatsappMessage = `${defaultNote}%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "9265637794"; // Replace with your actual WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className=" bg-black flex items-center justify-center px-4 py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-lg text-white">
        <h2
          className={`text-3xl font-bold mb-6 text-center text-blue-400 transition-all duration-500 ${submitted ? "-translate-y-8 scale-90" : ""}`}
        >
          Contact Us
        </h2>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-black text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg focus:shadow-blue-300/50 transition-shadow"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-black text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg focus:shadow-blue-400/50 transition-shadow"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            name="message"
            placeholder="Your message"
            className="w-full px-4 py-2 bg-black text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg focus:shadow-blue-400/50 transition-shadow"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

