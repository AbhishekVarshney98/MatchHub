const Match = require('../models/matchModel');
const Team = require('../models/teamModel');


//fetch list of all teams 
const showTeams = async(req,res,next) => {
    
    try {
      const teams = await Team.find().populate('players', 'name');
      res.json(teams);
    } catch (error) {
      console.error('Error retrieving Teams:', error);
      res.status(500).json({ error: 'Failed to retrieve Teams' });
    }
  };


//create a new team with details
const postTeams = async (req,res,next) => {
    try{
        
        const {name, players, totalMatchesPlayed, wins, losses, ties}= req.body;
        
        const team = new Team({
            name, players,totalMatchesPlayed,wins,losses,ties
        });

    const savedTeam = await team.save();
    
    res.status(201).json(savedTeam);
    }
    catch (error){
        console.log('Error creating team', error);
        res.status(500).json({error : "Failed to create a team"});
    }
};


//Get team's past matches using Id
const getTeamPastMatches = async(req,res,next) => {
    try{
        const teamId = req.params.id;

        const matches = await Match.find({
            teams: { $in: [teamId] },
            matchResult: { $ne: null }
          });

         
        if(matches.length==0){
            res.status(200).json({"message": "No matches found"})
            return

        }
        res.status(201).json(matches);
       
    }
    catch(error) {
        console.log('Team fetching error', error);
        res.status(500).json({error: "Failed to load team past matches"});
    }
}


//fetch team's performance details
const getTeamPerformance = async (req, res, next) => {
    const teamId = req.params.id;
    
    try {
        const team = await Team.findById(teamId);
  
      if (!team) {
        return res.status(404).json({ error: 'No teams found ' });
      }
  
      res.json({
        "Team Name": team.name,
        "Team Matches Played": team.wins + team.losses + team.ties,
        "Team Wins": team.wins,
        "Team Losses": team.losses,
        "Team Ties": team.ties

    });
    } catch (error) {
      console.error('Error retrieving details:', error);
      res.status(500).json({ error: 'Failed to retrieve details' });
    }
  };


  //put function to add win, losses and ties for a team
  const editTeam = async (req, res, next) => {
    const teamId = req.params.id;
    const { wins, losses, ties } = req.body;

    try {
        const team = await Team.findById(teamId);

        if (!team) {
        return res.status(404).json({ error: 'Team not found' });
        }

        team.wins = wins;
        team.losses = losses;
        team.ties = ties;
        team.totalMatchesPlayed = wins + losses + ties;

        const updatedTeam = await team.save();

        res.json(updatedTeam);
    } catch (error) {
        console.error('Error updating team:', error);
        res.status(500).json({ error: 'Failed to update team' });
  }
};


module.exports = {showTeams, postTeams, getTeamPerformance, getTeamPastMatches, editTeam}