const path = require('path');

const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matches');



router.get('/showMatches', matchController.showMatches);

router.post('/match',matchController.postMatch)

router.put('/match/:id',matchController.putMatch)

router.get('/showMatch/:date',matchController.getMatchesByDate)

router.get('/showMatchById/:id',matchController.getMatchById)

module.exports = router;