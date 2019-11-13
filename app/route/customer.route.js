module.exports = function(app){

  //customer
  
  const customers = require('../controller/customer.controller.js');
  
  app.post('/api/customers/create', customers.create);

  app.get('/api/customers', customers.findAll);

  app.get('/api/customers/:customerId', customers.findByPk);

  app.put('/api/customers/:customerId', customers.update);

  app.delete('/api/customers/:customerId', customers.delete);

}
