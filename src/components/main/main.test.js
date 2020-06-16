import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main.jsx";

const FilmInfo = {
  NAME: `American Horror Story`,
  GENRE: `Horror`,
  DATE: 2011,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Main
          filmName = {FilmInfo.NAME}
          filmGenre={FilmInfo.GENRE}
          filmDate={FilmInfo.DATE}
          films={films}
          onTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
