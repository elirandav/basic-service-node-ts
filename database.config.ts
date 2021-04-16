'use strict'
const glob = require('glob')
export const config = {
    username: 'root',
    password: 'pswd',
    database: 'demo',
    host: 'localhost',
    port: '3307',
    dialect: 'mysql',
    timeout: 10000,
    wait_for_connections: true,
    queue_limit: 0,
    acquire_timeout: 10000,
    pool: {
        max_connections: 20,
        min_connections: 10,
        idle: 10000
    },
    models: glob.sync('models/*.ts')
}
