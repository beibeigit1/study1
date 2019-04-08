<template>
  <div id="app">
    <c-header></c-header>
    <c-footer></c-footer>
  </div>
</template>
<script>
import CHeader from '@/components/CHeader';//引入公共子组件
import CFooter from '@/components/CFooter';

export default {
  components:{
    CHeader,
    CFooter
  }
}
</script>


<style>

</style>
