const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');
const usersRouter = require("../users/user-router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
    res.send('<h1></br>🚀🚀🚀🚀🚀🚀🚀🚀🚀</br>🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀</br>🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀</h1>');
})

module.exports = server;

// http: //127.0.0.1:64299/?key=d1aa2cea-6ffe-4b21-a39f-d91212f0c6c2