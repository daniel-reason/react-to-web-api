var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getMovies())
})

router.post('/', function (req, res) {
  db.saveMovie(req.body)
  res.sendStatus(200)
})

router.delete('/:id', function (req, res) {
  db.deleteMovie(req.params.id)
  res.sendStatus(200)
})

module.exports = router
