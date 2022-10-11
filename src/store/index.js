import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';
import {auth} from './auth';

Vue.use(Vuex);

const store = {
  state: {
    token: "",
    id: 0,
  }
}

const vuexLocal = new VuexPersistence({
  Storage: window.localStorage,
  key: 'vue-django'
})

const modules= {
  auth
}

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
  store, 
})

