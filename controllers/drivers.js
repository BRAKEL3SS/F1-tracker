const Team = require('../models/team')

module.exports = {
    create,
    delete: deleteOne,
    edit,
    update
}

function create(req, res) {
    Team.findById(req.params.id, function(err, team) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        team.drivers.push(req.body)
        team.save(function(err) {
            res.redirect(`/teams/${team._id}`)
        })
    })
}
function deleteOne(req, res, next) {
    Team.findOne({'drivers._id': req.params.id}).then(function(team) {
        const driver = team.drivers.id(req.params.id);
        if (!driver.user.equals(req.user._id)) return res.redirect(`/teams/${team._id}`);
        driver.remove();
        team.save().then(function() {
          res.redirect(`/teams/${team._id}`);
        }).catch(function(err) {
          return next(err)
        });
      });
    }

function edit(req, res, next) {
    Team.findOne({'drivers._id': req.params.id}).then(function(team) {
        const driver = team.drivers.id(req.params.id);
        res.render('drivers/edit', {title: 'Edit Driver Lineup', driver})
    }).catch(function(err) {
        return next(err)
      });
}
function update(req, res, next) {
    Team.findOne({'drivers._id': req.params.id}).then(function(team) {
        const driver = team.drivers.id(req.params.id);
        driver.name = req.body.name
        driver.age = req.body.age
        driver.homeCountry = req.body.homeCountry
        team.save().then(function() {
            res.redirect(`/teams/${team._id}`);
          })
        
    }).catch(function(err) {
        return next(err)
      });
}


