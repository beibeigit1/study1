<template>
  <div :style="{background:obj.bgcolor}">
    <span>首页</span>
    {{obj.name}}
  </div>
</template>

<script>
export default {
  props: ["obj"],
  data(){
      return{

      }
  },
};
</script>

<style  scoped>
div {
  width: 100%;
  height: 1rem;
  background: #9999ff;
  line-height: 1rem;
  text-align: center;
  color: aliceblue;
}
span {
  position: fixed;
  left: 0.1rem;
  top: 0px;
}
</style>