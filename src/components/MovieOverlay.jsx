import React from 'react';

import { getBackdropUrl, parseDate } from '../utils';
import './movieOverlay.css';

const MovieOverlay = ({ movie, handleCloseClick }) => (
  <div className="overlay-container">
    <div className="movie-overlay">
      <div className="header">
        <h3 className="title">{movie.title}</h3>
        <button onClick={handleCloseClick} className="close">&times;</button>
      </div>
      <div className="content">
        <div className="movie-image" style={{ backgroundImage: `url("${getBackdropUrl(movie.poster_path)}")` }}></div>
        <div className="movie-details">
          <div className="release-date">
            <span className="release-date-text">Release date:</span> {parseDate(movie.release_date)}
          </div>
          <div className="overview">{movie.overview}</div>
          <div className="votes">
            <span className="vote-average">{movie.vote_average}</span>
            / 10 ({movie.vote_count} total votes)
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MovieOverlay;

