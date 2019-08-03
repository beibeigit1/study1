<template>
  <div>
    <ul>
      <li v-for="(obj,index) in movieList" :key="index">
        <img src="https://img1.doubanio.com/view/photo/m/public/p2561542089.webp" />
            <!-- <img :src="obj.images.small"> -->
        <div>
          <h3>{{obj.title}}</h3>
          <p>邓超</p>
          <p>{{obj.year}}</p>
          <p>111人已观看</p>
          <p>{{obj.gentes}}</p>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data(){
return {
  movieList:[]
}
  },
  created(){
    Axios.get("https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10")
    // Axios.get("/movie.json")
    .then((result)=>{
      console.log(result);
      this.movieList=result.data.subjects
    })
    .catch();
  },
};
</script>

<style  scoped>
li{
    display: flex;
}
li img{
    width: 88px;
    height: 123px;
}
li div{
    flex-grow: 1;
    margin-left:0.2rem;
}
</style>