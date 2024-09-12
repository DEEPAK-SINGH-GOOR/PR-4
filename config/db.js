const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/bookstore');
    console.log('Connect to Database');
};

module.exports = connectDB;
