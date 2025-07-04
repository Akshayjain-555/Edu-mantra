import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestimonialSlider from './components/TestimonialSlider';
import ProductsSection from './components/ProductsSection';

function App() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <Hero />
      <ProductsSection />
      <TestimonialSlider />
    </div>
  );
}

export default App;
