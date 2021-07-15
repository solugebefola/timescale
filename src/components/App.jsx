import React, { useEffect, useMemo, useState } from 'react';
import Movie from './Movie';
import MovieOverlay from './MovieOverlay';
import Header from './Header';
import api from '../api';
import './App.css'

const App = () => {
  const [recentMovies, setRecentMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
  const [filter, setFilter] = useState("")
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

  const filteredMovies = useMemo(() => (
    recentMovies.filter(({ title }) => title.toLowerCase().includes(filter.toLowerCase()))
  ))

  return (
    <>
      <div className="movies-page">
        <Header handleInputChange={setFilter} />
        <hr />
        <h2>Most Recent Movies</h2>
        <div className="movies-list">
          {
            filteredMovies.map((movie, i) => (
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
