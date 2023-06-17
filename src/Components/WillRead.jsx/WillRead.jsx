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
  return (
    <div>
      <h1>Wnat to Read</h1>
      <div className="book-container">
      {willReadBooks.map((book) => (
        <div className="book-card" key={book.id}>
        <BookCard key={book.id} book={book} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default WillRead
