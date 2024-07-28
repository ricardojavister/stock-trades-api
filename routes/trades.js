const express = require('express');
const router = express.Router();
const Trade = require('../models/trades');

// Create a new Trade
router.post('/', async (req, res) => {
  try {
    const { type, user_id, symbol, shares, price, timestamp } = req.body;
    const trade = await Trade.create({ type, user_id, symbol, shares, price, timestamp });
    res.status(201).json(trade);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all trades
router.get('/', async (req, res) => {
  try {
    const { type, user_id } = req.query;
    const where = {};
    if (type) where.type = type;
    if (user_id) where.user_id = user_id;

    const trades = await Trade.findAll({ where, order: [['id', 'ASC']] });
    res.status(200).json(trades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get trades by id
router.get('/:id', async (req, res) => {
  try {
    const trade = await Trade.findByPk(req.params.id);
    if (!trade) {
      return res.status(404).send('ID not found');
    }
    res.status(200).json(trade);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Block DELETE, PUT, PATCH en /trades/:id
router.all('/:id', (req, res) => {
  res.status(405).send('Method Not Allowed');
});

module.exports = router;
