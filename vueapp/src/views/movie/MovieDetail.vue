<template>
  <div>
    <!-- {{$route.params.id}} -->
    {{movieDetail.title}}
    <!-- <img :src="'https://images.weserv.nl/?url='+movieDetail.images.small" /> -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieDetail: {}
    };
  },
  created() {
    // Axios.get("/data/moviedetail.json")
        // console.log(this.movieDetail.images.small);
    //   Axios.get("https://bird.ioliu.cn/v1?url= http://api.douban.com/v2/movie/subject/"+this.$route.params.id+"?apikey=0df993c66c0c636e29ecbb5344252a4a")
       Axios.get("https://bird.ioliu.cn/v1?url= http://api.douban.com/v2/movie/subject/26794435")
      .then(result => {
        // console.log(result.data);
        this.movieDetail = result.data;
        // console.log(this.movieDetail.images.small);
      })
      .catch(() => {});
  }

  // http://api.douban.com/v2/movie/subject/${event.movieid}?apikey=0df993c66c0c636e29ecbb5344252a4a
};
</script>

<style lang="scss" scoped>
</style>