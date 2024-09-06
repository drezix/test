const express = require('express');
const router = express.Router();
const { installDB, dropDB } = require('../controllers/installController');

router.get('/', installDB); // Install data in the database
router.delete('/drop', dropDB); // Delete all data in the database

module.exports = router;