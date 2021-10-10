export const state = () => ({
  user: {
    token: localStorage.getItem('user-token'),
    status: {
      money: 100,
      statistics: [0, 2, 3, 4, 10, 5, 16, 13, 15, 20],
      history: [
        { text: 'Купиль акции', date: '10.10' },
        { text: 'Продал акции', date: '09.10' },
        { text: 'Упал рубль', date: '09.10' },
        { text: 'Спустилось колесо на велосипеде', date: '05.10' },
      ]
    }
  }
})

export const mutations = {
  setUserToken(state, payload) {
    state.user.token = payload
  },

  setUserStatus(state, payload) {
    state.user.status = {
      ...state.user.status,
      ...payload
    }
  }
}
