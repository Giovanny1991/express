
//call  to module;
const express = require('express');
const OperationsServices = require('../services/operations.services')
//instance od variable
const route = express.Router();
const service = new OperationsServices();

route.get('/', (req, res) => {
    const allOperations = service.fin();
    res.json(allOperations);
});


route.get('/:id', (req, res) => {

    const { id } = req.params;
    const oneOperations =service.finOne(id);
    res.json(oneOperations);

});

route.post('/', (req, res) => {
    const data = req.body;
    const newOperation =service.create(data);
    res.json(newOperation);
});

route.put('/:id', (req, res) => {

    const { id } = req.params;
    const change = req.body;
    const updateOperation = service.update(id,change);

    res.json(updateOperation);

});

route.delete('/:id', (req, res) => {

    const { id } = req.params;
    const deleteOperation = service.delete(id);

    res.json(deleteOperation);

});

module.exports = route;