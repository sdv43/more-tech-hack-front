export default class Api {
  $axios

  constructor($axios, token) {
    this.$axios = $axios
    this.$axios.setToken(token)
  }

  userSignIn({ email, password }) {
    return this.$axios.$post('/api/signIn', {
      email,
      password
    })
  }

  userSignUp({ name, email, number, password }) {
    return this.$axios.$post('/api/signUp', {
      name,
      email,
      number,
      password
    })
  }

  userStatus() {
    return this.$axios.$get('/api/status')
  }
}
