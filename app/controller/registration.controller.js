const db = require("../config/db.config.js");
const Registration = db.registrations;

module.exports.create = function(req, res){

  Registration
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(function(registration){
      res.status(200).json(registration)
    })
    .catch(function(error){
      res.status(400).send(error)
    })

}
