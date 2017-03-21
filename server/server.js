var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var netflix = require('./routes/netflix')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, '../public')))
app.use('/movies', netflix)

module.exports = app
