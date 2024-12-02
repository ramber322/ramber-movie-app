import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7616ad02aeda5b28f676782f7e1bfd08');
        const data = await response.json();

        const movieData = data.results.map(movie => ({
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));

        
        setMovies(movieData);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies(); 
  }, []); 

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <MainContent movies={movies} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
