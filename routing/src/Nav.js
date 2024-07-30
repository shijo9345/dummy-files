import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar=()=> {
  return (
    <nav className='navbar'>
        <h1 style={{fontSize:'34px', borderRadius:'20px'}}>The Site</h1>
        <div className="links">
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>

        </div>
        </nav>
  )
}

export default Navbar;