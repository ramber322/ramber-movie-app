import React, { useState, useEffect } from 'react';
import './styles/MainContent.css'; 

function MainContent({ movies, searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const prevPageFunction = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPageFunction = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-container">
      <div className="cards-container">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie, index) => (
            <div key={index} className="card">
              <img src={movie.image} alt={movie.title} className="card-image" />
              <h3 className="card-title">{movie.title}</h3>
            </div>
          ))
        ) : (
          <p className="no-movies-found">
            No movies found
          </p>
        )}
      </div>

      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={prevPageFunction}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className="pagination-button"
            style={{
              backgroundColor: currentPage === number ? '#0056b3' : '#007BFF',
            }}
            onClick={() => changePage(number)}
          >
            {number}
          </button>
        ))}

        <button
          className="pagination-button"
          onClick={nextPageFunction}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MainContent;
