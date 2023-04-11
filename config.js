'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    hostUrl: HOST_URL,
    mysql: {
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        host: MYSQL_HOST,
        database: MYSQL_DATABASE,
        connectionLimit: 10,
    }
}
