const express = require('express')
const router = express.Router();

const cartController = require('../controller/cartController')

router.get('/',cartController.getAllCart)

router.post('/',cartController.createCart)

router.put('/:id',cartController.updateCartById)

router.delete('/:id',cartController.deleteCartById)

module.exports = router