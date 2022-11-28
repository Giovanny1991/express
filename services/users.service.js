
const { faker } = require('@faker-js/faker');


class UsersServices {

    constructor() {
        this.Users = [];
        this.generete();
    }

    generete() {

        for (let i = 0; i < 20; i++) {
            this.Users.push({
                id: i + 1,
                music: faker.music.genre(),
                gender: faker.music.songName()
            })
        }
    }


    fin() {
        return this.Users;
    }

    finOne(id) {

        const newUsers = this.Users.find(bk => bk.id === parseInt(id));
        return newUsers;

    }

    create(data) {
        this.Users.push(data);
        const newUser = this.Users[this.Users.length - 1]
        return {
            message: "Created",
            data: newUser
        }

    }

    update(id, change) {
    
        try {

            const idUser = this.Users.findIndex(bk => bk.id === parseInt(id))
            if (idUser === -1) {
                throw new Error('User  not found')
            }else{
                this.Users[idUser] = change;
            }    

            return {
                message: "updated",
                data: this.Users[idUser]
            }

        } catch (error) {
            console.log.error('User  not found');
        }
    }

    delete(id) {

        try {

            const idUser = this.Users.findIndex(bk => bk.id === parseInt(id))
            if (idUser === -1) {
                throw new Error('User not found')
            }else{
                this.Users.splice(idUser,1)
            }

            return {
                message: 'deleted index:' + idUser +",  id:"+id,// mostramos el index y el id que fue eliminado
                data: this.Users
            }

        } catch (error) {
            console.log.error('User not found');
        }

    }
}
module.exports = UsersServices;
