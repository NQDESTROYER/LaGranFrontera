import React from 'react';
import { Package, Tag, CreditCard, MapPin, Phone } from 'lucide-react';

const categories = [
  { id: 1, name: 'Combos', icon: Package },
  { id: 2, name: 'Precios', icon: Tag },
  { id: 3, name: 'Métodos de Pago', icon: CreditCard },
  { id: 4, name: 'Ubicación', icon: MapPin },
  { id: 5, name: 'Contacto', icon: Phone },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide no-scrollbar items-center justify-start md:justify-center">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card border-2 border-primary/30 p-1 group-hover:border-primary transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_10px_rgba(233,30,99,0.1)] group-hover:shadow-[0_0_20px_rgba(233,30,99,0.4)]">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <cat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:animate-pulse" />
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-secondary group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
