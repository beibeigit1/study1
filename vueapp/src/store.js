import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos:[]
  },
  mutations: {
    addPhoto(state,photo){
      // console.log(photo);
      state.photos = [...photo];
    }
  },
  actions: {

  }
})
