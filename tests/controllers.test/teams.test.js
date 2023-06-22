const Team = require('../../src/models/teamModel');
const { editTeam } = require('../../src/controllers/teams');

describe('Teams Controller', () => {
  describe('editTeam', () => {
    it('should edit team and return the updated team', async () => {
      // Create a mock request object with necessary parameters and body
      const req = {
        params: {
          id: '64942166622d45af87094536'
        },
        body: {
          wins: 6,
          losses: 4,
          ties: 2
        }
      };

      // Create a mock response object with necessary methods
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };

      // Create a mock team object
      const team = {
        _id: '64942166622d45af87094536',
        name: 'RR',
        wins: 5,
        losses: 3,
        ties: 2,
        save: jest.fn().mockResolvedValue({
          _id: '64942166622d45af87094536',
          name: 'RR',
          wins: 6,
          losses: 4,
          ties: 2,
          totalMatchesPlayed: 12 // 6 + 4 + 2 = 12
        })
      };

      // Mock the findById method of the Team model to return the mock team
      Team.findById = jest.fn().mockResolvedValue(team);

      // Call the editTeam function
      await editTeam(req, res, {});

      // Expect the Team.findById method to have been called with the correct teamId parameter
      expect(Team.findById).toHaveBeenCalledWith('64942166622d45af87094536');

      // Expect the team's properties to have been updated correctly
      expect(team.wins).toBe(6);
      expect(team.losses).toBe(4);
      expect(team.ties).toBe(2);
      expect(team.totalMatchesPlayed).toBe(12);

      // Expect the team's save method to have been called
      expect(team.save).toHaveBeenCalled();

      // Expect the response to have been sent with the updated team
      expect(res.json).toHaveBeenCalledWith({
        _id: '64942166622d45af87094536',
        name: 'RR',
        wins: 6,
        losses: 4,
        ties: 2,
        totalMatchesPlayed: 12
      });
    });

    it('should handle team not found', async () => {
      // Create a mock request object with necessary parameters and body
      const req = {
        params: {
          id: '64942166622d45af87094536'
        },
        body: {
          wins: 6,
          losses: 4,
          ties: 2
        }
      };

      // Create a mock response object
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      // Mock the findById method of the Team model to return null
      Team.findById = jest.fn().mockResolvedValue(null);

      // Call the editTeam function
      await editTeam(req, res, {});

      // Check if the response status method is called with the correct status code
      expect(res.status).toHaveBeenCalledWith(404);

      // Check if the response json method is called with the error message
      expect(res.json).toHaveBeenCalledWith({ error: 'Team not found' });
    });

    it('should handle errors when updating team', async () => {
      // Create a mock request object with necessary parameters and body
      const req = {
        params: {
          id: '64942166622d45af87094536'
        },
        body: {
          wins: 6,
          losses: 4,
          ties: 2
        }
      };

      // Create a mock response object
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      // Mock the findById method of the Team model to throw an error
      Team.findById = jest.fn().mockRejectedValue(new Error('Database error'));

      // Call the editTeam function
      await editTeam(req, res, {});

      // Check if the response status method is called with the correct status code
      expect(res.status).toHaveBeenCalledWith(500);

      // Check if the response json method is called with the error message
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to update team' });
    });
  });
});
