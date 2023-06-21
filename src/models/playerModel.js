const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add more properties as needed
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;