import React from 'react'
import Logo from '../../assets/sarova.jpg'
import './navbar.css'
function navbar() {
  return (
      <><div className=' navbar'>
      <div className='navbar-logo'>
        <img className='navbar-logo-img' src={Logo} alt='logo picture' />
        <h1>Sarova Holdings</h1>
      </div>
    </div><div className=' navbar-light'>
        <h2>Welcome to Sarova Holding  Investment Company</h2>
      </div>
    </>
  )
}

export default navbar
