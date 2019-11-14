const env = require("./config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  env.database,
  env.username,
  env.password,
  {
    host : env.host,
    port : env.port,
    dialect : env.dialect,
    dialectOptions: {
      socketPath: env.dialectOptions.socketPath,
      supportBigNumbers: env.dialectOptions.supportBigNumbers,
      bigNumberStrings: env.dialectOptions.bigNumberStrings
    },
    pool:{
      max : env.pool.max,
      min : env.pool.min,
      acquire : env.pool.acquire,
      idle : env.pool.idle
    }
  }
);

const db = {};

db.Sequelize 	= Sequelize;
db.sequelize 	= sequelize;
db.customers 	= require('../model/customer.model.js')(sequelize, Sequelize);
db.codingHours 	= require('../model/codingHour.model.js')(sequelize, Sequelize);
db.registrations= require('../model/registration.model.js')(sequelize, Sequelize);

module.exports = db;
