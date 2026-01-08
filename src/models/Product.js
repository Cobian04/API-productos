const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El nombre no puede estar vacío" }
        }
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0 
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0 
        }
    },
    description: {
        type: DataTypes.TEXT
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Product;