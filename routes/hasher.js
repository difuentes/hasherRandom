const express = require('express');
const router = express.Router();
const hashController = require('../controller/hashController')


router.post('/',
    hashController.hash
);



module.exports = router;