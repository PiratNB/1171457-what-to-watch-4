import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {film, onTitleClick, onHover} = props;

  return (
    <article key={film.id} className="small-movie-card catalog__movies-card">
      <div onMouseOver={onHover} className="small-movie-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={onTitleClick}
          className="small-movie-card__link"
          href={`/films/${film.id}`}
        >
          {film.title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired
};

export default MovieCard;
