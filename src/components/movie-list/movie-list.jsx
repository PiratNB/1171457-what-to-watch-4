import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
  }

  setActiveFilm(film) {
    this.setState({
      activeFilm: film
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <MovieCard
              key={film.id}
              filmTitle={film.title}
              filmImage={film.poster}
              onTitleClick={() => {}}
              onHover={this.onHover.bind(this, film.id)}
            />
          );
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      })
      .isRequired)
    .isRequired
};

export default MovieList;
