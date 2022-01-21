const ProductController = require('../controllers/ProductController');
const express = require('express');
const router = express.Router();

//Product Routes
router.get('/', ProductController.index);

module.exports = router;