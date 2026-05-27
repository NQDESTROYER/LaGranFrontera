import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(233,30,99,0.5)]">
            <span className="text-white font-bold text-xs md:text-sm text-center leading-none">LGF<br/>CARNES</span>
          </div>
          <span className="hidden sm:block font-montserrat font-black text-xl tracking-tighter">
            LA GRAN <span className="text-primary">FRONTERA</span>
          </span>
        </div>

        {/* Search Bar - Hidden on small mobile */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Buscar cortes premium..."
            className="w-full bg-card border border-white/10 rounded-full py-2 px-10 focus:outline-none focus:border-primary transition-colors text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-6 font-medium text-sm">
          <a href="#" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#productos" className="hover:text-primary transition-colors">Productos</a>
          <a href="#categorias" className="hover:text-primary transition-colors">Categorías</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-white">
            <Search className="w-6 h-6" />
          </button>
          
          <div className="relative cursor-pointer group">
            <ShoppingCart className="w-6 h-6 group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse shadow-[0_0_10px_rgba(233,30,99,0.8)]">
                {totalItems}
              </span>
            )}
          </div>

          <button className="lg:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
