module.exports = {
  getMovies: getMovies,
  saveMovie: saveMovie,
  deleteMovie: deleteMovie
}

var movies = [
// {
//   id: 1,
//   actor: 'Person 1',
//   director: 'Director 1',
//   title: 'Movie 1',
//   year: 1991
// }, {
//   id: 2,
//   actor: 'Person 2',
//   director: 'Director 2',
//   title: 'Movie 2',
//   year: 1992
// }, {
//   id: 3,
//   actor: 'Person 3',
//   director: 'Director 3',
//   title: 'Movie 3',
//   year: 1993
// },
{
  "unit": 17008,
  "show_id": 342807,
  "show_title": "The Cable Guy",
  "release_year": "1996",
  "rating": "3.1",
  "category": "Comedies",
  "show_cast": "Jim Carrey, Matthew Broderick, Leslie Mann, Jack Black, George Segal, Diane Baker, Ben Stiller, Eric Roberts, Janeane Garofalo, Andy Dick",
  "director": "Ben Stiller",
  "summary": "When Steven moves into a new place, an overzealous cable guy hooks him up -- and doesn't let go, even after Steven tries to end their \"friendship.\"",
  "poster": "http://netflixroulette.net/api/posters/342807.jpg",
  "mediatype": 0,
  "runtime": "N/A"
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
