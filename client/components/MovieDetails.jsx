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
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <p>Actors: {movie.actor}</p>
        <p>Year: {movie.year}</p>
        <a href="#" onClick={hide}>Close</a>
      </div>
    )
  }
})
