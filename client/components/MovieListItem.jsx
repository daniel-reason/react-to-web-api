import React from 'react'
import api from '../api'

export default React.createClass({
  render () {
    const movie = this.props.movie
    return (
      <div className="movie-list-item">
        {`${movie.show_title} `}
        <a href="#" onClick={() => this.props.showDetails(movie)}>details</a>
          &nbsp; | &nbsp;
        <a href="#" onClick={this.remove}>delete</a>
      </div>
    )
  },

  remove () {
    var refreshMovies = this.props.refreshMovies
    api.removeMovie(this.props.movie.id, function (err, res) {
      if (err) throw err
      refreshMovies()
    })
  }

})
