import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { User, Phone, Calendar, Clock, Send, X, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const adminWhatsAppNumber = '919265637794';

  const timeSlots = useMemo(() => [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ], []);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate('');
    setSelectedTime('');
    setUserName('');
    setUserPhone('');
    setError('');
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (!userName || !userPhone || !selectedDate || !selectedTime) {
    setError('Please fill in all fields and select a date and time.');
    return;
  }

  setError('');
  const message = `\nNew Appointment Request:\n------------------------\nName: ${userName}\nPhone: ${userPhone}\nDate: ${new Date(selectedDate).toLocaleDateString('en-GB')}\nTime: ${selectedTime}\n------------------------\nPlease confirm this appointment.`;

  const encodedMessage = encodeURIComponent(message.trim());
  const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodedMessage}`;

  // Open WhatsApp link
  window.open(whatsappUrl, '_blank');

  // Show success popup and close modal after short delay
  setShowSuccessPopup(true);

  // ✅ Add small delay before closing
  setTimeout(() => {
    setShowSuccessPopup(false);
    handleCloseModal();
  }, 1500); // 1.5 seconds
};


  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <motion.div
    id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full h-screen overflow-hidden px-0 mx-0 overflow-x-hidden overflow-y-hidden "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]"
      >
        <source src="/src/assets/background1.mp4 " type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 p-4 bg-black/50"
      >
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl mb-6 max-w-2xl"
        >
          <span className="text-blue-400 font-sans" >Value.in</span> - Create your website
        </motion.p>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 max-w-5xl "
        >
          We Don't Just Create Website We Can Create The Trust
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="py-2 text-lg md:text-xl mb-6 max-w-2xl"
        >
          We build beautiful, responsive websites to showcase your brand.
        </motion.p>
        <motion.button
          onClick={handleOpenModal}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105 animate-pulse-medium"
        >
          Book a call 
        </motion.button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in">
            <div className="bg-gray-800 text-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform animate-slide-up border border-gray-700">
              <div className="flex items-center justify-between p-5 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-white">Book a Slot</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="number"
                      placeholder="Phone Number"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-gray-300 mb-2 flex items-center">
                    <Calendar size={20} className="mr-2 text-gray-400" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    min={getTodayString()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    style={{ colorScheme: 'dark' }}
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-300 mb-2 flex items-center">
                    <Clock size={20} className="mr-2 text-gray-400" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`p-2.5 rounded-lg text-center font-medium transition-all duration-200 border-2 ${
                          selectedTime === slot
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                            : 'bg-gray-700 text-gray-300 border-gray-600 hover:border-blue-500 hover:bg-gray-600'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div className="pt-4 border-t border-gray-700 flex justify-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-300"
                    disabled={!userName || !userPhone || !selectedDate || !selectedTime}
                  >
                    <Send size={18} />
                    Confirm & Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showSuccessPopup && (
          <div className="fixed bottom-8 md:bottom-12 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 z-50 animate-fade-in">
            <CheckCircle size={20} />
            Appointment request sent successfully!
          </div>
        )}
      </motion.div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse-slow {
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
      `}</style>
    </motion.div>
  );
};

export default HeroSection;
