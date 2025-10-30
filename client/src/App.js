import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Поиск фильмов 🎬</h1>

                <div style={{ marginBottom: '20px' }}>

               
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  setMovies={setMovies}
                />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <MovieList movies={movies} />
</div>
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
