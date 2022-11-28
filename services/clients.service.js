
const { faker } = require('@faker-js/faker');


class ClientsServices {

    constructor() {
        this.Clients = [];
        this.generete();
    }

    generete() {

        for (let i = 0; i < 20; i++) {
            this.Clients.push({
                id: i + 1,
                firstName: faker.name.firstName(),
                gender: faker.name.gender()
            })
        }
    }


    fin() {
        return this.Clients;
    }

    finOne(id) {

        const newClients = this.Clients.find(bk => bk.id === parseInt(id));
        return newClients;

    }

    create(data) {
        this.Clients.push(data);
        const newClient = this.Clients[this.Clients.length - 1]
        return {
            message: "Created",
            data: newClient
        }

    }

    update(id, change) {
     
        try {

            const idClient = this.Clients.findIndex(bk => bk.id === parseInt(id))
            if (idClient === -1) {
                throw new Error('Client  not found')
            }else{
                this.Clients[idClient] = change;
            }    

            return {
                message: "updated",
                data: this.Clients[idClient]
            }

        } catch (error) {
            console.log.error('Client  not found');
        }
    }

    delete(id) {

        try {

            const idClient = this.Clients.findIndex(bk => bk.id === parseInt(id))
            if (idClient === -1) {
                throw new Error('Client not found')
            }else{
                this.Clients.splice(idClient,1)
            }

            return {
                message: 'deleted index:' + idClient +",  id:"+id,// mostramos el index y el id que fue eliminado
                data: this.Clients
            }

        } catch (error) {
            console.log.error('Client not found');
        }

    }
}
module.exports = ClientsServices;
