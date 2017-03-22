import React from 'react'

import api from '../api'
import SearchMovie from './SearchMovie'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import ErrorMessage from './ErrorMessage'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      movies: [],
      activeMovie: null,
      detailsVisible: false,
      searchMovieVisible: false
    }
  },

  componentDidMount () {
    api.getMovies(this.renderMovies)
  },

  renderMovies (err, movies) {
    this.setState({
      error: err,
      movies: movies
    })
  },

  refreshList (err) {
    this.setState({
      error: err,
      searchMovieVisible: false
    })
    api.getMovies(this.renderMovies)
  },

  showSearchMovie () {
    this.setState({
      searchMovieVisible: true
    })
  },

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Movies FTW!</h1>
        <MovieList
          showDetails={this.showDetails}
          movies={this.state.movies}
          refreshMovies={this.refreshList} />
        <p><a href='#' onClick={this.showSearchMovie}>Search movie</a></p>
        {this.state.searchMovieVisible && <SearchMovie
          finishSearch={this.refreshList} />}
        {this.state.detailsVisible && <MovieDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          movie={this.state.activeMovie} />}
      </div>
    )
  },

  showDetails (movie) {
    this.setState({
      activeMovie: movie,
      detailsVisible: true
    })
  },

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

})
