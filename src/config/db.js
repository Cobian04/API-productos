const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false 
    }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Se conecto a la base de datos correctamente ');
    } catch (error) {
        console.error('Error al conectar a la Base de Datos:', error);
    }
};

testConnection();

module.exports = sequelize;