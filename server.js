const express = require('express');
const configureMiddleware = require('./data/middleware/middleware')
// const carsRouter = require('./data/cars/carsRouter')
const server = express();


configureMiddleware(server)

// server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
	res.status(200).json({ api: 'party time' });
});
module.exports = server;
