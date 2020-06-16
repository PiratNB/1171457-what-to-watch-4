import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

export const FilmInfo = {
  NAME: `American Horror Story`,
  GENRE: `Horror`,
  DATE: 2011,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const onMovieTitleClickHandler = () => {};

ReactDOM.render(
    <App
      filmName={FilmInfo.NAME}
      filmGenre={FilmInfo.GENRE}
      filmDate={FilmInfo.DATE}
      films={films}
      onMovieTitleClick={onMovieTitleClickHandler}
    />,
    document.querySelector(`#root`)
);
