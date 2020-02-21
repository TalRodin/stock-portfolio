import React from 'react'
import NavItem from './Navitem'

const NavItems = ({clicked}) =>{
    return (
        <nav>
            <ul>
                <NavItem clicked={clicked} link='/'>Transactions</NavItem>
                <NavItem clicked={clicked} link='/portfolio'>Portfolio</NavItem>
                <NavItem clicked={clicked} link='/login'>Login</NavItem>
                <NavItem clicked={clicked} link='/signup'>SignUp</NavItem>
            </ul>
        </nav>
    )
}

export default NavItems