import { FilmInfo } from '../../types/film';
import React from 'react';

type FilmOverviewProps = {
  film: FilmInfo;
};

function FilmOverview({film} : FilmOverviewProps): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.ratingLevel}</span>
          <span className="film-rating__count">{film.ratingCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {film.starring.join(', ')}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
}

export default FilmOverview;
