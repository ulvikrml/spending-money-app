import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h1 className='header-title'>Spend All Your Money</h1>
      <div className='price-card'>
      <p className='price-text'>${props.money}</p>
      </div>
    </header>
  )
}

export default Header