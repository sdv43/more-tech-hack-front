export const state = () => ({
  user: {
    token: localStorage.getItem('user-token'),
    status: {
      money: 100,
    },
  }
})

export const mutations = {
  setUserToken(state, payload) {
    state.user.token = payload
  },

  setUserStatus(state, payload) {
    state.user.status = payload
  },
}
