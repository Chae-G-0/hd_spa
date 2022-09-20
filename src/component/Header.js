import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <li>
            <NavLink to="/">main</NavLink>
        </li>
        <li>
            <Link to="/sub01">sub01</Link>
        </li>
        <li>
            <Link to="/sub02">sub02</Link>
        </li>
    </nav>
  )
}

export default Header