import * as repository from './UserRepository' ;

export async function getUsers () {
    return repository.getUsers()
}

export async function createUser (user) {
    return repository.createUser(user)
}