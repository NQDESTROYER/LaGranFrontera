import React from 'react';
import { Package, ClipboardList, MapPin, Phone } from 'lucide-react';

const categories = [
  { id: 1, name: 'Combos', icon: Package, href: '#productos' },
  { id: 2, name: 'Precios', icon: ClipboardList, href: '#lista-precios' },
  { id: 3, name: 'Ubicación', icon: MapPin, href: '#footer' },
  { id: 4, name: 'Contacto', icon: Phone, href: '#contacto' },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-12 bg-gray-50 dark:bg-gray-900/50 overflow-visible relative z-30 transition-colors duration-300 snap-center-custom">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href={cat.href}
              className="flex flex-col items-center gap-3 group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Circle Container */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-white/10 p-1 group-hover:border-red-600 transition-all duration-500 shadow-xl group-hover:shadow-red-600/30 relative z-10 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-colors duration-500">
                    <cat.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 dark:text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-500 transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>
              </div>
              
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors duration-300 text-center">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
