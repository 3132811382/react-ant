import ApiService from '../api.serviece'

export default class ArticleService extends ApiService {
  constructor () {
    super()
    this.path = ''
  }

  tableList (params) {
    const path = `rule`
    return this.http.get(path, {params})
  }

  deleteArticles(params) {
    const path = `${this.path}?act=delA`
    return this.http.post(path, {params})
  }

  saveArticles (params) {
    const path = `article_detail.php?act=save`
    return this.http.post(path, params)
  }

  lookArticle(params) {
    const path = `article_detail.php`
    return this.http.get(path, {params})
  }
  importArticle (params) {
    const path = `article_coll.php`
    return this.http.get(path, {params})
  }
  
}
