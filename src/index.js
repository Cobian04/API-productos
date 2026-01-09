require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes'); 


require('./models/Product'); 
require('./models/User'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/products', productRoutes);

sequelize.sync({ alter: true }) 
    .then(() => {
        console.log('Tablas sincronizadas (Usuarios y Productos)');
        app.listen(PORT, () => {
            console.log(` Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error fatal al sincronizar:', error);
    });