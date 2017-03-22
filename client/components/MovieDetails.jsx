import React from 'react'

export default React.createClass({
  render () {
    const movie = this.props.movie
    const isVisble = this.props.isVisible
    const hide = () => this.props.hideDetails()
    const classes = "movie-details " + isVisble ? 'visible' : 'hidden'
    return (
      <div className={classes}>
        <h2>Details</h2>
        <p>Title: {movie.show_title}</p>
        <p>Director: {movie.director}</p>
        <p>Actors: {movie.show_cast}</p>
        <p>Year: {movie.release_year}</p>
        <p>Rating: {movie.rating}</p>
        <p>Summary: {movie.summary}</p>
        <p><img src={movie.poster}></img></p>
        <a href="#" onClick={hide}>Close</a>
      </div>
    )
  }
})
