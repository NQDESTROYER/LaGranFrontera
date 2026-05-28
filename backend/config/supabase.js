const { createClient } = require('@supabase/supabase-js');

// En Vercel, las variables se leen directamente de process.env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Log de seguridad (No muestra las claves, solo si existen)
if (!supabaseUrl || !supabaseKey) {
  console.error("CRÍTICO: Faltan variables de entorno SUPABASE_URL o SUPABASE_KEY");
}

const supabase = createClient(
  supabaseUrl || '', 
  supabaseKey || ''
);

module.exports = supabase;
