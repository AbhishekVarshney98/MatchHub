const Match = require('../models/matchModel');

//fetch all matches
const showMatches = async(req,res,next) => {
    try {
      const matches = await Match.find().populate({path: 'teams', select:'name', populate:{path:'players', select:'name'}}).populate({path: 'playerOfMatch', select: 'name'});
      return res.json(matches);
    } 
    catch (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    }
  };


//add a new upcoming match 
const postMatch = async (req,res,next) => {
    try{
        
        const {date,teams,venue}= req.body;
        const playerOfMatch = req.body.playerOfMatch || null;
        const matchResult = req.body.matchResult || null;
        
        const match = new Match({
            date,
            teams,
            venue,
            playerOfMatch,
            matchResult
        });

    const savedMatch = await match.save();
    
    res.status(201).json(savedMatch);
    }
    catch (error){
        console.log('Error creating match', error);
        res.status(500).json({error : "Failed to  create a match"});
    }
};


//update completed match by playerOfMatch and matchResult 
const putMatch = async (req, res, next) => {
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


//fetch match on a particular date
const getMatchesByDate = async (req, res, next) => {
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


//fetch details about a particular match by Ids
const getMatchById = async (req, res, next) => {
    const matchId = req.params.id;
    
    try {
        const match = await Match.findById(matchId).populate({path: 'teams', select:'name', populate:{path:'players', select:'name'}}).populate({path: 'playerOfMatch', select: 'name'});
  
      if (!match) {
        return res.status(404).json({ error: 'No matches found ' });
      }
  
      res.json(match);
    } catch (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    }
  };


//putMatch updated function to update wins and losses of the winning team
// const putMatch = async (req, res, next) => {
//   const matchId = req.params.id;
//   const { playerOfMatch, matchResult } = req.body;

//   try {
//       const match = await Match.findById(matchId);

//       if (!match) {
//           return res.status(404).json({ error: 'Match not found' });
//       }

//       // Update player of the match and match result in the match document
//       match.playerOfMatch = playerOfMatch;
//       match.matchResult = matchResult;

//       // Save the updated match document
//       const updatedMatch = await match.save();

//       // Update the wins of the corresponding team in the teams database
//       const team = await Team.findOne({ teamName: matchResult });

//       if (!team) {
//           return res.status(404).json({ error: 'Team not found' });
//       }

//       team.wins += 1;

//       // Save the updated team document
//       const updatedTeam = await team.save();

//       res.json({ match: updatedMatch, team: updatedTeam });
//   } catch (error) {
//       console.error('Error updating match:', error);
//       res.status(500).json({ error: 'Failed to update match' });
//   }
// };


module.exports = {showMatches, postMatch, putMatch, getMatchesByDate, getMatchById}