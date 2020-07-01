import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, cast, poster }) {
  return (
    <h5>{ title }</h5>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;