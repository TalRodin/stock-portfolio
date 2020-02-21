import React from 'react'
import NavItem from './Navitem'

const NavItems = () =>{
    return (
        <nav>
            <ul>
                <NavItem link='/'>Transactions</NavItem>
                <NavItem link='/portfolio'>Portfolio</NavItem>
            </ul>
        </nav>
    )
}

export default NavItems