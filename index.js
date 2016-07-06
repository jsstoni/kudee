'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = module.exports = express()
const controller = require('./controllers')
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.use('/snippet', controller.snippet)
app.use('/comentario', controller.comentarios)

const server = app.listen(port, () => {
	console.log('SERVER LISTING ON PORT '+port)
})
