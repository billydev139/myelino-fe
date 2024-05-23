import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Hero from '../components/Hero'

const Home = () => {
  const [updateData,setUpdateData]=useState(false)
  return (
    <>
    <div className=''>
    <Navbar  />
    <Hero setUpdateData={setUpdateData}  updateData={updateData} />
    <Main updateData={updateData} />
    </div>
    </>
  )
}

export default Home
