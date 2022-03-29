const Team = require('../models/team')

module.exports = {
    create,
    delete: deleteOne
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
