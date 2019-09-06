import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
// 引入http 并注册到全局
import axios from './service/http'
import { Provider } from 'react-redux'
import './index.less';
import 'antd/dist/antd.css'
import MyRoute from './router/index'

global.http = axios

ReactDOM.render(
    <Provider store={store}>
      <MyRoute></MyRoute>
    </Provider>,
  document.getElementById('root')
);

