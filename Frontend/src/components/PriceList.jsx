import React from 'react';
import { Tag, Info } from 'lucide-react';

const priceData = [
  { category: 'Vacuno Premium', items: [
    { name: 'Lomo Vetado', price: '$18.990' },
    { name: 'Lomo Liso', price: '$17.500' },
    { name: 'Entraña Americana', price: '$22.990' },
    { name: 'Punta de Ganso', price: '$15.400' },
    { name: 'Posta Rosada', price: '$9.900' },
    { name: 'Asado de Tira', price: '$14.900' },
  ]},
  { category: 'Cerdo y Aves', items: [
    { name: 'Costillar de Cerdo', price: '$12.900' },
    { name: 'Pulpa de Cerdo', price: '$7.500' },
    { name: 'Pechuga de Pollo', price: '$6.990' },
    { name: 'Trutro de Pollo', price: '$4.500' },
  ]},
  { category: 'Embutidos y Fiambrería', items: [
    { name: 'Longaniza Artesanal', price: '$8.500' },
    { name: 'Pate de Campo', price: '$3.900' },
    { name: 'Arrollado de Huaso', price: '$12.000' },
  ]}
];

const PriceList = () => {
  return (
    <section id="lista-precios" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300 snap-section min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
            LISTADO DE <span className="text-red-600">PRECIOS</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Precios actualizados para venta al detalle (por KG)</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5">
          {/* Header Pizarra */}
          <div className="bg-red-600 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3 font-black uppercase tracking-widest text-sm">
              <Tag className="w-5 h-5" />
              Cortes del Día
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-80">
              <Info className="w-4 h-4" />
              Sujeto a Stock
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {priceData.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-red-600 font-black uppercase tracking-[0.2em] text-xs border-b border-red-100 dark:border-red-900/30 pb-2">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-end gap-4 group">
                      <span className="text-gray-800 dark:text-gray-200 font-bold group-hover:text-red-600 transition-colors text-sm md:text-base">
                        {item.name}
                      </span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-200 dark:border-gray-800 mb-1 group-hover:border-red-200 transition-colors"></div>
                      <span className="text-red-600 font-black text-base md:text-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Pizarra */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 text-center">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Consultar precios por mayor directamente al WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
