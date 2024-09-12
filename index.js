const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Book = require('./models/book'); 

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('Welcome book store');
});

app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.listen(8090, () => {
    console.log(' running on port 8090');
});
