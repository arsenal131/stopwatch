module.exports = function(app){
  
  const customers = require('../controller/customer.controller.js');
  
  app.post('/api/customers/create', customers.create);

  app.get('/api/customers', customers.findAll);
  
}
