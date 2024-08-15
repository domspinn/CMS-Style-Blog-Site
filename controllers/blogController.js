const { Blog } = require('../models');

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({ where: { userId: req.session.userId } });
        res.render('blogs/dashboard', { blogs });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.createBlog = async (req, res) => {
    const { title, content, author, date } = req.body;
    try {
        await Blog.create({ title, content, author, date, userId: req.session.userId });
        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        await Blog.destroy({ where: { id, userId: req.session.userId } });
        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).json(error);
    }
};
