const express = require('express');
const router = express.Router();
const sharesController = require('../controllers');

router.get('/', sharesController.getExample);
router.get('/:id', sharesController.getExample);

module.exports = router;
