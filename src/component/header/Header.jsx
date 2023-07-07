import React from 'react'
import './Header.css'
import Content from '../content/Content'

function Header() {
  return (
    <div className='najm__header'>
        <h2> اختر نوع الشكوى</h2>

        <div className='najm__header-body '>
        <Content/>

        </div>
        <div className='najm__jeader-btn'>
            <button className='greenHover'>تأكيد</button>
        </div>

    </div>
  )
}

export default Header