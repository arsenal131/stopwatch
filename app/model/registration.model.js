module.exports = function(sequelize, Sequelize){

  const Registration = sequelize.define('user', {
    id_user:{
      type: Sequelize.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true
    },
    username:{
      type: Sequelize.STRING(64)
    },
    email:{
      type: Sequelize.STRING(64)
    },
    password:{
      type: Sequelize.STRING(64)
    }
  });

  return Registration;

}
