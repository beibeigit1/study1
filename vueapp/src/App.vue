<template>
  <div id="app">
    <c-header :obj="obj"></c-header>

    <router-view id="content"></router-view>
    <c-footer :arr="arr" @changebg="color" :color='obj.bgcolor'></c-footer>
  </div>
</template>
<script>
import CHeader from "@/components/CHeader.vue";
import CFooter from "@/components/CFooter.vue";
export default {
  data() {
    return {
      arr: [
        {
          path: "/movie",
          name: "电影",
          bgcolor: "#9999ff"
        },
        {
          path: "/music",
          name: "音乐",
          bgcolor: "#cc99ff"
        },
        {
          path: "/book",
          name: "书籍",
          bgcolor: "#ff9999"
        },
        {
          path: "/photo",
          name: "图片",
          bgcolor: "#96c2f1"
        }
      ],
      obj: {
        path: "/movie",
        name: "电影",
        bgcolor: "#9999ff"
      }
    };
  },
  components: {
    CHeader,
    CFooter
  },
  methods: {
    color(obj) {
      // console.log(bg)
      this.obj = obj;
    }
  },
  created() {
    //利用钩子函数
      //过滤出arr数组中path值是   this.$route.path 的，filter返回的是一个新数组
      let result = this.arr.filter((obj, index) => {
        return obj.path == this.$route.path;
      });
      // 如果数组中匹配到了  才修改obj的值，否则用obj的默认值
      if (result.length) {
        this.obj = result[0];
      }
    }
};
</script>

<style>
#content{
  /* padding:1rem 0; */
 margin: 1rem 0.2rem;
}
</style>
