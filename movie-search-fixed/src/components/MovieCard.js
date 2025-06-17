import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
   <div onClick={handleClick} className="movie-card">

      <img
      className="movie-poster"
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'}
        alt={movie.Title}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
