const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', function(req,res){
  res.send("Receive GET request");
});

app.post('/', function(req, res){
  res.send("Receive POST request");
});

app.delete('/del_user', function(req, res){
  res.send("Receive DELETE request");
});

app.get('/list_user', function(req, res){
  res.send("Receive GET request for /list_user");
});

app.get('/ab*cd', function(req, res){
  res.send("Receive GET request for pattern ab*cd");
});

var server = app.listen(8081, function(){

  var host = this.address().address;
  var port = this.address().port;

  console.log(host, port);

});
