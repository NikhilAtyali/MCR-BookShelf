import React, {useEffect, useState} from 'react'
import BookCard from "../BookCard/BookCard"
import {bookData} from "../../Data/Data"
const WillRead = () => {
  const [willReadBooks, setWillReadReadBooks] = useState([])
  useEffect(()=>{
    const currentBookData = bookData.filter((book)=>{
      return book.state === "want to read"
    })
    setWillReadReadBooks(currentBookData)
  },[])
  const handleUpdateBook = (updatedBook) => {
    const updatedBooks = willReadBooks.map((book) => {
      if (book.id === updatedBook.id) {
        return updatedBook;
      }
      return book;
    });

    setWillReadReadBooks(updatedBooks.filter(book => book.state === 'want to read'));
  };
  return (
    <div>
      <h1>Wnat to Read</h1>
      <div className="book-container">
      {willReadBooks.map((book) => (
        <div className="book-card" key={book.id}>
        <BookCard  book={book} onUpdateBook={handleUpdateBook} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default WillRead
