import React from 'react';
import 'antd/dist/antd.css'
import { Route, BrowserRouter as Router, hashHistory, Switch } from 'react-router-dom' 
import HomePage from '../pages/homePage'
import Login from '../pages/login'
import OrderList from '../pages/orders/index'
import Dashboard from '../pages/dashboard'

class myRoute extends React.Component{
  render() {
    return(
      <Router history={hashHistory}>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path="/" render={({history,location,match}) => (
            <HomePage history={history} location={location} match={location}>
              <Route path="/homepage/order" component={OrderList}></Route>
              <Route path="/homepage/dashboard" component={Dashboard}></Route>
            </HomePage>
          )} />
        </Switch>
      </Router>
    )
  }
}
export default myRoute;