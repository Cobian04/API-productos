const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); 
    } catch (error) {
        res.status(400).json({ error: 'Token no válido o expirado.' });
    }
};