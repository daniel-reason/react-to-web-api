module.exports = {
  getMovies: getMovies,
  saveMovie: saveMovie,
  deleteMovie: deleteMovie
}

var movies = [{
  id: 1,
  actor: 'Person 1',
  director: 'Director 1',
  title: 'Movie 1',
  year: 1991
}, {
  id: 2,
  actor: 'Person 2',
  director: 'Director 2',
  title: 'Movie 2',
  year: 1992
}, {
  id: 3,
  actor: 'Person 3',
  director: 'Director 3',
  title: 'Movie 3',
  year: 1993
}]

function getMovies () {
  return movies
}

function saveMovie (movie) {
  movie.id = movies.length + 1
  movies.push(movie)
}

function deleteMovie (id) {
  var position
  movies.forEach(function(w, i) {
    if (id == w.id) {
      position = i
    }
  })
  if (position !== undefined) {
    movies.splice(position, 1)
  }
}
