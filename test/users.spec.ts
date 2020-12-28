import {Application, Response} from "express"
import {afterAll, beforeAll, describe, expect, test} from '@jest/globals'


const request = require('supertest');
let app:Application = require('../app')

describe('user actions', () => {
    test('get version', async () => {
        const response = await request(app).get('/users/version')
        expect(response.statusCode).toBe(200)
    })

})
