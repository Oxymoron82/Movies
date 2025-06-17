import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=60652a4d&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Загрузка...</p>;

  return (
    <div style={{ color: 'white', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
        alt={movie.Title}
        style={{ width: '300px', float: 'left', marginRight: '20px', borderRadius: '8px' }}
      />
      <p><strong>Жанр:</strong> {movie.Genre}</p>
      <p><strong>Режиссёр:</strong> {movie.Director}</p>
      <p><strong>Актёры:</strong> {movie.Actors}</p>
      <p><strong>Сюжет:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetails;
