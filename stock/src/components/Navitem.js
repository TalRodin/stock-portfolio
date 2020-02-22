import React from 'react'
import {NavLink} from 'react-router-dom'
const NavItem = ({link, children,clicked}) =>{
    return (
        <li>
            <NavLink  onClick={clicked} to={link}>{children}</NavLink>
        </li>
    )
}

export default NavItem