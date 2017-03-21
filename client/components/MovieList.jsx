import React from 'react'
import MovieListItem from './MovieListItem'

export default React.createClass({
  render () {
    return (
      <div className="movie-list">
      <h2>Searched Movies</h2>
      {this.props.movies.map((movie) => {
        return <MovieListItem
          key={movie.id}
          movie={movie}
          hideDetails={this.props.hideDetails}
          showDetails={this.props.showDetails}
          refreshMovies={this.props.refreshMovies} />
      })}
      </div>
    )
  }
})
