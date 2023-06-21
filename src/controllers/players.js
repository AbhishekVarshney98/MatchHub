const Player = require('../models/playerModel');


//fetch all players data
const showPlayers = async(req,res,next) => {
    try {
      const players = await Player.find();
      res.json(players);
    } catch (error) {
      console.error('Error retrieving players:', error);
      res.status(500).json({ error: 'Failed to retrieve players' });
    }
  };


//post function to add a new player
const postPlayer = async (req,res,next) => {
    try{
        
        const {name}= req.body;
        
        const player = new Player({
            name
        });

    const savedPlayer = await player.save();
    
    res.status(201).json(savedPlayer);
    }
    catch (error){
        console.log('Error creating player', error);
        res.status(500).json({error : "Failed to create a player"});
    }
};

module.exports = {showPlayers, postPlayer}