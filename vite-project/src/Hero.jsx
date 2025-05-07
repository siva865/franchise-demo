import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-yellow-400 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Delicious Buns. Endless Possibilities.</h1>
          <p className="text-xl mb-8">Join the Bun Stop franchise family and bring our signature flavors to your community.</p>
          <div className="flex space-x-4">
            <button className="bg-white text-yellow-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-100 transition">
              Explore Franchise
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-yellow-600 transition">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;