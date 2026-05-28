require('dotenv').config();
const express = require('express');
const cors = require('cors');
const leadRoutes = require('./routes/leads');

const app = express();

// Configuración de CORS dinámica
// Permitimos tanto localhost para desarrollo como tu dominio de Vercel
const allowedOrigins = [
  'http://localhost:5173',
  'https://la-gran-frontera.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}));

app.use(express.json());
app.use(express.static('public'));

// Rutas
app.use('/api/leads', leadRoutes);

app.get('/', (req, res) => {
  res.send('API de La Gran Frontera operando correctamente en Vercel');
});

// IMPORTANTE PARA VERCEL: 
// No debemos llamar a app.listen() si estamos en un entorno serverless
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor local corriendo en http://localhost:${PORT}`);
  });
}

// Exportamos la app para que Vercel la maneje como una función
module.exports = app;
