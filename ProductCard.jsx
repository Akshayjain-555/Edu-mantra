import React from 'react';

const ProductCard = ({ title, subject, price, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between hover:scale-105 transition-all duration-300">
      <div>
        <h3 className="text-xl font-bold text-indigo-700 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-1"><strong>Subject:</strong> {subject}</p>
        <p className="text-gray-500 text-sm mb-3">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 font-semibold">₹{price}</span>
        <a
          href="https://wa.me/91xxxxxxxxxx?text=Hi, I want to order this product: *{title}*"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
