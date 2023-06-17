import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../../Components/Container/Container'
const Home = () => {
  return (
    <div>
      <h1>My Book Shelf</h1>
      <Link to="/search">
        <button>Search</button>
      </Link>
      <Container />
    </div>
  )
}

export default Home
