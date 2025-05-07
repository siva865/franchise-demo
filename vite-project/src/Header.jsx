import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-white">Bun Stop</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white font-medium hover:text-yellow-200 transition">Home</a>
            <a href="#menu" className="text-white font-medium hover:text-yellow-200 transition">Menu</a>
            <a href="#franchise" className="text-white font-medium hover:text-yellow-200 transition">Franchise</a>
            <a href="#testimonials" className="text-white font-medium hover:text-yellow-200 transition">Testimonials</a>
            <a href="#contact" className="text-white font-medium hover:text-yellow-200 transition">Contact</a>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;