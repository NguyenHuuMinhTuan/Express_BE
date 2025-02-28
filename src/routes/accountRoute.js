const express = require('express');
const router = express.Router();
const auth = require('../utils/auth')
const accountControlller = require('../controller/accountControlller');

router.get('/',auth.middlewareAuth,accountControlller.getAllAccounts);

router.post('/',accountControlller.createAccount);

router.put('/:id', accountControlller.updateAccount); 

router.delete('/:id', accountControlller.deleteAccount);

module.exports = router;