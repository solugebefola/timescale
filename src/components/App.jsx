import React, { useEffect, useMemo, useState } from 'react';
import Movie from './Movie';
import MovieOverlay from './MovieOverlay';
import Header from './Header';
import api from '../api';
import './App.css'
import Loading from './Loading';
import Error from './Error';

const App = () => {
  const [recentMovies, setRecentMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
  const [filter, setFilter] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    getRecentMovies()
  }, [])

  const getRecentMovies = () => {
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
  ), [filter, recentMovies.length])

  return (
    <>
      <div className="movies-page">
        <Header handleInputChange={setFilter} />
        <hr />
        <h2>Most Recent Movies</h2>
        <div className="movies-list">
          {loading && <Loading />}
          {!!error && <Error error={error} />}
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
