import React from 'react';
import { Instagram, Facebook, Phone as WhatsApp, MapPin, Mail, Clock } from 'lucide-react';

const FooterUbicacion = () => {
  return (
    <footer id="contacto" className="bg-card pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-black font-montserrat tracking-tighter mb-8">
              CONTACTA CON <span className="text-primary italic">NOSOTROS</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Dirección</h4>
                  <p className="text-text-secondary">Mercado Franklin, Local 385, Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <WhatsApp className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">WhatsApp</h4>
                  <p className="text-text-secondary">+56 9 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Horario</h4>
                  <p className="text-text-secondary">Lun - Sab: 09:00 - 18:00 | Dom: 09:00 - 15:00</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Google Maps Embebed */}
          <div className="h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden grayscale contrast-125 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.239322336334!2d-70.6496464!3d-33.4684534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c50e8a8d0b5f%3A0x7d0a0a0a0a0a0a0a!2sMercado%20Franklin!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs">
            © 2026 Carnes La Gran Frontera. Todos los derechos reservados.
          </p>
          <p className="text-text-secondary text-xs flex items-center gap-2">
            Hecho con <span className="text-primary">❤️</span> para amantes de la carne.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterUbicacion;
