const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');

const authController = {

    // Registro de nuevo usuario
    async registro(req, res) {
        try {
            const { username, email, password } = req.body;

            // Comprobar si el email ya existe
            const usuarioExistente = await Usuario.buscarPorEmail(email);
            if (usuarioExistente) {
                return res.status(400).json({ error: 'El email ya está registrado' });
            }

            // Encriptar la contraseña
            const passwordHash = await bcrypt.hash(password, 10);

            // Crear el usuario en la base de datos
            const nuevoId = await Usuario.crear(username, email, passwordHash);

            res.status(201).json({ mensaje: 'Usuario registrado correctamente', id: nuevoId });

        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    // Login de usuario existente
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Buscar el usuario
            const usuario = await Usuario.buscarPorEmail(email);
            if (!usuario) {
                return res.status(401).json({ error: 'Credenciales incorrectas' });
            }

            // Comprobar la contraseña
            const passwordValida = await bcrypt.compare(password, usuario.password);
            if (!passwordValida) {
                return res.status(401).json({ error: 'Credenciales incorrectas' });
            }

            // Generar token JWT
            const token = jwt.sign(
                { id: usuario.id, username: usuario.username, rol: usuario.rol },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({ mensaje: 'Login correcto', token });

        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};

module.exports = authController;