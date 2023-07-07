import React from 'react'
import logo from '../../assets/download 1.png'
import bell from '../../assets/bell.svg'
import './Cnav.css'
import fahdimg from '../../assets/fahd.png'
import searchImg from '../../assets/search.png'
function Cnav() {
  return (
    <nav className='najm__Cnav'>
        <div className='najm__Cnav-person'>
            <div className='najm__Cnav-person-name'>
                <p>فهد</p>
                <p>مدقق الشكاوي</p>
            </div>
            <div className='najm__Cnav-person-img'>
                <img src={fahdimg} alt="fahdimg" />
            </div>
        </div>
        <div className='najm__Cnav-btn'>
            <button className='greenHover'>AR</button>
            <button className='greenHover'><img src={bell} alt="bell" /></button>
        </div>
        <div className='najm__cnav-search'>
           <input type='text' placeholder='ما الذي تبحث عنه'></input>
           <img src={searchImg} alt="searchImg" />
        </div>
        <div className='najm__Cnav-logo'>
            <img src={logo} alt="logo" />
        </div>
    </nav>
  )
}

export default Cnav