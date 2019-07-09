import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import Mine from './views/Mine.vue'
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import Error from './views/Error.vue'
import Movie from './views/Movie.vue'
import MovieDetail from './views/MovieDetail.vue'
import ComponentA from './views/ComponentA.vue'

Vue.use(Router);

let router = new Router({
  mode: 'history',//hash会影响地址格式 
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/moviedetail/:movieNum',
      component: MovieDetail
    },
    {
      path: '/componenta',
      component: ComponentA
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/',
      component: Home
    },
    {
      path: '/home/:name/:age',
      redirect: '/mine/test2/:name/:age',
      component: Test2
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      alias: '/woshinibaba'
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    }, 
    {
      path:'/mine/:xx',
      component:Mine,
      children: [{
        path: 'test1',
        name: 'test1',
        component: Test1
      }, {
        path: 'test2/:name/:age',
        component: Test2
      }

      ]
    },
    {
      path: '/mine',
      component: Mine,
      // children: [{
      //   path: 'test1',
      //   name: 'test1',
      //   component: Test1
      // }, {
      //   path: 'test2/:name/:age',
      //   component: Test2
      // }

      // ]
    },
  ]
});
router.beforeEach((to, from, next) => {
  //...
  next();
})


export default router;