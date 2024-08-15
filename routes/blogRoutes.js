const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/dashboard', blogController.getBlogs);
router.get('/blogs/new', (req, res) => res.render('blogs/createBlog'));
router.post('/blogs/new', blogController.createBlog);
router.post('/blogs/:id/delete', blogController.deleteBlog);

module.exports = router;
