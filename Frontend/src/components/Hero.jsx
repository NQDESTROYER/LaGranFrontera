import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 dark:bg-black transition-colors duration-500 py-20 snap-section">
      {/* Background with Professional Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-60 dark:opacity-40 scale-105"
          alt="Premium Meat background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="inline-block bg-red-600 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] px-6 py-3 rounded-full mb-8 animate-fade-in shadow-2xl border border-red-500/50">
          Desde el Corazón de Franklin
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase py-2">
          CALIDAD <br/>
          <span className="text-red-600 italic">SIN FRONTERAS</span>
        </h1>
        
        <p className="text-gray-200 dark:text-gray-400 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight animate-slide-up">
          ¡La mejor en sabor y calidad! Especialistas en vacuno 100% seleccionado para tu negocio o parrilla.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delayed">
          <a href="#productos" className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-2xl font-black text-xs tracking-[0.2em] transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase">
            VER CATÁLOGO
          </a>
          <a href="https://wa.link/tayoxu" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/20 px-12 py-6 rounded-2xl font-black text-xs tracking-[0.2em] transition-all uppercase">
            PEDIR WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
