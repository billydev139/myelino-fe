import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>

      <div className=' flex items-center gap-3 mt-8 '>
        <img src={logo} alt='target image' />
        <p className='text-primary text-3xl'>Myelino</p>
      </div>
    </>
  )
}

export default Navbar
