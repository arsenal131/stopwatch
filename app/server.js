var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use( bodyParser.json() );

const db = require("../app/config/db.config.js");

db.sequelize.sync({force:true})
  .then(function(){
      console.log("Drop table and resync with {force:true}");
  });

require("../app/route/customer.route.js")(app);

var server = app.listen(8081, function(){

  var host = this.address().address;
  var port = this.address().port;

  console.log("App listening at http://%s:%s, host, port");

});
