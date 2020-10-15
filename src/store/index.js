import { UserModule } from "./User"
import { createStore } from 'vuex'

export default createStore({
  state: {
  },

  // Mutations are functions that affect the state.
  mutations: {
  },
  // Actions are functions that you call throughout your application that call mutations.
  actions: {
  },
  
  modules: {
    User: UserModule
  }
})
