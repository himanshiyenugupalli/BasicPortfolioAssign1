const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  github: String,
  linkedin: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
