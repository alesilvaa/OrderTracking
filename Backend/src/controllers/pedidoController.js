const express = require('express');
const router = express.Router();
const Order = require('../models/pedido');  // cambiar a tu ruta real de Order.js

// Crear pedido
router.post('/orders', async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).send(order);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Leer todos los pedidos
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.send(orders);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Actualizar pedido
router.put('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            const updatedOrder = await order.update(req.body);
            res.send(updatedOrder);
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Eliminar pedido
router.delete('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            await order.destroy();
            res.send({ message: 'Order deleted' });
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;