const express = require('express');
const router = express.Router();
const sneakerController = require('../controllers/sneakerController');
const { adminMiddleware, authMiddleware } = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.post('/', adminMiddleware, sneakerController.saveSneaker);
  
router.put('/:id', adminMiddleware, sneakerController.updateSneaker);
  
router.delete('/:id', adminMiddleware, sneakerController.removeSneaker);
  
router.get('/', sneakerController.listSneaker);

module.exports = router;