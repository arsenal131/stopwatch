const db = require("../config/db.config.js");
const Customer = db.customers;

module.exports.create = function(req, res){
  Customer
    .create({
      name: req.body.name,
      age: req.body.age
    })
    .then(function(customer){
      res.json(customer);
    })
    .catch(function(error){
      res.status(400).send(error);
    })
};

module.exports.findAll = function(req, res){
  Customer
    .findAll({
      attributes: { 
        exclude: [
          "createdAt", 
          "updatedAt"
        ] 
      }
    })
    .then(function(customers){
      res.json(customers);
    })
    .catch(function(error){
      res.status(400).send(error)
    })
};
