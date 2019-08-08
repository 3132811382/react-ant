import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
// 引入http 并注册到全局
import axios from './service/http'
import { Provider } from 'react-redux'
import SildeMenu from './components/sildeMenu';
import NavTopMenu from './components/navTop';
import './index.less';
import 'antd/dist/antd.css'
import { Route, BrowserRouter as Router, hashHistory } from 'react-router-dom' 
import OrderList from './pages/orders/index'

global.http = axios

ReactDOM.render(
  <div className="homePage">
    <Provider store={store}>
      <Router history={hashHistory}>
        <div className="left-nav">
          <SildeMenu></SildeMenu>
        </div>
        <div className="right-main">
          <NavTopMenu></NavTopMenu>
          <div className="main-content">
            <Route path="/order_list" component={OrderList} />
          </div>
        </div>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);

