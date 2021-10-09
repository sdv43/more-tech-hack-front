export const state = () => ({
  user: {
    token: localStorage.getItem('user-token'),
    status: {
      money: 100,
    },
  }
})

export const mutations = {
  setUserStatus(state, payload) {
    state.user.status = payload
  },
}
