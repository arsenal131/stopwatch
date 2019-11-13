var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use( bodyParser.json() );

const db = require("../app/config/db.config.js");

db.sequelize.sync({force:false})
  .then(function(){
      console.log("sync with db {force:false}");
  });

require("../app/route/customer.route.js")(app);
require("../app/route/codingHour.route.js")(app);

var server = app.listen(8081, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s, host, port");

});
