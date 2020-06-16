import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {filmName, filmGenre, filmDate, films} = props;
  return (
    <Main
      filmName={filmName}
      filmGenre={filmGenre}
      filmDate={filmDate}
      films={films}
    />
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default App;
