const con = require("../config/db.config.js");

console.log(con.threadId);

var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"

