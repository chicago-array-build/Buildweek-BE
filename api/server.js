const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
nodesRouter = require('../nodes/nodes-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/nodes', nodesRouter);


server.get('/', (req, res) => {
  res.status(200).json({message: 'server is running'})
});

module.exports = server;
