import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
    <div className='container mx-auto'>
    <Navbar />
    <Hero />
    <Main />
    </div>
    </>
  )
}

export default Home
