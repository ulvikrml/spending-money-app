import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='header-title'>You have ${props.money} on balance</div>
  )
}

export default Header