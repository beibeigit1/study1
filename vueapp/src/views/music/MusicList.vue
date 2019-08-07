<template>
  <div>
    <!-- <aplayer
      autoplay
      :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131229550.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  }"
    /> -->
     <aplayer :music="list[0]" :list="list" v-if="isShow" showLrc/>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import Axios from 'axios';
export default {
  data() {
    return {
      list: [],
         isShow :false
    };
  },
  computed:{
            music(){
                return this.list[0];
            }
        },
  components: {
    Aplayer
  },
  created() {
    Axios.get("/data/musicdata.json").then(result => {
      result.data.musicData.forEach(obj => {
          let obj1 = {
                        title:obj.title,
                        artist:obj.author,
                        src:obj.src,
                        pic:obj.musicImgSrc,
                        lrc:`http://localhost:8080/${obj.lrc}`
                    }
                    // http://localhost:8080/lrc/我要你.lrc
                    this.list.push(obj1);
      });
      this.isShow = true;
      
    })
    .catch()
  }
};
</script>

<style lang="scss" scoped>
</style>