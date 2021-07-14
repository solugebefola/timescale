import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import api from '../api';

import logo from '../images/logo.svg';
import MovieOverlay from './MovieOverlay';
import './app.css'

const App = () => {
  const [recentMovies, setRecentMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    getRecent()
  }, [])

  const getRecent = () => {
    api.getRecentMovies()
      .then(setRecentMovies)
      .catch(setError)
      .finally(() => setLoading(false))
  }

  const selectMovie = (i) => () => {
    setSelectedMovie(recentMovies[i])
  }

  const unSelectMovie = () => {
    setSelectedMovie(null)
  }

  return (
    <>
      <div className="movies-page">
        <div className="header">
          <img src={logo} alt="Timescale" />
          <input type="search" name="search" id="search" placeholder="Search for a movie" />
        </div>
        <hr />
        <h2>Most Recent Movies</h2>
        <div className="movies-list">
          {
            recentMovies.map((movie, i) => (
              <Movie movie={movie} key={movie.title} handleClick={selectMovie(i)} />
            ))
          }
        </div>
      </div>
      {!!selectedMovie && <MovieOverlay movie={selectedMovie} handleCloseClick={unSelectMovie} />}
    </>
  )
}

export default App;
