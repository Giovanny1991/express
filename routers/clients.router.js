
//call  to module;
const express = require('express');
const ClientsServices = require('../services/clients.service')
//instance od variable
const route = express.Router();
const service = new ClientsServices();

route.get('/', (req, res) => {
    const allClients = service.fin();
    res.json(allClients);
});


route.get('/:id', (req, res) => {

    const { id } = req.params;
    const oneClients =service.finOne(id);
    res.json(oneClients);

});

route.post('/', (req, res) => {
    const data = req.body;
    const newClient =service.create(data);
    res.json(newClient);
});

route.put('/:id', (req, res) => {

    const { id } = req.params;
    const change = req.body;
    const updateClient = service.update(id,change);

    res.json(updateClient);

});

route.delete('/:id', (req, res) => {

    const { id } = req.params;
    const deleteClient = service.delete(id);

    res.json(deleteClient);

});

module.exports = route;