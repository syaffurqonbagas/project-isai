// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);
// export default new Vuex.Store({
//   state: {
//     darkMode: false,
//     user: null,
//     isLoggedIn: false,
//   },
//   mutations: {
//     set_dark_mode(state) {
//       state.darkMode = false;
//     },
//     set_user(state, data) {
//       state.user = data;
//       state.isLoggedIn = true;
//     },
//     reset_user(state) {
//       state.user = null;
//       state.isLoggedIn = false;
//     },
//   },

//   actions: {
//     darkModeSystem({ commit }) {
//       commit("set_dark_mode");
//     },
//   },
//   getters: {
//     darkMode(state) {
//       return state.darkMode;
//     },
//     isLoggedIn(state) {
//       return state.isLoggedIn;
//     },
//     user(state) {
//       return state.user;
//     },
//   },
//   // actions: {
//   //   login({ dispatch, commit }, data) {
//   //     return new Promise((resolve, reject) => {
//   //       axios.post('login', data)
//   //        .then(response => {
//   //          const token = response.data.token
//   //          localStorage.setItem('token', token)
//   //          setHeaderToken(token)
//   //          dispatch('get_user')
//   //          resolve(response)
//   //        })
//   //        .catch(err => {
//   //          commit('reset_user')
//   //          localStorage.removeItem('token')
//   //          reject(err)
//   //       })
//   //     })
//   //   },
//   //   async get_user({commit}){
//   //     if(!localStorage.getItem('token')){
//   //       return
//   //     }
//   //     try{
//   //       let response = await axios.get('user')
//   //         commit('set_user', response.data.data)
//   //     } catch (error){
//   //         commit('reset_user')
//   //         removeHeaderToken()
//   //         localStorage.removeItem('token')
//   //         return error
//   //     }
//   //   }
//   // },
//   modules: {
  
//   },
// });
