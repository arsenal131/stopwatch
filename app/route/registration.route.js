module.exports = function(app){

  app.get('/registration', function(req, res){
    
    let path = process.cwd() + "/plugin/registration/index.html";
    path = path.toString();
    res.status(200).sendFile(path);

  });

  const registration = require("../controller/registration.controller.js");

  app.post("/api/registration/create", registration.create);

  //app.get("/api/registration/findAll", registration.findAll);

  //app.get("/api/registration/:userId", registration.findByPk);

  //app.put("/api/registration/:userId", registration.update);

  //app.delete("/api/registration/:userId", registration.delete);

}
