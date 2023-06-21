const mongoose = require('mongoose');

//Team schema
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player',
      required: true,
    },
   
  ],
  totalMatchesPlayed: {
    type: Number,
    default: null,
  },
  wins: {
    type: Number,
    default: null,
  },
  losses: {
    type: Number,
    default: null,
  },
  ties: {
    type: Number,
    default: null,
  }, 
  // Add more properties as needed
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
