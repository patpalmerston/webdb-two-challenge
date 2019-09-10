const express = require('express');
const db = require('./carDb');
router = express.Router();

router.get('/', (req, res) => {
	db.get()
		.then(dealer => {
			res.status(200).json(dealer);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'cant find stuff' });
		});
});

module.exports = router;
