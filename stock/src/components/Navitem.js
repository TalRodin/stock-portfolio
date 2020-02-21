import React from 'react'
import {NavLink} from 'react-router-dom'
const NavItem = ({link, children}) =>{
    return (
        <li>
            <NavLink to={link}>{children}</NavLink>
        </li>
    )
}

export default NavItem