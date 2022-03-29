var express = require('express');
var router = express.Router();
const teamsCtrl = require('../controllers/teams')
const isLoggedIn = require('../config/auth')

router.get('/', teamsCtrl.index)
router.get('/new', isLoggedIn, teamsCtrl.new)
router.get('/:id', teamsCtrl.show)
router.post('/', isLoggedIn, teamsCtrl.create)

module.exports = router