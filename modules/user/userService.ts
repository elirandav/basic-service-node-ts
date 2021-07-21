import * as repository from './userRepository';
import {formatter} from "./formatter";
import request from "request-promise";
import {userInfo} from "os";

export async function getUsers () {
    const users = await repository.getUsers();
    return users.map(user => formatter(user.first, user.last))
}

export async function createUser (user) {
    const userCreated = await repository.createUser(user)
    return userCreated
}
