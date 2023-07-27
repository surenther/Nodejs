const path = require('path');

const express = require('express');

const prodcutsController = require('../controllers/products');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', prodcutsController.getAddProdcut);

// /admin/add-product => POST
router.post('/add-product', prodcutsController.postAddProduct);

module.exports = router;
