module.exports = function(app){

  const codingHours = require('../controller/codingHour.controller.js');

  app.post("/api/codinghours/create", codingHours.create);

  app.get("/api/codinghours", codingHours.findAll);

  app.get("/api/codinghours/:id", codingHours.findByPk)

  app.put("/api/codinghours/:id", codingHours.update);

  app.delete("/api/codinghours/:id", codingHours.delete);

}
