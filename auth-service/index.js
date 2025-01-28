const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); // Variables de entorno desde el archivo .env

const app = express();
app.use(express.json()); //Para recibir JSON en el cuerpo de las peticiones

app.get('/', (req, res) => {
    res.send('Auth Service this service is running');
});

//Configuracion del puerto

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});

