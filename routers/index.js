const booksRouter = require('./books.router');
const express = require('express')
const routerApi = (app) => {

   
    const route = express.Router();

    app.use('/api/v1', route);

    route.use('/books',booksRouter);
    // route.use('/clients',booksRouter);
    // route.use('/users',booksRouter);
    // route.use('/operations',booksRouter);

}

module.exports = routerApi;