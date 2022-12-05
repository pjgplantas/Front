import axios from 'axios'

export const auth ={
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {},
    }),
    mutations: {
        setLoginInfo(state, user){
            state.user = user
            state.loggedIn= true
        },
        setLogout(state){
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login( { commit}, user ) {
            const userData = await axios.post("https://jaummonster.pythonanywhere.com/token/", user);
            // console.log(userData)
            commit('setLoginInfo' , userData.data)
        },
        logout( {commit} ) {
            commit('setLogout')
        }
    }
}