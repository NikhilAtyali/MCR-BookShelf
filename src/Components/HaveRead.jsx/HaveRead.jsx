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
    console.log(currentBookData, "CurrentBooks");
  },[])
  return (
    <div>
      <h1>Read</h1>
      <div className="book-container"> 
      {readBooks.map((book) => (
        <div className="book-card" key={book.id}>
        <BookCard key={book.id} book={book} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default HaveRead
