var express = require('express');
var router = express.Router();
const teamsCtrl = require('../controllers/teams')

router.get('/', teamsCtrl.index)

module.exports = router