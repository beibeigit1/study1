<template>
  <div :style="{background:color}">
    <ul>
      <li v-for="(obj,index) in arr" :key="index" >
        <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Movie from "@/views/movie/Movie.vue";
import Music from "@/views/music/Music.vue";
import Book from "@/views/book/Book.vue";
import Photo from "@/views/photo/Photo.vue";

export default {
  props: ["arr","color"],
  data() {
    return {
     
    };

  },
  methods: {
    change(obj) {
      // this.bg = obj.bgcolor;
      this.$emit('changebg',obj)
      
    }
  },

  components: {
    Movie,
    Music,
    Photo,
    Book
  }
};
</script>

<style  scoped>
div {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  background: #9999ff;
}
ul {
  display: flex;
}
li {
  flex-grow: 1;
  color: azure;
  line-height: 1rem;
  text-align: center;
}
a.router-link-active {
  color: azure;
  outline: none;
}
a {
  color: black;
}
</style>