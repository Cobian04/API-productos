const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware'); 

// Rutas Públicas (Cualquiera entra)
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

// Rutas Privadas (Necesitan Token)
// Se pone 'authMiddleware' antes del controlador
router.post('/', authMiddleware, productController.createProduct); 
router.put('/:id', authMiddleware, productController.updateProduct);
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;