const Feed = require('../models/feed');

exports.getHomePage = async (req, res) => {
    try {
        const feeds = await Feed.find().sort({ createdAt: -1 });
        res.render('home', { feeds });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addPost = async (req, res) => {
    const feed = new Feed({
        name: req.body.name,
        message: req.body.message
    });
    try {
        const newFeed = await feed.save();
        res.redirect('/home');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getFeedPage = async (req, res) => {
    try {
        const post = await Feed.findById(req.params.id);
        res.render('feed', { post });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        await Feed.findByIdAndDelete(req.params.id);
        res.redirect('/home');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getEditPage = async (req, res) => {
    try {
        const post = await Feed.findById(req.params.id);
        res.render('edit', { post });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        await Feed.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/feed/${req.params.id}`);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
