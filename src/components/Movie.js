import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/', {
          params: {
            s: 'marvel',
            apikey: '83edcaab',
          },
        });
        console.log('API Response:', response.data);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="movie-list-container">
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.imdbID} >
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
