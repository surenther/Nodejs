const path = require('path');

const express = require('express');

const prodcutsController = require('../controllers/products');

const router = express.Router();

router.get('/', prodcutsController.getProdcuts);

module.exports = router;
