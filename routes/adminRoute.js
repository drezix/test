const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.post('/add', adminMiddleware, adminController.createAdmin);

module.exports = router;