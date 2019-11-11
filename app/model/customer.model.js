module.exports = function(sequelize, Sequelize){

    const Customer = sequelize.define('customer', {
      name:{
        type: Sequelize.STRING
      },
      age:{
        type: Sequelize.INTEGER
      }
    });

    return Customer;

}
