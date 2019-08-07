<template>
  <div>
    <ul>
      <li v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
        <!-- <img :src="getImages(obj.images.small)" alt /> -->
        <img :src="'https://images.weserv.nl/?url='+obj.images.small" />
        <div>
          <h4>{{obj.title}}</h4>
          <p>
            <span>{{obj.year}}</span>
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}} </span>
          </p>
          
          <p>{{obj.collect_count}}已观看</p>
          <p>
            <span v-for="(type,index) in obj.genres" :key="index">{{type}}|</span>
          </p>
        </div>
      </li>
    </ul>
    <img
      class="loading"
      v-show="isShow"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564913468715&di=a80595b266e40e79d432e4da71761817&imgtype=0&src=http%3A%2F%2Fwww.fasebj.org%2Fux3%2Fwidgets%2Fpublication-content%2Fimages%2Fspinner.gif"
      alt
    />
    <div v-show="isBottom">到底了</div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow: false,
        isBottom:false
    };
  },
  methods: {
    getMovie() {
      // jsonbird  服务器代理 解决跨域 https://bird.ioliu.cn/v1?url=
      Axios.get(
        "https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start="+this.movieList.length+"&count=10"
      )
        // Axios.get("/movie.json")
        .then(result => {
          console.log(result);
          this.movieList = [...this.movieList, ...result.data.subjects];
          this.isShow = false;
          if(this.movieList.length == result.data.total){
                        this.isBottom = true;
                    }
        })
        .catch();
    },
    goDetail(id){
      this.$router.push('/moviedetail/'+id);
      console.log(this.id)
    }
  },
  created() {
    this.getMovie();
    window.onscroll = () => {
      // // 滚动条滚动的高度
      // console.log(document.documentElement.scrollTop);
      // // 可视区的高度
      // console.log(document.documentElement.clientHeight);
      // // 整个滚动区的高度
      // console.log(document.documentElement.scrollHeight);

      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight ==
        document.documentElement.scrollHeight && !this.isBottom
      ) {
        this.isShow = true;
        this.getMovie();
        
      }
    };
  }
};
</script>

<style  scoped>
li {
  display: flex;
}
li img {
  width: 88px;
  height: 123px;
}
li div {
  flex-grow: 1;
  margin-left: 0.2rem;
}
.loading {
  width: 5rem;
  height: 5rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>