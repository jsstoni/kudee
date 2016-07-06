'use strict'

module.exports = (app) => {
	app.locals.nl2br = (str) => {
		var str = str.split(/\n/);
		return str.join("<br />");
	}
	app.locals.language = function(lang) {
		switch (parseInt(lang)) {
			case 0: 
				lang = 'text';
			break;
			case 1:
				lang = 'php';
			break;
			case 2:
				lang = 'markup';
			break;
			case 3:
				lang = 'css';
			break;
			case 4:
				lang = 'python';
			break;
			case 5:
				lang = 'ruby';
			break;
			case 6:
				lang = 'java';
			break;
			case 7:
				lang = 'sql';
			break;
			case 8:
				lang = 'javascript';
			break;
		}
		return lang;
	}
}
