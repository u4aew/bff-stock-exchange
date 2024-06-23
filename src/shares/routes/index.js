const express = require('express');
const router = express.Router();
const sharesController = require('../controllers');

router.get('/shares', sharesController.getExample);
router.get('/shares/:id', sharesController.getExample);

module.exports = router;
