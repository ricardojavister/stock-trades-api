// connection.js
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Trade = require('./models/trades');

sequelize.authenticate()
    .then(() => {
        console.log(`SQLite successfully connected!`);
        return Trade.sync();
    })
    .then(() => {
        console.log(`Trades table created`);
    })
    .catch(error => {
        console.error('Unable to connect to SQLite database:', error);
    });

module.exports = sequelize;
