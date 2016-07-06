'use strict'

module.exports = (app) => {
	app.locals.nl2br = (str) => {
		var str = str.split(/\n/);
		return str.join("<br />");
	}
}
