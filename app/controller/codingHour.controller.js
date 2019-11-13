const db = require('../config/db.config.js');
const codingHour = db.codingHours;

module.exports.create = function(req, res){

  codingHour
    .create({
      codingTime: req.body.codingTime,
      storeReason : req.body.storeReason
    })
    .then(function(codHour){
      res.status(200).json(codHour)
    })
    .catch(function(error){
      res.status(400).send(error);
    })

}

module.exports.findAll = function(req, res){

  codingHour
    .findAll({
      attributes:{
        exclude:[
          "createdAt",
          "updatedAt"
        ]
      }
    })
    .then(function(codeHours){
      res.status(200).json(codeHours);
    })
    .catch(function(error){
      res.status(400).send(error);
    })

}

module.exports.findByPk = function(req, res){

  codingHour
    .findByPk(
      req.params.id,
      {
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt"
          ]
        }
      }
    )
    .then(function(codeHour){
      if(!codeHour){
        res.status(404).json({message:"coding hour id not found"})
      }
      res.status(200).json(codeHour)
    })
    .catch(function(error){
      res.status(400).send(error)
    })

}

module.exports.update = function(req, res){
  
  return codingHour
    .findByPk(req.params.id)
    .then(function(codeHour){
      if(!codeHour){
        res.status(404).json({message: "coding hour id not found"})
      }
      return codeHour
                .update({
                  codingTime: req.body.codingTime,
                  storeReason: req.body.storeReason
                })
                .then(function(codeHour){
                  res.status(200).json(codeHour);
                })
                .catch(function(error){
                  console.log("yeah error");
                  res.status(400).send(error)
                })
    })
    .catch(function(error){
      res.status(400).send(error);
    })

}

module.exports.delete = function(req, res){

  return codingHour
    .findByPk(req.params.id)
    .then(function(codeHour){
      return codeHour.destroy();
    })
    .then(function(){
      res.status(200).json({message: "data #" + req.params.id + " successfully removed"});
    })
    .catch(function(error){
      res.status(400).send(error);
    })

}
