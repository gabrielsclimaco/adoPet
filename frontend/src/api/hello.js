import api from '.'

export default {
  getWorld () {
    return api.get('/publications')
  }
}
