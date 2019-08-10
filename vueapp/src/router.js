import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import Music from './views/music/Music.vue';
import Book from './views/book/Book.vue';
import Photo from './views/photo/Photo.vue';
import MusicList from './views/music/MusicList.vue';
import MovieDetail from './views/movie/MovieDetail.vue';
import PhotoDetail from './views/photo/PhotoDetail.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      component: Movie,
      name: 'movie',
    },
    {
      path: '/music',
      component: Music,
      name: 'music',
    },
    {
      name: 'book',
      path: '/book',
      component: Book
    },
    {
      name: 'photo',
      path: '/photo',
      component: Photo
    },
    
    {
      path: '/moviedetail/:id',
      component: MovieDetail
    },
    {
      name: 'musiclist',
      path: '/musiclist',
      component: MusicList
    },
    {
      path: '/photodetail/:index',
      component: PhotoDetail
    },
    
  ]
})
