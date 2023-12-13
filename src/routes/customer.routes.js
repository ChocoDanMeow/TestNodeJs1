const router = require('express-promise-router')();
const customerController = require('../controllers/customerController');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/Customers', customerController.createCustomer);
router.get('/InquiryCustomers', customerController.listCustomer);
router.put('/UpdateCustomer', customerController.updateCustomerByID);
router.delete('/DeleteCustomer', customerController.deleteCustomerById);
module.exports = router;