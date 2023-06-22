const Player = require('../../src/models/playerModel');
const { showPlayers } = require('../../src/controllers/players');

describe('Player Controller', () => {
  describe('showPlayers', () => {
    it('should fetch all players', async () => {
      // Create a mock response object with necessary methods
      const res = {
        json: jest.fn(),
      };

      // Create a mock array of players
      const players = [
        { _id: 'player1', name: 'Player 1' },
        { _id: 'player2', name: 'Player 2' },
        // Add more players if needed
      ];

      // Mock the find method of the Player model to return the mock players
      Player.find = jest.fn().mockResolvedValue(players);

      // Call the showPlayers function
      await showPlayers({}, res, {});

      // Expect the response to have been sent with the players array
      expect(res.json).toHaveBeenCalledWith(players);
    });

    it('should handle errors when fetching players', async () => {
      // Create a mock response object
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      // Mock the find method of the Player model to throw an error
      Player.find = jest.fn().mockRejectedValue(new Error('Database error'));

      // Call the controller function
      await showPlayers({}, res, {});

      // Check if the response status method is called with the correct status code
      expect(res.status).toHaveBeenCalledWith(500);

      // Check if the response json method is called with the error message
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to retrieve players' });
    });
  });
});
