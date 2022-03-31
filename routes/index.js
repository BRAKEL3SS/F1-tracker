var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Welcome to Formula 1'});
});

//Google Oauth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
    //optionally force pick account every time
    //prompt: "select_account"
  }
))

// Google Oauth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/teams', 
    failureRedirect: '/teams'
  }
))

//oauth logout route
router.get('/logout', function(req,res){
  req.logout()
  res.redirect('/teams')
})

module.exports = router;
