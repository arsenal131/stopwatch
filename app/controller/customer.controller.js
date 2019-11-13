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
}

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
}

module.exports.update = function(req, res){
  
  return Customer
            .findByPk(req.params.customerId)
            .then(function(customer){
              if(!customer){
                return res.status(404).json({message:'customer not found'});
              }
              return customer
                          .update({
                            codingTime: req.body.codingTime,
                            storeReason: req.body.storeReason
                          })
                          .then(function(){
                            res.status(200).json(customer)
                          })
                          .catch(function(error){
                            res.status(400).send(error)
                          })
            })
            .catch(function(error){
                res.status(400).send(error)
            })
}

module.exports.findByPk = function(req, res){

  Customer
    .findByPk(
       req.params.customerId,
       {
         attributes: { 
           exclude:[
             "createdAt", 
             "updatedAt"
           ] 
         }
       }
    )
    .then(function(customer){
        if(!customer){
          return res.status(404).json({message:"customer not found"})
        }
        return res.status(200).json(customer)
      }
    )
    .catch(function(error){
      res.status(400).send(error);
    })

}

module.exports.delete = function(req, res){

  return Customer
            .findByPk(req.params.customerId)
            .then(function(customer){
              if(!customer){
                return res.status(404).json({message:"customer not found"})
              }
              return customer.destroy()
            })
            .then(function(){
              return res.status(200).json({message:"Data deleted"})
            })
            .catch(function(error){
              return res.status(400).send(error)
            })

}

