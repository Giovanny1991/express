
//call  to module;
const express = require('express');
const BooksServices = require('../services/books.service')
//instance od variable
const route = express.Router();
const service = new BooksServices();

route.get('/', (req, res) => {
    const allBooks = service.fin();
    res.json(allBooks);
});


route.get('/:id', (req, res) => {

    const { id } = req.params;
    const oneBook =service.finOne(id);
    res.json(oneBook);

});

route.post('/', (req, res) => {
    const data = req.body;
    const newBook =service.create(data);
    res.json(newBook);
});

route.put('/:id', (req, res) => {

    const { id } = req.params;
    const change = req.body;
    const updateBook = service.update(id,change);

    res.json(updateBook);

});

module.exports = route;