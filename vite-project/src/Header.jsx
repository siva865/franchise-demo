import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-yellow-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-white">Bun Stop</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white font-medium hover:text-yellow-200 transition">Home</a>
            <a href="#menu" className="text-white font-medium hover:text-yellow-200 transition">Menu</a>
            <a href="#franchise" className="text-white font-medium hover:text-yellow-200 transition">Franchise</a>
            <a href="#testimonials" className="text-white font-medium hover:text-yellow-200 transition">Testimonials</a>
            <a href="#contact" className="text-white font-medium hover:text-yellow-200 transition">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
        
        {/* Mobile Menu - Slides from left */}
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-gray-800">Bun Stop</span>
            <button 
              className="text-gray-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col p-4">
            <a 
              href="#home" 
              className="py-3 px-4 text-gray-800 hover:bg-yellow-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="py-3 px-4 text-gray-800 hover:bg-yellow-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a 
              href="#franchise" 
              className="py-3 px-4 text-gray-800 hover:bg-yellow-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Franchise
            </a>
            <a 
              href="#testimonials" 
              className="py-3 px-4 text-gray-800 hover:bg-yellow-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="py-3 px-4 text-gray-800 hover:bg-yellow-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;