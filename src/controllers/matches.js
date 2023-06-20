const Match = require('../models/matchModel');

exports.showMatches = async(req,res,next) => {
    

    try {
      const matches = await Match.find().populate({path: 'teams', select:'name', populate:{path:'players', select:'name'}});
      res.json(matches);
    } catch (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    }
  };

exports.postMatch = async (req,res,next) => {
    try{
        
        const {date,teams,venue}= req.body;
        
        const match = new Match({
            date,
            teams,
            venue
        });

    const savedMatch = await match.save();
    
    res.status(201).json(savedMatch);
    }
    catch (error){
        console.log('errpr creating match', error);
        res.status(500).json({error : "Failed to  create a match"});
    }
};

exports.putMatch = async (req, res, next) => {
    const matchId = req.params.id;
    const { playerOfMatch, matchResult } = req.body;

    try {
        const match = await Match.findById(matchId);

        if (!match) {
        return res.status(404).json({ error: 'Match not found' });
        }

        match.playerOfMatch = playerOfMatch;
        match.matchResult = matchResult;

        const updatedMatch = await match.save();

        res.json(updatedMatch);
    } catch (error) {
        console.error('Error updating match:', error);
        res.status(500).json({ error: 'Failed to update match' });
  }
};


exports.getMatchesByDate = async (req, res, next) => {
    const date = new Date(req.params.date);
    // console.log(date)
  
    try {
      const matches = await Match.find({ date });
  
      if (matches.length === 0) {
        return res.status(404).json({ error: 'No matches found on the given date' });
      }
  
      res.json(matches);
    } catch (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    }
  };


exports.getMatchById = async (req, res, next) => {
    const matchId = req.params.id;
    
    try {
        const match = await Match.findById(matchId);
  
      if (!match) {
        return res.status(404).json({ error: 'No matches found ' });
      }
  
      res.json(match);
    } catch (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    }
  };


