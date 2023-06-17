import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bookData } from '../../Data/Data';
import BookCard from "../../Components/BookCard/BookCard"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredResults = bookData.filter((book) =>
      book.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search books" />
      <div>
        {searchResults.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Search;
