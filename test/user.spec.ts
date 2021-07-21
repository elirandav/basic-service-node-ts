import {formatter} from "../modules/user/Formatter";
import {mockPost} from "./httpMock";
import {execSync} from "child_process";
import {runWithCLI} from "../commandLine";

const request = require('supertest')
const database = require('../sequelize.init').database

const app = require('../app')

async function initUsers(users) {
	const User = database.models.User
	await User.destroy({truncate: true})
	if (users && users.length > 0) {
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


	test('get users, first > 10, full = 10', async () => {

		// arrange
		await initUsers([{first: '1234567890111', last: ''}])

		// act
		let response = await client.get('/users')

		// assert
		expect(response.status).toBe(200)
		expect(response.body)
			.toMatchObject([{first: '1234567890', last: ''}])
	})

	test('get users, first + last > 10, full = 10', async () => {
		//act
		const actual = formatter('123', '4567890111')

		// assert
		expect(actual).toStrictEqual({first: '123', last: '4567890'})
	})


	test('get users via CLI', async () => {
		// arrange
		await initUsers(mockedUsers)
		process.argv = ['', '', 'GET']

		//act
		const actual = await runWithCLI()

		// assert
		expect(actual)
			.toMatchObject(mockedUsers)
	})

	// test('verify user account creation side effect', async () => {
	//
	// 	// arrange
	// 	const mockResult = mockPost('/account');
	//
	// 	//act
	// 	const creationResonse = await client.post('/users')
	// 		.send({first: "Micki", last: "Mouse"})
	//
	// 	// assert
	// 	expect(mockResult.bodySent).toMatchObject({userId: creationResonse.body.id })
	// })
})
