const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");
const { admin} = require("../middleware/roles");

const vodafoneController = require('../controllers/vodafone_controller');
const orangeController = require('../controllers/orange_controller');

router.get('/vodafone/productOffering', [auth, admin], vodafoneController.product_list);
router.get('/orange/productOffering', [auth, admin], orangeController.product_list);

router.get('/vodafone/productOffering/:id', [auth, admin], vodafoneController.product_by_id);
router.get('/orange/productOffering/:id', [auth, admin], orangeController.product_by_id);

router.get('/vodafone/shoppingCart', [auth, admin], vodafoneController.shopping_cart_list);
router.get('/orange/shoppingCart', [auth, admin], orangeController.shopping_cart_list);

router.get('/vodafone/shoppingCart/:id', [auth, admin], vodafoneController.shopping_cart_by_id);
router.get('/orange/shoppingCart/:id', [auth, admin], orangeController.shopping_cart_by_id);

router.post('/vodafone/shoppingCart', [auth, admin], vodafoneController.create_shopping_cart);
router.post('/orange/shoppingCart', [auth, admin], orangeController.create_shopping_cart);

module.exports = router;