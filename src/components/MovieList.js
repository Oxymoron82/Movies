import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
