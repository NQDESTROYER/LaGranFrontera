const supabase = require('../config/supabase');

const registerUser = async (req, res) => {
  const { nombre, telefono, email } = req.body;

  // 1. Validación de entrada (Single Responsibility)
  if (!nombre || !telefono || !email) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // 2. Validación estricta de Gmail (Backend)
  if (!email.toLowerCase().endsWith('@gmail.com')) {
    return res.status(400).json({ error: 'Solo se permiten correos @gmail.com' });
  }

  try {
    // 3. Verificar si el número de teléfono ya existe
    const { data: existingUser, error: checkError } = await supabase
      .from('usuarios')
      .select('id')
      .eq('telefono', telefono)
      .maybeSingle();

    if (checkError) throw checkError;

    if (existingUser) {
      return res.status(409).json({ error: 'Este número de teléfono ya está registrado' });
    }

    // 4. Insertar nuevo usuario
    const { data, error } = await supabase
      .from('usuarios')
      .insert([
        { 
          nombre, 
          telefono, 
          correo_electronico: email.toLowerCase()
        }
      ])
      .select();

    if (error) throw error;

    return res.status(201).json({
      message: '¡Registro exitoso! Gracias por unirte a La Gran Frontera.',
      data: data[0]
    });
  } catch (error) {
    console.error('Error en el registro de usuario:', error);
    return res.status(500).json({ error: 'Hubo un problema. Inténtalo más tarde.' });
  }
};

module.exports = {
  registerUser
};
