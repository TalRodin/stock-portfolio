import React from 'react'
import Navbar from '../components/Navbar'




const Layout = ({children}) =>(
    <>
      <Navbar/> 
      <div>
          {children}
      </div>
    </>
)

export default Layout