'use strict';

const express = require('express');
const config = require('./config');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('common'));

routes(app);

// app.get('/test', async (req, res) => {
//     const connection = await mysql.createConnection(config.mysql);
//     const [rows, fields] = await connection.execute('SELECT * FROM events');
//     res.send(rows);
// });

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
}
);
