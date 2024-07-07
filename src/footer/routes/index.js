const express = require('express');
const router = express.Router();
const footerController = require('../controllers');

router.get('/', footerController.getExample);

module.exports = router;
