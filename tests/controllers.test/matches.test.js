const Match = require('../../src/models/matchModel');
const { getMatchesByDate } = require('../../src/controllers/matches');

describe('Matches Controller', () => {
  describe('getMatchesByDate', () => {
    it('should fetch matches by date', async () => {
      // Create a mock request object with necessary parameters
      const req = {
        params: {
          date: '2023-05-29'
        }
      };

      // Create a mock response object with necessary methods
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };

      // Create a mock array of matches
      const matches = [
        {
          _id: '64942966622d45af87094562',
          date: '2023-05-29T00:00:00.000+00:00',
          teams: ['64942166622d45af87094536', '64942166622d45af87094538'],
          venue: 'Greenfield International Stadium',
          playerOfMatch: '649420f4622d45af8709449f',
          matchResult: 'RR won by 5 runs'
        }
        // Add more matches if needed
      ];

      // Mock the find method of the Match model to return the mock matches
      Match.find = jest.fn().mockResolvedValue(matches);

      // Call the getMatchesByDate function
      await getMatchesByDate(req, res, {});

      // Expect the Match.find method to have been called with the correct date parameter
      expect(Match.find).toHaveBeenCalledWith({ date: new Date('2023-05-29') });

      // Expect the response to have been sent with the matches array
      expect(res.json).toHaveBeenCalledWith(matches);
    });

    it('should handle no matches found on the given date', async () => {
      // Create a mock request object with necessary parameters
      const req = {
        params: {
          date: '2023-05-30'
        }
      };

      // Create a mock response object
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      // Mock the find method of the Match model to return an empty array
      Match.find = jest.fn().mockResolvedValue([]);

      // Call the getMatchesByDate function
      await getMatchesByDate(req, res, {});

      // Check if the response status method is called with the correct status code
      expect(res.status).toHaveBeenCalledWith(404);

      // Check if the response json method is called with the error message
      expect(res.json).toHaveBeenCalledWith({ error: 'No matches found on the given date' });
    });

    it('should handle errors when fetching matches', async () => {
      // Create a mock request object with necessary parameters
      const req = {
        params: {
          date: '2023-05-29'
        }
      };

      // Create a mock response object
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      // Mock the find method of the Match model to throw an error
      Match.find = jest.fn().mockRejectedValue(new Error('Database error'));

      // Call the getMatchesByDate function
      await getMatchesByDate(req, res, {});

      // Check if the response status method is called with the correct status code
      expect(res.status).toHaveBeenCalledWith(500);

      // Check if the response json method is called with the error message
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to retrieve matches' });
    });
  });
});
