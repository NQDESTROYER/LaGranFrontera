// Solo cargar dotenv en desarrollo local
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const leadRoutes = require('./routes/leads');

const app = express();

// Configuración de CORS dinámica mejorada
const allowedOrigins = [
  'http://localhost:5173',
  'https://la-gran-frontera.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.warn("Bloqueado por CORS:", origin);
      callback(new Error('No permitido por CORS'));
    }
  }
}));

app.use(express.json());

// Rutas de la API
app.use('/api/leads', leadRoutes);

app.get('/', (req, res) => {
  res.json({ 
    status: "online", 
    message: "API de La Gran Frontera operativa",
    env: process.env.NODE_ENV || "development"
  });
});

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Inicio del servidor solo en local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor local corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
