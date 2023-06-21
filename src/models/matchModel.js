const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
  ],
  venue:  {
    type: String,
    default: null,
  },
  playerOfMatch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    default: null,
  },
  matchResult: {
    type: String,
    default: null,
  },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
