const express = require('express');
const router = express.Router();
const driverCtrl = require('../controllers/drivers')


router.post('/teams/:id/drivers', driverCtrl.create)



module.exports = router;