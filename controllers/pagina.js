const app = require('express')
const router  = app.Router()
const mysql = require('mysql')
const models = require('../models')(mysql)
const paginate = require('../bin/paginate')

router.get('/:id', (req, res) => {
	var id = req.params.id
	models.snippet.allSnippet(false, data => {
		var paginas = paginate.paginate(id, data.length, 8)
		res.render('index', { data: data, pagina: paginas })
	})
})

module.exports = router
