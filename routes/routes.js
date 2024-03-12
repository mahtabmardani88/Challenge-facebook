const express = require('express');
const feedController = require('../controllers/feedController');
const router = express.Router();

router.get('/home', feedController.getHomePage);
router.post('/add-post', feedController.addPost);
router.get('/feed/:id', feedController.getFeedPage);
router.post('/delete-post/:id', feedController.deletePost);
router.get('/edit-post/:id', feedController.getEditPage);
router.post('/update-post/:id', feedController.updatePost);

module.exports = router;
