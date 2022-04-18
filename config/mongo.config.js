const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = { 
    mongo_url: 'mongodb://localhost:27017/justitiaa', 
    mongoose: mongoose
}