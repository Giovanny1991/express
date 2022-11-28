const booksRouter = require('./books.router');
const ClientsRouter=require('./clients.router');
const UsersRouter=require('./users.router')
const OperationsRouter=require('./operations.router')
const express = require('express')
const routerApi = (app) => {

   
    const route = express.Router();

    app.use('/api/v1', route);

    route.use('/books',booksRouter);
    route.use('/clients',ClientsRouter);
    route.use('/users',UsersRouter);
    route.use('/operations',OperationsRouter);

}

module.exports = routerApi;