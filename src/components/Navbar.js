import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import Logo from './Logo'

function Navbar() {

    return (
        <div id='navbar'>
            <div className="navbar_items_container">
                <div className="logo_container">

                    <Logo />
                </div>
                <button>Add Quetion</button>
                <div className="register">
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/Login'>Login</NavLink>
                </div>
            </div>




        </div>
    )
}

export default Navbar
