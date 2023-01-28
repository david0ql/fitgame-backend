const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
const { router } = require('./routes/games');
const { records } = require('./routes/records');
const { historiales } = require('./routes/historial');
const { login } = require('./routes/login');

app.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use('/games', router)
    .use('/records', records)
    .use('/historial', historiales)
    .use('/login', login)
    .listen(1111);

