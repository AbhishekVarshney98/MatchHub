const path = require('path');

const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teams');



router.get('/showteams', teamController.showTeams);

router.post('/team',teamController.postTeams)

module.exports = router;