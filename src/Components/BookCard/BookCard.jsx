import React from 'react'
import {bookData} from "../../Data/Data"
const BookCard = () => {
    console.log({bookData});
  return (
    <div className='bookCardContainer'>
        <img src="bookImage" alt="" />
        <h4>Title</h4>
        <p>Author</p>
    </div>
  )
}

export default BookCard
