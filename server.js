const express = require('express');
const server = express();
server.use(express());

server.get('/', (req, res) => {
	res.status(200).json({ api: 'party time' });
});
module.exports = server;
