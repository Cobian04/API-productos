require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes'); 


require('./models/Product'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/products', productRoutes);

console.log("Intentando sincronizar tablas...");


sequelize.sync({ alter: true }) 
    .then(() => {
        console.log('Tablas sincronizadas correctamente');
        app.listen(PORT, () => {
            console.log(` Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error(' Error fatal al sincronizar:', error);
    });