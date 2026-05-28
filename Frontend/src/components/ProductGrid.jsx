import React from 'react';
import { ShoppingCart, Star, Flame, Trophy } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Lomo Vetado Premium',
    price: 18990,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800',
    category: 'Vacuno',
    tag: 'Más Vendido',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tomahawk Black Angus',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd679?auto=format&fit=crop&q=80&w=800',
    category: 'Especial',
    tag: 'Gourmet',
    rating: 5,
  },
  {
    id: 3,
    name: 'Costillar de Cerdo',
    price: 12900,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    category: 'Cerdo',
    tag: 'Parrillero',
    rating: 4,
  },
  {
    id: 4,
    name: 'Entraña Americana',
    price: 22990,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800',
    category: 'Vacuno',
    tag: 'Premium',
    rating: 5,
  },
  {
    id: 6,
    name: 'Pack Parrillero King',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800',
    category: 'Combos',
    tag: 'Oferta',
    rating: 5,
  },
];

const ProductGrid = () => {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);
  };

  return (
    <section id="productos" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300 snap-section min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Trophy className="text-red-600 w-6 h-6" />
            <span className="text-red-600 font-bold tracking-[0.3em] text-sm uppercase">Selección de Temporada</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase">
            COMBOS <span className="text-red-600 italic">DESTACADOS</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Los mejores packs parrilleros pensados para compartir en familia o con amigos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tighter flex items-center gap-1 shadow-lg">
                    <Flame className="w-3 h-3" /> {product.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">{product.category}</span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-end gap-2 mb-8">
                  <p className="text-3xl font-black text-gray-900 dark:text-white">
                    {formatPrice(product.price)}
                  </p>
                </div>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs tracking-widest transition-all duration-300 shadow-xl hover:shadow-red-600/20 active:scale-95 uppercase"
                >
                  <ShoppingCart className="w-5 h-5" />
                  LO QUIERO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
