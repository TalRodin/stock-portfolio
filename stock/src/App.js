import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './layout/Layout'
import Portfolio from './containers/Portfolio'
import Transactions from './containers/Transactions'
const App = () => {
    return (
    <Layout>
        <Switch>
            <Route exact path='/' component={Transactions}></Route>
            <Route exact path='/portfolio' component={Portfolio}></Route>
            <Redirect to='/'/>
        </Switch>
    </Layout>)
}

export default App;