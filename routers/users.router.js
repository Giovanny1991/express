
//call  to module;
const express = require('express');
const UsersServices = require('../services/users.service')
//instance od variable
const route = express.Router();
const service = new UsersServices();

route.get('/', (req, res) => {
    const allUsers = service.fin();
    res.json(allUsers);
});


route.get('/:id', (req, res) => {

    const { id } = req.params;
    const oneUsers =service.finOne(id);
    res.json(oneUsers);

});

route.post('/', (req, res) => {
    const data = req.body;
    const newUser =service.create(data);
    res.json(newUser);
});

route.put('/:id', (req, res) => {

    const { id } = req.params;
    const change = req.body;
    const updateUser = service.update(id,change);

    res.json(updateUser);

});

route.delete('/:id', (req, res) => {

    const { id } = req.params;
    const deleteUser = service.delete(id);

    res.json(deleteUser);

});

module.exports = route;