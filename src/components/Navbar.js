import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import Logo from './Logo'
import FollowingIcon from './FollowingIcon'
import HomeIcon from './HomeIcon'
import ComposeIcon from './ComposeIcon'
import GroupIcon from './GroupIcon'
import Notification_icon from './Notification_icon'
import { FaSearch } from "react-icons/fa"

function Navbar() {

    return (
        <div id='navbar'>
            <div className="navbar_items_container">
                <div className="logo_container">

                    <Logo />
                </div>
                <div className="header_navigation_links">


                    <div className="home_icon_container header_icons">
                        <HomeIcon />
                    </div>
                    <div className="following_icon_container header_icons">
                        <FollowingIcon />
                    </div>
                    <div className="compose_icon header_icons">
                        <ComposeIcon />
                    </div>
                    <div className="group_icon header_icons">
                        <GroupIcon />
                    </div>
                    <div className="notification_icon header_icons">
                        <Notification_icon />
                    </div>

                    <div className="search_box">
                        <input type="search" placeholder=' Search Qoura' />


                    </div>
                </div>

                <div className="register">
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/Login'>Login</NavLink>
                </div>
                <div className="add_question">

                    <button>Add Quetion</button>
                </div>
            </div>




        </div >
    )
}

export default Navbar
