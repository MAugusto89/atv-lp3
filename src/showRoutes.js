const express = require('express');
const Show = require('./showModel');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// POST /shows
router.post('/', async (req, res) => {
    const { title, premiere, isRunning, language, mainGenre, posterUrl } = req.body;

    if (!title || !premiere || !language || !mainGenre) {
        return res.status(400).json({ error: "At least one mandatory field was not informed" });
    }

    try {
        const newShow = new Show({
            id: uuidv4(),
            title,
            premiere,
            isRunning,
            language,
            mainGenre,
            posterUrl
        });
        await newShow.save();
        res.status(201).json({ id: newShow.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /shows/:title
router.get('/:title', async (req, res) => {
    const title = req.params.title.toLowerCase();

    try {
        const shows = await Show.find({
            title: new RegExp(title, 'i')
        });
        res.status(200).json({ shows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;