import React from 'react'
import CurrentlyReading from '../CurrentlyReading.jsx/CurrentlyReading'
import HaveRead from '../HaveRead.jsx/HaveRead'
import WillRead from '../WillRead.jsx/WillRead'
const Container = () => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <CurrentlyReading />
      <HaveRead />
      <WillRead />
    </div>
  )
}

export default Container
