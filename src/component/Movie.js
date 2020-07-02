import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, cast, poster }) {
  return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{ title }</h3>
            <h3 className="movie__year">{ year }</h3>
            <p className="movie__cast">{ cast }</p>
        </div>
    </div>
  )
}

Movie.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;