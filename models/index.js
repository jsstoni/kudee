'use strict'

module.exports = (mysql) => {
	let option = {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'app'
	}
	const mysl_conenct = require('../bin/db')(option)
	return {
		snippet: require('./snippet')(mysl_conenct),
		comentarios: require('./comentarios')(mysl_conenct)
	}
}
