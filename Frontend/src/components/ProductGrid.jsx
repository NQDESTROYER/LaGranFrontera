import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Lomo Vetado Premium 1kg',
    price: 18990,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=1000',
    category: 'Vacuno',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tomahawk Black Angus',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd679?auto=format&fit=crop&q=80&w=1000',
    category: 'Vacuno Especial',
    rating: 5,
  },
  {
    id: 3,
    name: 'Costillar de Cerdo BBQ',
    price: 12900,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000',
    category: 'Cerdo',
    rating: 4,
  },
  {
    id: 4,
    name: 'Entraña Americana 1kg',
    price: 22990,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1000',
    category: 'Vacuno',
    rating: 5,
  },
  {
    id: 5,
    name: 'Punta de Ganso Madurada',
    price: 15400,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=1000',
    category: 'Vacuno',
    rating: 4,
  },
  {
    id: 6,
    name: 'Pack Parrillero Premium',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=1000',
    category: 'Combos',
    rating: 5,
  },
  {
    id: 7,
    name: 'Pechuga de Pollo Orgánica',
    price: 6990,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1000',
    category: 'Pollo',
    rating: 4,
  },
  {
    id: 8,
    name: 'Longaniza Artesanal Chillán',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?auto=format&fit=crop&q=80&w=1000',
    category: 'Embutidos',
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
    <section id="productos" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-black font-montserrat tracking-tighter">
          NUESTROS <span className="text-primary italic">CORTES</span>
        </h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent ml-8 hidden md:block opacity-30"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-40 md:h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-bold">{product.rating}.0</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{product.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-sm md:text-lg font-bold font-montserrat mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-secondary font-black text-lg md:text-2xl mb-4">
                {formatPrice(product.price)}
              </p>
              
              <button 
                onClick={() => addToCart(product)}
                className="mt-auto w-full bg-primary hover:bg-opacity-90 text-white py-2 md:py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-xs md:text-sm transition-all transform active:scale-95 shadow-[0_4px_10px_rgba(233,30,99,0.3)]"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>AÑADIR</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
