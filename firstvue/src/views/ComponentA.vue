<template>
  <div>
    <h1>我是组件A{{msg}}</h1>
    <!-- <component-b msg="hello world"></component-b> -->
    <!-- <ComponentB msg="hello"></ComponentB> -->
    <ComponentB :msg="msg"></ComponentB>

    <!-- 动态加冒号，不是动态直接写msg -->
    <ComponentC @xx="fn"></ComponentC>
    <!-- 此时xx代表一个事件 -->
  </div>
</template>

<script>
import ComponentB from "@/views/ComponentB.vue";
import ComponentC from "@/views/ComponentC.vue";

export default {
  data(){
    return{
      msg:0
    }
  },
  methods: {
    fn(a) {
      this.msg +=  a;
    }
  },
  components: {
    ComponentB,
    ComponentC
  }
};
</script>

<style lang="scss" scoped>
</style>