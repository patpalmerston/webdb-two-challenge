exports.seed = function(knex) {
	return knex('dealers')
		.truncate()
		.then(function() {
			return knex('dealers').insert([
				{
					VIN: 123213213,
					make: '1966 Pontaic',
					model: 'fire bird',
					mileage: 132123,
					tran_type: 'manual',
					title: 'salvage'
				},
				{
					VIN: 16546545,
					make: '1978 Doge',
					model: 'Ram Charger',
					mileage: 321654,
					tran_type: 'automatic',
					title: 'clean'
				},
				{
					VIN: 9879876546,
					make: '1947 ford',
					model: 'flat bed',
					mileage: 50000,
					tran_type: 'manual',
					title: 'salvage'
				}
			]);
		});
};

// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
