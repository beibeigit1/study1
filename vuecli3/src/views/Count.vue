<template>
  <div>
    <h1>count 页面</h1>
    <p>{{$store.state.count}}</p>
    <p>{{count}}</p>
    <p>
      <button @click="$store.commit('add',2)">add</button>
      <button @click="add(3)">add1</button>
      <button @click="addAction(5)">add2</button>

    </p>
    <p>getters中结果sum{{sum}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"; //类似于解构了
export default {
  // computed:{//计算属性
  //     count(){
  //         return this.$store.state.count;
  //     }
  // }
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["sum"]),
  },
  methods:{ 
      ...mapMutations(["add"]),
      ...mapActions(["addAction"])

  }
};
</script>

<style scoped>
</style>