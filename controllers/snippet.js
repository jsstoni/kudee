const app = require('express')
const router  = app.Router()
const mysql = require('mysql')
const models = require('../models')(mysql)
const paginate = require('../bin/paginate')

router.get('/', (req, res) => {
	models.snippet.allSnippet(false, data => {
		var paginas = paginate.paginate(0, data.length, 8)
		res.status(200).jsonp(data);
	})
})

module.exports = router
