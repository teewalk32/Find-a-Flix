const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://teewalk32:Tevandbri!1@classactivities.gglazm9.mongodb.net/');

module.exports = mongoose.connection;
