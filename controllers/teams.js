const team = require('../models/team')
const Team = require('../models/team')

module.exports = {
    index,
    new: newTeam,
    create,
    show,
    delete: deleteOne
}

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { title: 'Current Team Lineup', teams})
    })
}

function newTeam(req, res) {
    res.render('teams/new', {title: 'Add a Team'})
}
function create(req, res) {
    const team = new Team(req.body)
    team.save(function(err) {
        if (err) return res.render('teams/new', {title: 'Add a Team'})
        res.redirect('/teams')
    })
}

function show(req, res) {
    Team.findById(req.params.id, function(err, team) {
        res.render('teams/show', { title: 'Team Detail', team });
    });
  }

  function deleteOne(req, res, next) {
    Team.findById(req.params.id, function(err, team) {
        team.remove()
        res.redirect('/teams')
    })
        
    }