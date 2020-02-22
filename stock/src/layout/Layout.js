import React from 'react'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'



const Layout = ({children, loggedIn}) =>(
    <>
      <Navbar loggedIn={loggedIn}/> 
      <div>
          {children}
      </div>
    </>
)

const mapStateToProps = ({firebase}) =>({
  loggedIn: firebase.auth
})

export default connect(mapStateToProps)(Layout)