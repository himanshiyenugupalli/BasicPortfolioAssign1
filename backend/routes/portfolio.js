const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// GET all portfolio entries
router.get('/', async (req, res) => {
  const data = await Portfolio.find();
  res.json(data);
});

// POST a new portfolio entry
router.post('/', async (req, res) => {
  const newEntry = new Portfolio(req.body);
  const saved = await newEntry.save();
  res.json(saved);
});

module.exports = router;
