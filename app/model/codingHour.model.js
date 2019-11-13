module.exports = function(sequelize, Sequelize){

  const objCodingHour = sequelize.define('codingHour', {
    id_codingHour : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    codingTime : {
      type:Sequelize.INTEGER
    },
    storeReason : {
      type:Sequelize.INTEGER
    }
  }, {
    paranoid:true
  });

  return objCodingHour;

}
