const database = require('../../sequelize.init').database

export async function getUsers() {
    const User = database.models.User
    return User.findAll()
}

export async function createUser(user) {
    const User = database.models.User
    return User.create(user)
}