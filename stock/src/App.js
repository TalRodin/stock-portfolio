import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './layout/Layout'
import Portfolio from './containers/Portfolio'
import Transactions from './containers/Transactions'
import Login from './containers/Auth/Login'
import SignUp from './containers/Auth/SignUp'
import {connect} from 'react-redux'
import Logout from './containers/Auth/Logout'
// import { auth } from 'firebase'

const App = ({loggedIn}) => {
    let routes;
    if (loggedIn){
        routes=(
            <Switch>
                <Route exact path='/' component={Transactions}></Route>
                <Route exact path='/portfolio' component={Portfolio}></Route>
                <Route exact path='/logout' component={Logout}></Route>
                <Redirect to='/'/>
            </Switch>
        )
    }
    else{
        routes=(
        <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Redirect to='/login'/>
        </Switch>
        )
    }
    return (
    <Layout>
        
            {routes}
        
    </Layout>)
}

const mapStateToProps=({firebase})=>({
    loggedIn: firebase.auth.uid ? true :null
})


export default connect(mapStateToProps)(App);