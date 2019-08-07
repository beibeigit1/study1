<template>
  <div>
    <!-- <img src="" @click="goList()" alt=""> -->
<img class="imges" v-for="(obj,index) in music" :key="index" :src="obj.bg" @click="goList" />
    <!-- <router-link to="/musiclist">
      
    </router-link>| -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      music: []
    };
  },
  created() {
    // Axios.get("https://bird.ioliu.cn/v1?url=http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type={0}&size={1}&offset={2}")
    Axios.get("/data/musiclist.json")
      .then(result => {
        // console.log(result);
        this.music = result.data.albums;
      })
      .catch();
    //
  },
  methods: {
    goList() {
      this.$router.push("/musiclist");
    }
  }
};
</script>

<style  scoped>
.imges {
  width: 50%;
}
</style>