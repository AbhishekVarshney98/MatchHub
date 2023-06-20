const Match = require('../models/matchModel');
const Team = require('../models/teamModel');

exports.showTeams = async(req,res,next) => {
    

    try {
      const teams = await Team.find().populate('players', 'name');
      res.json(teams);
    } catch (error) {
      console.error('Error retrieving Teams:', error);
      res.status(500).json({ error: 'Failed to retrieve Teams' });
    }
  };

exports.postTeams = async (req,res,next) => {
    try{
        
        const {name, players,totalMatchesPlayed,wins,losses}= req.body;
        
        const team = new Team({
            name, players,totalMatchesPlayed,wins,losses
        });

    const savedTeam = await team.save();
    
    res.status(201).json(savedTeam);
    }
    catch (error){
        console.log('errpr creating team', error);
        res.status(500).json({error : "Failed to  create a team"});
    }
};


// {
//     "name":"CSK",
//     "players":["64907922e35de2df4f5074b0","64907918e35de2df4f5074ae","6490790ee35de2df4f5074ac","64907903e35de2df4f5074aa"]
// }