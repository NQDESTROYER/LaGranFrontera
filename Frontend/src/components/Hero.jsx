import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card pt-16">
      {/* Background meat image (placeholder overlay) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2069')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black font-montserrat tracking-tighter mb-4 text-white leading-tight">
          ¡LA MEJOR EN <br />
          <span className="text-primary italic">SABOR Y CALIDAD!</span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          Cortes Premium seleccionados para los paladares más exigentes. Directo desde nuestra carnicería a tu mesa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(233,30,99,0.4)]">
            COMPRAR AHORA
          </button>
          <button className="border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full transition-all">
            VER CATÁLOGO
          </button>
        </div>
      </div>

      {/* Neon Glow Decorations */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
    </section>
  );
};

export default Hero;
