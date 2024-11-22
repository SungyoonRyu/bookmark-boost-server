const express = require('express');
const Bookmark = require('../../models/bookmark');
const router = express.Router();

router.get('/bookmark', async (req, res) => {
    const article = await Bookmark.find();
    res.send(article);
});

router.post('/bookmark', async (req, res) => {
    const article = await Bookmark.create({
        url: req.body.url
    })
    console.log(article);
    res.send('ok');
});

module.exports = router