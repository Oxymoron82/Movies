import React, { useState } from 'react';

function SearchBar({ searchQuery, setSearchQuery, setMovies }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError('');
    setMovies([]); // очистим прошлый список

    const apiKey = '60652a4d';

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError('Фильмы не найдены');
      }
    } catch (err) {
      setError('Произошла ошибка при загрузке');
    }

    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Название фильма"
      />
      <button onClick={handleSearch}>Найти</button>

      {loading && <p>🔄 Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default SearchBar;
