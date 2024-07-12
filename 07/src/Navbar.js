import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/about">about</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar