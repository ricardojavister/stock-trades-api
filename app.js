const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./connection'); // Esta línea asegura que la base de datos se conecte y sincronice
const indexRouter = require('./routes/index');
const tradesRouter = require('./routes/trades');

const app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/trades', tradesRouter);
app.use('/', indexRouter);

module.exports = app;

// Sincronizar la base de datos y luego iniciar el servidor
const sequelize = require('./connection');
sequelize.sync().then(() => {
  console.log('Database & tables created!');
  const server = app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});
