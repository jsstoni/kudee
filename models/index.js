'use strict'

module.exports = (mysql) => {
	const mysl_conenct = require('../bin/db')(mysql)
	return {
		snippet: require('./snippet')(mysl_conenct)
	}
}
