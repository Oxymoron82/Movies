import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <h1>Movie search 🎬</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMovies={setMovies}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
