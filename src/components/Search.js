import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          s: searchTerm,
          apikey: '83edcaab',
        },
      });
      setSearchResults(response.data.Search || []);
      setSearchClicked(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }

    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Cari film..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
       <button className="button" onClick={handleSearchClick}>Search</button>
      </div>
      {searchClicked && (
       <div className="search-results">
       {searchResults.map((result, index) => (
         <div key={result.imdbID} className="movie-card">
           <img src={result.Poster} alt={result.Title} />
           <h2>{result.Title}</h2>
         </div>
       ))}
     </div>
     
      )}
    </div>
  );
};

export default Search;
