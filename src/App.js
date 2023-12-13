import React, { useState } from 'react';
import Movie from './components/Movie'; 
import Header from './components/Header';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <main>
        <Movie searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;