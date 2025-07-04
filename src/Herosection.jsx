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

    window.open(whatsappUrl, '_blank');
    setShowSuccessPopup(true);

    setTimeout(() => {
      setShowSuccessPopup(false);
      handleCloseModal();
    }, 1500);
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center items-center text-center text-white p-4 bg-black/50 min-h-screen"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl mb-6 max-w-2xl"
        >
          <span className="text-blue-400 font-sans">Value.in</span> - Create your website
        </motion.p>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-4xl px-4"
        >
          We Don't Just Create Websites, We Build Trust
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl mb-6 max-w-xl px-4"
        >
          We build beautiful, responsive websites to showcase your brand.
        </motion.p>
        <motion.button
          onClick={handleOpenModal}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold rounded-full cursor-pointer shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 animate-pulse"
        >
          🚀 Book a Call
        </motion.button>

        {showSuccessPopup && (
          <div className="fixed bottom-8 bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 z-50 animate-fade-in">
            <CheckCircle size={18} /> Appointment request sent!
          </div>
        )}
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="relative z-20 bg-gray-900 text-white rounded-xl w-full max-w-lg shadow-xl animate-slide-up max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <div className="sticky top-0 bg-gray-900 z-10 flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold">Book a Slot</h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                  <Calendar size={16} className="mr-2" /> Select Date
                </label>
                <input
                  type="date"
                  min={getTodayString()}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  style={{ colorScheme: 'dark' }}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                  <Clock size={16} className="mr-2" /> Select Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-3 rounded text-sm font-medium transition border ${
                        selectedTime === slot ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 px-6 py-2 text-white rounded-lg font-semibold flex items-center gap-2 disabled:bg-gray-500"
                  disabled={!userName || !userPhone || !selectedDate || !selectedTime}
                >
                  <Send size={16} /> Confirm & Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </motion.div>
  );
};

export default HeroSection;
