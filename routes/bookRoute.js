const express = require('express');
const bookrouter = express.Router();
const Book = require('../models/book');


bookrouter.get('/', (req, res) => {
    res.send('Welcome to book store');
});


bookrouter.post('/', (req, res) => {
    const books = new Book(req.body);
    books.save((err, book) => res.json(book));
});

module.exports = bookrouter;
