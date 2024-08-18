const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    premiere: { type: Date, required: true },
    isRunning: { type: Boolean, default: false },
    language: { type: String, required: true },
    mainGenre: { type: String, required: true },
    posterUrl: { type: String }
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;