import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=60652a4d&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p style={{ textAlign: 'center' }}>Загрузка...</p>;

  return (
    <div className="movie-details-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Назад
      </button>

      <div className="movie-details-content">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
          alt={movie.Title}
          className="movie-details-poster"
        />
        <div className="movie-details-text">
          <h2>{movie.Title} ({movie.Year})</h2>
          <p><strong>Жанр:</strong> {movie.Genre}</p>
          <p><strong>Режиссёр:</strong> {movie.Director}</p>
          <p><strong>Актёры:</strong> {movie.Actors}</p>
          <p><strong>Сюжет:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
