module.exports = function(app){

  app.get('/', function(req, res){
    
    let path = process.cwd() + "/plugin/registration/index.html";
    path = path.toString();
    res.status(200).sendFile(path);

  });

}
