const Sequelize = require('sequelize');
const path = require('path');
const express = require('express');
const pedidoRoutes = require('./src/controllers/pedidoController.js');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '/Users/roshkaestudios/Documents/OrderTracking.db')
});

sequelize.sync()
    .then(() => {
        console.log('Tablas creadas');

        const app = express();
        app.use(express.json());

        app.use('/api', pedidoRoutes);

        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`App listening on port ${port}`));
    })
    .catch(error => console.log(error));

module.exports = sequelize;