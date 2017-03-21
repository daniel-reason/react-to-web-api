import React from 'react'

import api from '../api'

export default React.createClass({
  getInitialState () {
    return {
      Actor: '',
      Director: '',
      Title: '',
      Year: ''
    }
  },

  render () {
    return (
      <div className="search-movie">
        <form>
          <p><input placeholder="Actor"
            onChange={this.actorSearched}
            value={this.state.actor}
            /></p>
          <p><input placeholder="Director"
            onChange={this.directorSearched}
            value={this.state.director}
            /></p>
          <p><input placeholder="Title"
            onChange={this.titleSearched}
            value={this.state.title}
            /></p>
          <p><input placeholder="Year"
            onChange={this.yearSearched}
            value={this.state.year}
            /></p>
          <button onClick={this.searchMovie}>Search movie</button> {' '}
          <a href="#" onClick={this.props.finishSearch}>Cancel</a>
        </form>
      </div>
    )
  },

  actorSearched (e) {
    this.setState({
      name: e.target.value
    })
  },

  directorSearched (e) {
    this.setState({
      price: e.target.value
    })
  },

  titleSearched (e) {
    this.setState({
      mfg: e.target.value
    })
  },

  yearSearched (e) {
    this.setState({
      inStock: e.target.value
    })
  },

  searchMovie () {
    const movie = this.state
    api.appendMovie(movie, this.props.finishSearch)
  }
})
