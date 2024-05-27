import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>

      <div className='container flex items-center gap-3 mt-8 lg:px-0 px-4 mx-auto '>
        <img src={logo} alt='target image' />
        <p className='text-primary text-3xl'></p>
      </div>
    </>
  )
}

export default Navbar
