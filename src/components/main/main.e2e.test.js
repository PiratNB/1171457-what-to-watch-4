import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "../main/main.jsx";

const filmName = `The Grand Budapest Hotel`;
const filmGenre = `Drama`;
const filmDate = 2014;
const films = [
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`should movie title clicked`, () => {
    const onMovieTitleClick = jest.fn();

    const main = shallow(
        <Main
          filmName = {filmName}
          filmGenre={filmGenre}
          filmDate={filmDate}
          films={films}
          onTitleClick={onMovieTitleClick}
        />
    );
    const movieTitles = main.find(`a.small-movie-card__link`);
    movieTitles.forEach((it) => it.simulate(`click`));

    expect(onMovieTitleClick).toBe(films.length);

  });
});
