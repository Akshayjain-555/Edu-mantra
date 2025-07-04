import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full min-h-[85vh] bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Welcome to <span className="text-indigo-600">Edu-Mantra 🚀</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          India’s Most Trusted IGNOU Notes, Assignments & Guess Papers Platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/91xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
          >
            WhatsApp Us
          </a>
          <a
            href="#order"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Order Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
