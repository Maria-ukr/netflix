import React, { useState } from 'react';
import Star from './Star';
import styles from './Movie.module.scss';

function Movie({ movie }) {
  const [rate, setRating] = useState(movie.rate);
  const [hover, setHover] = useState(null);
  return (
    <div className={styles.container}>
      <p className={styles.genre}>
        {movie.genre.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </p>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.info}>
        <p>{movie.year}</p>
        <p>
          DIRECTOR:<span>{movie.director}</span>
        </p>
        <p>
          seasons:
          <span>
            {movie.season} ({movie.episode} Episodes)
          </span>
        </p>
      </div>
      <p className={styles.disc}>{movie.disc}</p>
      <div>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                key={star}
                type='radio'
                name='rating'
                value={currentRating}
                onChange={() => setRating(currentRating)}
              />
              <Star
                className={styles.star}
                style={{
                  fill:
                    currentRating <= (hover || rate) ? '#FFEA2B' : '',
                }}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className={styles.btns}>
        <button className={styles.stream}>
          STREAM NOW<span></span>
        </button>
        <button className={styles.watch}>ALL EPISODES</button>
      </div>
    </div>
  );
}

export default Movie;
