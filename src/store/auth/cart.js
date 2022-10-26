import { createStore } from 'vuex'

export default createStore({
  state: {
    ItensCompra: {
        itens: [],
    },
    isAuthenticated: false,
    token: "",
    isLoading: false
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('ItensCompra')) {
        state.ItensCompra = JSON.parse(localStorage.getItem('ItensCompra'))
      } else {
        localStorage.setItem('ItensCompra', JSON.stringify(state.ItensCompra))
      }

      if (localStorage.getItem('token')) {
          state.token = localStorage.getItem('token')
          state.isAuthenticated = true
      } else {
          state.token = ''
          state.isAuthenticated = false
      } 
    },
    addToCart(state, item) {
      const exists = state.ItensCompra.itens.filter(i => i.planta.id === item.planta.id)
      if (exists.length) {
        exists[0].quantidade = parseInt(exists[0].quantidade) + parseInt(item.quantidade)
      } else {
        state.ItensCompra.items.push(item)
      }

      localStorage.setItem('ItensCompra', JSON.stringify(state.ItensCompra))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },  
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
    clearCart(state) {
      state.ItensCompra = { itens: [] }

      localStorage.setItem('ItensCompra', JSON.stringify(state.ItensCompra))
    },
  },
  actions: {
  },
  modules: {
  }
})
