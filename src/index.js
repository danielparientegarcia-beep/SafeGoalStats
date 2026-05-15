const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./database');
const authRoutes = require('./routes/authRoutes');

// ✅ PRIMERO creas la app
const app = express();

// ✅ Luego los middlewares
app.use(cors());
app.use(express.json());

// ✅ Luego las rutas
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'SafeGoalStats API funcionando correctamente' });
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});