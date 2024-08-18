const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const showRoutes = require('./showRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/shows', showRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tvshowapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});