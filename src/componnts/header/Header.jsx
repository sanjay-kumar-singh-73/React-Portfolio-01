import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
     <div className='header'>
       <div className="logo">
        <h1>Ayu<span>shi.</span></h1>
       </div>
       <div className="navbar">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Service</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
       </div>
       <div className="button"><button className='btn'>Hire Me</button></div>
     </div>
    </>
  )
}

export default Header
