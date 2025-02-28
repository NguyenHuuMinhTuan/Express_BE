const express = require('express');
const router = express.Router();
const billDetailsController = require('../controller/billDetailController')

router.get('/',billDetailsController.getAllBillDetails)

module.exports = router