const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/leadController');

// Ruta para registro de usuarios (Leads)
router.post('/', registerUser);

module.exports = router;
