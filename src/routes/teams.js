const path = require('path');

const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teams');



router.get('/showteams', teamController.showTeams);

router.post('/team',teamController.postTeams);

router.get('/teampastmatches/:id',teamController.getTeamPastMatches);

router.get('/teamperformance/:id',teamController.getTeamPerformance);

router.put('/editteam/:id',teamController.editTeam);

module.exports = router;