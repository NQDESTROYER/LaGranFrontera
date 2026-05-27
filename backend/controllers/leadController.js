const supabase = require('../config/supabase');

const createLead = async (req, res) => {
  const { nombre, telefono, email } = req.body;

  // Validaciones básicas
  if (!nombre || !telefono || !email) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        { nombre, telefono, email }
      ])
      .select();

    if (error) throw error;

    return res.status(201).json({
      message: '¡Gracias por registrarte! Te avisaremos pronto',
      data
    });
  } catch (error) {
    console.error('Error al insertar lead:', error);
    return res.status(500).json({ error: 'Hubo un error, inténtalo de nuevo' });
  }
};

module.exports = {
  createLead
};
