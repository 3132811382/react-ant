
import axios from './http';

export default class ApiService {
  constructor () {
    this.path = ''
    this.http = axios
  }

  show (id, params) {
    const path = `${this.path}/${id}`
    return this.http.get(path, {
      params
    })
  }

  testToken () {
    const path = 'upload.php?act=login'
    return this.http.get(path)
  }

  create (params) {
    const path = this.path
    return this.http.post(path, params)
  }

  update (id, params) {
    const path = `${this.path}/${id}`
    return this.http.put(path, params)
  }

  remove (id) {
    const path = `${this.path}/${id}`
    return this.http.delete(path)
  }

  list (params) {
    const path = this.path
    return this.http.get(path, {
      params
    })
  }
}
