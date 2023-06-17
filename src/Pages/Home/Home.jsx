import React from 'react'
import Container from '../../Components/Container/Container'
import Search from '../Search/Search'
const Home = () => {
  return (
    <div>
      <h1>My Book Shelf</h1>
      <button>Search</button>
      <Search />
      <Container />
    </div>
  )
}

export default Home
