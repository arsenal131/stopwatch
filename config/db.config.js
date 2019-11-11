const env = require("./config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  env.database,
  env.username,
  env.password,
  {
    host : env.host,
    dialect : env.dialect,
    socketPath : env.socketPath,
    pool:{
      max : env.pool.max,
      min : env.pool.min,
      acquire : env.pool.acquire,
      idle : env.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);

module.exports = db;
