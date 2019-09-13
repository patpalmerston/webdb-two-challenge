exports.up = function(knex) {
	return knex.schema.createTable('dealers', function(dealers) {
		dealers.increments();
		dealers
			.integer('VIN')
			.notNullable()
			.unique();
		dealers.string('make').notNullable();
		dealers.string('model').notNullable();
		dealers.integer('mileage').notNullable();
		dealers.text('tran_type');
		dealers.text('title');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('dealers');
};

// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
