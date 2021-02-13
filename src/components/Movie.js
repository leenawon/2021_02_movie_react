import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from 'react-router-dom';

function Movie({id, year, title, summary, poster, genres}) {
  return <Link to={{
    pathname: `/movie/${id}`,
    state: {
      year,
      title,
      summary,
      poster,
      genres
    }
  }}>
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie_data">
        <h2 className="movie_title">{title}</h2>
        <h4 className="movie_year">{year}</h4>
        <ul className="movie_genres">
          {genres.map((genre, index) => <li key={index} className="genre">{genre}</li>)}
        </ul>
        <p className="movie_summary">{summary.slice(0,180)}...</p>
      </div>
    </div>
  </Link>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie;