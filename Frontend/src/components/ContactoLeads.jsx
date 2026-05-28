import React, { useState } from 'react';

const ContactoLeads = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // VALIDACIÓN FRONTEND: Gmail estrictamente
    if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
      setStatus({ type: 'error', message: 'Por favor, usa un correo @gmail.com' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: '¡Gracias por registrarte! Ya eres socio.' });
        setFormData({ nombre: '', telefono: '', email: '' });
      } else {
        // Aquí capturamos el error de "número duplicado" enviado por el backend
        setStatus({ type: 'error', message: data.error || 'Hubo un error, inténtalo de nuevo.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'No se pudo conectar con el servidor.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300 snap-section min-h-screen flex items-center" id="contacto">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-white/5">
          {/* Lado decorativo */}
          <div className="md:w-1/3 bg-red-600 p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <h3 className="text-3xl font-black mb-6 relative z-10 leading-tight uppercase">ÚNETE AL <br/>CLUB LGF</h3>
            <p className="text-red-50 relative z-10 text-sm font-medium leading-relaxed mb-10">
              Ofertas exclusivas y acceso prioritario para socios del Mercado Franklin.
            </p>
            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-[1.5rem] backdrop-blur-md">
                <span className="text-2xl">🥩</span>
                <p className="text-[10px] font-black uppercase tracking-widest">Cortes Únicos</p>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-[1.5rem] backdrop-blur-md">
                <span className="text-2xl">🔥</span>
                <p className="text-[10px] font-black uppercase tracking-widest">Tips Parrilleros</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="md:w-2/3 p-12 lg:p-16">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter uppercase">Registro</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Sé parte de la mejor comunidad carnicera de Santiago.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-3">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="w-full px-6 py-5 border border-gray-100 dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-3">WhatsApp</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 ..."
                    className="w-full px-6 py-5 border border-gray-100 dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 font-bold"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-3">Email (@gmail.com)</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu-correo@gmail.com"
                  className="w-full px-6 py-5 border border-gray-100 dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 font-bold"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-6 px-8 text-white font-black rounded-2xl transition-all shadow-2xl shadow-red-600/20 tracking-[0.3em] text-[10px] uppercase ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 active:scale-95'
                }`}
              >
                {loading ? 'VERIFICANDO...' : 'REGISTRARME AHORA'}
              </button>
            </form>

            {status.message && (
              <div className={`mt-10 p-6 rounded-2xl text-center text-[10px] font-black uppercase tracking-widest ${
                status.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
              }`}>
                {status.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoLeads;
