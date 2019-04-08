import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {//用于存值
    count: 0,
    b:20,
  },
  mutations: {//用于修改值
    add(state,num) {
      state.count+=num;
    }
  },
  getters:{//相当于计算属性
    sum:(state)=>{
      return state.count+state.b;
    }

  },
  actions: {//异步操作
    addAction({commit},num){
commit('add',num)
    }
  },
});
