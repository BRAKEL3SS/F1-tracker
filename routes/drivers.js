const express = require('express');
const router = express.Router();
const driverCtrl = require('../controllers/drivers')
const isLoggedIn = require('../config/auth')


router.post('/teams/:id/drivers', isLoggedIn, driverCtrl.create)
router.delete('/drivers/:id', isLoggedIn, driverCtrl.delete)
router.get('/drivers/:id/edit', isLoggedIn, driverCtrl.edit)
router.put('/drivers/:id', driverCtrl.update)


module.exports = router;