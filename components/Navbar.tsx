
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rounded-sm transition-transform group-hover:scale-110">
            <span className="text-white font-bold italic text-sm">H</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-gray-900">HIY YAN<span className="text-gray-400 font-light italic ml-1">MOTORS</span></span>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <a href="#" className="text-sm font-medium hover:text-gray-400 transition-colors">Beranda</a>
          <a href="#showcase" className="text-sm font-medium hover:text-gray-400 transition-colors">Miniatur</a>
          <a href="#inventory" className="text-sm font-medium hover:text-gray-400 transition-colors">Inventaris</a>
          <a href="#concierge" className="text-sm font-medium hover:text-gray-400 transition-colors">Concierge</a>
        </div>

        <a 
          href="https://wa.me/6285710271503" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-700 transition-all rounded-full"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
