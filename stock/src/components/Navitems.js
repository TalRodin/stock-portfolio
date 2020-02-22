import React from 'react'
import NavItem from './Navitem'

const NavItems = ({clicked, loggedIn}) =>{
    let links
    if (loggedIn.uid){
        links=(
            <ul>
            <NavItem clicked={clicked} link='/'>Transactions</NavItem>
            <NavItem clicked={clicked} link='/portfolio'>Portfolio</NavItem>
            <NavItem clicked={clicked} link='/logout'>Logout</NavItem>
            </ul>  
        )
    }
    else{
        links=(
            <ul>
            <NavItem clicked={clicked} link='/'>Transactions</NavItem>
            <NavItem clicked={clicked} link='/portfolio'>Portfolio</NavItem>
            <NavItem clicked={clicked} link='/login'>Login</NavItem>
            <NavItem clicked={clicked} link='/signup'>SignUp</NavItem>
            </ul>  
        )
    }
    return (
        <nav>
              {links}
        </nav>
    )
}

export default NavItems