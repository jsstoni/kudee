'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = module.exports = express()
const controller = require('./controllers')
const port = process.env.PORT || 8080

require('./bin/string')(app)

app.engine('.html', require('ejs').__express)

app.set('views', __dirname + '/views')
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.use('/snippet', controller.inicio)

const server = app.listen(port, () => {
	console.log('SERVER LISTING ON PORT '+port)
})
