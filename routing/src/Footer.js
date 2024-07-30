import React from 'react'

const Footer= ()=> {
    const year= new Date()
  return (
    <footer className='footer'>Copyright &copy; {year.getFullYear()}
    <h5>Email:thesite@site.com</h5> </footer>
  )
}

export default Footer