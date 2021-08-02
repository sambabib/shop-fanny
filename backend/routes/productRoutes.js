const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require('../controller/productController');

// @desc GET all products from db
// @route GET /api/products
router.get('/', getAllProducts);

// @desc GET a particular product from db with id
// @route GET api/products/:id
router.get('/:id', getProductById);

module.exports = router;
