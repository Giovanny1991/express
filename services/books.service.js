
const { faker } = require('@faker-js/faker');
class BooksServices {

    constructor() {
        this.books = [];
        this.generete();
    }

    generete() {

        for (let i = 0; i < 20; i++) {
            this.books.push({
                id: i + 1,
                name: faker.commerce.product(),
                description: faker.commerce.productDescription()
            })
        }
    }


    fin() {
        return this.books;
    }

    finOne(id) {

        const newbooks = this.books.find(bk => bk.id === parseInt(id));
        return newbooks;

    }

    create(data) {
        this.books.push(data);
        const newBook = this.books[this.books.length - 1]
        return {
            message: "Created",
            data: newBook
        }

    }

    update(id, change) {

        try {

            const idBook = this.books.findIndex(bk => bk.id === parseInt(id))
            if (idBook === -1) {
                throw new Error('Book  not found')
            }

            this.books[idBook] = change;

            return {
                message: "updated",
                data: this.books[idBook]
            }

        } catch (error) {
            console.log.error('Book  not found');
        }
    }

    delete(id) {

        try {

            const idBook = this.books.findIndex(bk => bk.id === parseInt(id))
            if (idBook === -1) {
                throw new Error('Book  not found')
            }

            this.books.splice(idBook,1)

            return {
                message: 'deleted index:' + idBook +",  id:"+id,// mostramos el index y el id que fue eliminado
                data: this.books
            }

        } catch (error) {
            console.log.error('Book  not found');
        }

    }
}
module.exports = BooksServices;
