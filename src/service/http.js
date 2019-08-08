
import axios from 'axios'

// axios 配置
// axios.defaults.baseURL = 'http://user.ihuyi.com/wxeditor/api'
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
// http response 拦截器
/* eslint consistent-return: [0, { "treatUndefinedAsUnspecified": false }] */
axios.interceptors.response.use(response => response, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        break
      default:
        break
    }
    return Promise.reject(error.response.data)
  }
})

export default axios
