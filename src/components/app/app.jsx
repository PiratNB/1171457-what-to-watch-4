import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {filmName, filmGenre, filmDate, films, onMovieTitleClick} = props;
  return (
    <Main
      filmName={filmName}
      filmGenre={filmGenre}
      filmDate={filmDate}
      films={films}
      onTitleClick={onMovieTitleClick}
    />
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default App;
