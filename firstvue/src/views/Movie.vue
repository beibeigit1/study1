<template>
  <div class="movie">
    <ul>
      <li v-for="(obj,index) in movieList" :key='index'>
          
           <!-- <li v-for="obj in movieList"> -->
          <!-- 加入v-if为了避免渲染错误 ,在这里加不加都行-->
        <router-link :to="'/moviedetail/'+obj.num">
            {{obj.name}}{{obj.avg}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [
        {
          name: "大侦探皮卡丘",
          avg: 6.7,
          num: 1
        },
        {
          name: "我要准时下班",
          avg: 8.2,
          num: 2
        },
        {
          name: "可以不可以",
          avg: 7.7,
          num: 3
        },
        {
          name: "请搜索",
          avg: "9.0",
          num: 4
          //   这样可以使0也显示，不然只会显示9
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>