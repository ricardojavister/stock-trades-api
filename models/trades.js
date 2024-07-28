const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = require('../connection');
const sequelize = new Sequelize("sqlite::memory:");

const Trade = sequelize.define('trade', {
    type: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    symbol: DataTypes.TEXT,
    shares: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    timestamp: DataTypes.BIGINT,
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, { timestamps: false });

module.exports = Trade;
