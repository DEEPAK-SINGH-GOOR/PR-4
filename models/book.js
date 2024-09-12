const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    publicationYear: Number,
    price: Number,
    quantity: Number,
    description: String,
    imageUrl: String
});

const Book = mongoose.model('Book', userschema);

module.exports = Book;
