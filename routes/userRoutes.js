const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.use(authMiddleware, adminMiddleware);

router.put('/:id', adminMiddleware, userController.updateUser);

router.delete('/:id', adminMiddleware, userController.removeUser);

router.get('/', adminMiddleware, userController.listUser);

router.get('/:id', adminMiddleware, userController.getByID);

module.exports = router;