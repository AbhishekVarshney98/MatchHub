const path = require('path');

const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matches');


//Routes
router.get('/showmatches', matchController.showMatches);

router.post('/match',matchController.postMatch)

router.put('/match/:id',matchController.putMatch)

router.get('/showmatch/:date',matchController.getMatchesByDate)

router.get('/show-match-by-id/:id',matchController.getMatchById)

module.exports = router;