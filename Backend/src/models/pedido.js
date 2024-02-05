// En models/Order.js
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
module.exports = sequelize;
const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tracking_number: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    state: DataTypes.INTEGER,
    details: DataTypes.TEXT,
    date_created: DataTypes.DATE,
    date_updated: DataTypes.DATE
}, {
    // Other model options go here
});
sequelize.sync()
    .then(() => console.log('Tablas creadas'))
    .catch(error => console.log(error));
module.exports = Order;