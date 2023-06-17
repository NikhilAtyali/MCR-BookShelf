import React, {useEffect, useState} from 'react'
import BookCard from "../BookCard/BookCard"
import {bookData} from "../../Data/Data"
const HaveRead = () => {
  const [readBooks, setReadBooks] = useState([])
  useEffect(()=>{
    const currentBookData = bookData.filter((book)=>{
      return book.state === "read"
    })
    setReadBooks(currentBookData)
    
  },[])
  const handleUpdateBook = (updatedBook) => {
    const updatedBooks = readBooks.map((book) => {
      if (book.id === updatedBook.id) {
        return updatedBook;
      }
      return book;
    });

    setReadBooks(updatedBooks.filter(book => book.state === 'read'));
  };
  return (
    <div>
      <h1>Read</h1>
      <div className="book-container"> 
      {readBooks.map((book) => (
        <div className="book-card" key={book.id}>
        <BookCard  book={book} onUpdateBook={handleUpdateBook}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default HaveRead


