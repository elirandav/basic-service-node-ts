const request = require('supertest')
const database = require('../sequelize.init').database

const app = require('../app')

async function initUsers(users) {
    const User = database.models.User
    await User.destroy({truncate: true})
    if(users && users.length > 0){
        await User.bulkCreate(users)
    }
}

let mockedUsers = [{first: 'Zehava', last: 'Ben'}, {first: 'Kobi', last: 'Oz'}];

describe('users', () => {

    const client = request.agent(app)

    test('get users', async () => {

        // arrange
        await initUsers(mockedUsers)

        // act
        let response = await client.get('/users')

        // assert
        expect(response.status).toBe(200)
        expect(response.body)
            .toMatchObject(mockedUsers)
    })

    test('create user', async () => {
        // arrange
        await initUsers([])

        //act
        let user = {first: "Micki", last: "Mouse"};
        let response = await client.post('/users')
            .send(user)

        // assert
        expect(response.status).toBe(200)
        let getResponse = await client.get('/users')
        expect(getResponse.body).toMatchObject([user])
    })
})