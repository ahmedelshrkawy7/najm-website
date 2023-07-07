import React from 'react'
import logo from '../../assets/download 1.png'
import bell from '../../assets/bell.svg'
import './Nav.css'

function Nav() {
  return (
    <nav className='najm__nav'>
        <div className='najm__nav-btn'>
            <button className='greenHover'>AR</button>
            <button className='greenHover'><img src={bell} alt="bell" /></button>
        </div>
        <div className='najm__nav-logo'>
            <img src={logo} alt="logo" />
        </div>
    </nav>
  )
}

export default Nav