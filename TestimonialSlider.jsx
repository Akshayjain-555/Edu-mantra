import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Anjali Verma",
    feedback: "Edu-Mantra ne mera IGNOU ka semester bahut easy kar diya. Notes top class the!",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    feedback: "Assignments and guess papers bilkul exam-oriented hain. I scored 70%+ easily.",
    rating: 4,
  },
  {
    name: "Simran Gupta",
    feedback: "WhatsApp support bhi fast hai. I'm a regular buyer now. Great experience!",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-2">
    {Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto px-4 mt-12"
    >
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
        ❤️ Student Testimonials
      </h2>
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <StarRating rating={item.rating} />
              <p className="text-gray-700 italic text-lg mb-4">“{item.feedback}”</p>
              <p className="text-blue-600 font-semibold">— {item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;
