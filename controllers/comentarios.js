const app = require('express')
const router  = app.Router()
const mysql = require('mysql')
const models = require('../models')(mysql)

router.get('/:id', (req, res) => {
	const id = req.params.id
	models.comentarios.selectComentID(id, data => {
		res.status(200).jsonp(data);
	})
})

module.exports = router
