import React, { useState } from 'react';

function SearchBar({ searchQuery, setSearchQuery, setMovies }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError('');
    setMovies([]); // clean previous list

    const apiKey = '60652a4d';

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError('Movies are not found');
      }
    } catch (err) {
      setError('An error occurred while loading movies');
    }

    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Movie title"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>🔄 Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default SearchBar;
