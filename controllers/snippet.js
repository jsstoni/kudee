const app = require('express')
const router  = app.Router()
const mysql = require('mysql')
const models = require('../models')(mysql)

router.get('/', (req, res) => {
	models.snippet.allSnippet(false, data => {
		res.status(200).jsonp(data);
	})
})

router.get('/:id', (req, res) => {
	const id = req.params.id
	models.snippet.selectSnippetID(id, data => {
		res.status(200).jsonp(data);
	})
})

module.exports = router
