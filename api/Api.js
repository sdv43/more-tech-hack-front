export default class Api {
  $axios

  constructor($axios, token) {
    this.$axios = $axios
    this.$axios.setToken(token)
  }


}
