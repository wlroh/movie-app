import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, cast, poster }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          cast,
          poster,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h3 className="movie__year">개봉년도: {year}</h3>
          <p className="movie__cast">출연진: {cast}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
