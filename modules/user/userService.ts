import * as repository from './UserRepository' ;
import {formatter} from "./formatter";

export async function getUsers () {
	let users = await repository.getUsers();
	return users.map(user => formatter(user.first, user.last))
}

export async function createUser (user) {
    return repository.createUser(user)
}
