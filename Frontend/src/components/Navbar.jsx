import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl py-2 shadow-xl border-b border-gray-100 dark:border-white/5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-red-600 shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
            <img src="/logo-lgf.png" alt="Logo La Gran Frontera" className="w-full h-full object-contain p-1" />
          </div>
          <span className={`hidden sm:block font-black text-xl tracking-tighter uppercase transition-colors duration-500 ${
            scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
          }`}>
            La Gran <span className="text-red-600 italic">Frontera</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className={`hidden lg:flex items-center gap-8 font-black text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${
          scrolled ? 'text-gray-500 dark:text-gray-400' : 'text-gray-200'
        }`}>
          <a href="#productos" className="hover:text-red-600 transition-colors">Productos</a>
          <a href="#contacto" className="hover:text-red-600 transition-colors">Club LGF</a>
          <a href="#footer" className="hover:text-red-600 transition-colors">Contacto</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-500 active:scale-90"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="relative cursor-pointer group p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-500">
            <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-white group-hover:text-red-600 transition-colors duration-500" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full animate-bounce shadow-lg border-2 border-white dark:border-gray-900">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
