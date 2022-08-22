const express =require('express');
const router = express.Router();
//const product = require('../models/product');
const controller = require('../controllers/productController');

router.get('/',controller.getAllProducts);

router.get('/:id',controller.getProduct);

router.post('/',controller.create);

router.patch('/:id',controller.updateProduct);

router.delete('/:id',controller.deleteProduct);



module.exports = router;