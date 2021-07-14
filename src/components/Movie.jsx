import React from 'react';
import { getBackdropUrl } from '../utils';
import './movie.css';

const Movie = ({ movie, handleClick }) => (
  <div className="movie" onClick={handleClick} tabIndex="0">
    <div className="image-container" style={{ backgroundImage: `url("${getBackdropUrl(movie.poster_path)}")` }}>
      <div className="rating">{movie.vote_average}</div>
    </div>
    <div className="title-container">
      {movie.title}
    </div>
  </div>
)

export default Movie;
