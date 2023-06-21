const path = require('path');

const express = require('express');
const router = express.Router();
const playerController = require('../controllers/players');



router.get('/showPlayers', playerController.showPlayers);

router.post('/player',playerController.postPlayer)

module.exports = router;