import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );

  <div className="movies-container">
  {movies.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  ))}
</div>

}

export default MovieList;
