
const { faker } = require('@faker-js/faker');


class OperationsServices {

    constructor() {
        this.Operations = [];
        this.generete();
    }

    generete() {

        for (let i = 0; i < 20; i++) {
            this.Operations.push({
                id: i + 1,
                imei: faker.phone.imei(),
                number: faker.phone.number()
            })
        }
    }


    fin() {
        return this.Operations;
    }

    finOne(id) {

        const newOperations = this.Operations.find(bk => bk.id === parseInt(id));
        return newOperations;

    }

    create(data) {
        this.Operations.push(data);
        const newOperation = this.Operations[this.Operations.length - 1]
        return {
            message: "Created",
            data: newOperation
        }

    }

    update(id, change) {
    
        try {

            const idOperation = this.Operations.findIndex(bk => bk.id === parseInt(id))
            if (idOperation === -1) {
                throw new Error('Operation  not found')
            }else{
                this.Operations[idOperation] = change;
            }    

            return {
                message: "updated",
                data: this.Operations[idOperation]
            }

        } catch (error) {
            console.log.error('Operation  not found');
        }
    }

    delete(id) {

        try {

            const idOperation = this.Operations.findIndex(bk => bk.id === parseInt(id))
            if (idOperation === -1) {
                throw new Error('Operation not found')
            }else{
                this.Operations.splice(idOperation,1)
            }

            return {
                message: 'deleted index:' + idOperation +",  id:"+id,// mostramos el index y el id que fue eliminado
                data: this.Operations
            }

        } catch (error) {
            console.log.error('Operation not found');
        }

    }
}
module.exports = OperationsServices;
