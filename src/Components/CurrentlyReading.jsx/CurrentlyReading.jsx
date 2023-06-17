import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import { bookData } from '../../Data/Data';
import './CurrentlyReading.css'; 

const CurrentlyReading = () => {
  const [currentBooks, setCurrentBooks] = useState([]);

  useEffect(() => {
    const currentBookData = bookData.filter((book) => {
      return book.state === 'currently reading';
    });

    setCurrentBooks(currentBookData);
  }, []);

  const handleUpdateBook = (updatedBook) => {
    const updatedBooks = currentBooks.map((book) => {
      if (book.id === updatedBook.id) {
        return updatedBook;
      }
      return book;
    });

    setCurrentBooks(updatedBooks.filter(book => book.state === 'currently reading'));
  };

  return (
    <div>
      <h1>Currently Reading</h1>
      <div className="book-container">
        {currentBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <BookCard book={book} onUpdateBook={handleUpdateBook} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentlyReading;
