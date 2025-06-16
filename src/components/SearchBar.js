import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, setMovies }) {
  const handleSearch = async () => {
    const apiKey = '60652a4d'; // Получи здесь: https://www.omdbapi.com/apikey.aspx
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        placeholder="Put movie name"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔍 Search</button>
    </div>
  );
}

export default SearchBar;
