import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Mail, CreditCard, Truck, ShieldCheck, MessageCircle } from 'lucide-react';

const FooterUbicacion = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-20 pb-10 transition-colors duration-300 snap-section min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 w-full flex-grow flex flex-col justify-center">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50">
                <span className="font-black text-xl">LG</span>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">La Gran <span className="text-red-600">Frontera</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              ¡La mejor en sabor y calidad! Desde el corazón del Mercado Franklin.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/carneslagranfrontera" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://wa.me/56949988424" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-black text-lg mb-6 flex items-center gap-2 uppercase tracking-tighter">
              <ShieldCheck className="text-red-600 w-5 h-5" /> 100% Vacuno
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-bold">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <div className="w-1 h-1 bg-red-600 rounded-full"></div> Venta al por Mayor
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <div className="w-1 h-1 bg-red-600 rounded-full"></div> Venta al Detal
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h4 className="font-black text-lg mb-6 uppercase tracking-tighter">Contacto</h4>
            <div className="flex items-start gap-4 text-gray-400 font-medium">
              <MapPin className="text-red-600 w-6 h-6 flex-shrink-0" />
              <p className="text-sm">Mercado Franklin 840<br/>Local 385 EX5 529</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 font-medium">
              <Phone className="text-red-600 w-5 h-5" />
              <p className="text-sm">+56 9 4998 8424</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-tighter">Servicios</h4>
            <div className="space-y-6">
              <div>
                <a href="https://wa.link/tayoxu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-black px-4 py-2 rounded-lg transition-colors">
                  <MessageCircle className="w-4 h-4" /> PEDIR AHORA
                </a>
              </div>
              <div className="bg-red-600/10 border border-red-600/20 p-3 rounded-lg flex items-center gap-3">
                <Truck className="text-red-600 w-5 h-5" />
                <p className="text-[10px] text-red-500 font-black uppercase tracking-tighter">Despacho</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Google Maps Integration */}
        <div className="w-full h-80 bg-gray-800 rounded-3xl overflow-hidden mb-12 shadow-2xl relative border border-white/5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.188701979929!2d-70.6483!3d-33.4735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c50974410a8b%3A0x6a0a0a0a0a0a0a0a!2sFranklin%20840%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          ></iframe>
        </div>
      </div>

      <div className="w-full pt-10 border-t border-gray-800 text-center px-4">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">© 2026 La Gran Frontera | ¡La mejor en sabor y calidad!</p>
      </div>
    </footer>
  );
};

export default FooterUbicacion;
