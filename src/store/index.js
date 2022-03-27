import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [{ name: "shank", email: "s@test.com", mono: "123", psw: 123 },
    { name: "utkarsh", email: "u@test.com", mono: "456", psw: 456 },
    { name: "mohit", email: "m@test.com", mono: "789", psw: 789 },
    { name: "kapil", email: "k@test.com", mono: "101112", psw: 101112 }],

    logedinUeser: [{ name: "", email: "", mono: "", psw: "" }]

  },

  mutations: {
    LOGEDINUSER(state, user) {
      state.logedinUeser.push(user[0])
    },
    ADDUSER(state,newUser){
      state.users.push(newUser)
    }

  },
  actions: {
    logedinUser({ commit }, user) {
      commit('LOGEDINUSER', user)
    },
    addUser({commit},newUser){
      commit('ADDUSER',newUser)
    }
  },

  modules: {
  }
})
//added code