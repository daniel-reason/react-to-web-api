import request from 'superagent'

var netflixUrl = 'http://localhost:3000/movies'
// var netflixUrl = 'https://community-netflix-roulette.p.mashape.com/api.php'

export default {
  getMovies: getMovies,
  appendMovie: appendMovie,
  removeMovie: removeMovie
}

function getMovies (callback) {
  request
    .get(netflixUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendMovie (movie, callback) {
  request
    .post(netflixUrl)
    .send(movie)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}

function removeMovie (id, callback) {
  request
  .delete(netflixUrl + "/" + id)
  .end(function (err, res) {
    if (err) {
      callback(err)
    } else {
      callback(null, res)
    }
  })
}
