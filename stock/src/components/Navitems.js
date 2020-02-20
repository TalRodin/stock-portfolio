import React from 'react'

const NavItem = ({link, children}) =>{
    return (
        <li>
            <a href={link}>{children}</a>
        </li>
    )
}

export default NavItem