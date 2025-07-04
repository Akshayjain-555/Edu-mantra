import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    title: 'EHI-01 Assignment',
    subject: 'History',
    price: 59,
    description: 'Latest July 2025 solved assignment. Handwritten or PDF.',
  },
  {
    title: 'ECO-11 Notes',
    subject: 'Economics',
    price: 89,
    description: 'Exam-ready concise notes with important MCQs.',
  },
  {
    title: 'BSHF-101 Guess Paper',
    subject: 'Foundation',
    price: 49,
    description: 'Expected questions for upcoming TEE session.',
  },
];

const ProductsSection = () => {
  return (
    <section id="order" className="px-6 py-10 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        📚 Available Materials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
