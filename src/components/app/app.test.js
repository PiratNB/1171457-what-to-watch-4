import React from "react";
import renderer from "react-test-renderer";
import App from "../app/app.jsx";

const FilmInfo = {
  NAME: `American Horror Story`,
  GENRE: `Horror`,
  DATE: 2011,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          filmName = {FilmInfo.NAME}
          filmGenre={FilmInfo.GENRE}
          filmDate={FilmInfo.DATE}
          films={films}
          onMovieTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
