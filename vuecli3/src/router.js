import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test from './views/Test.vue';
import A from './views/A.vue';
import B from './views/B.vue';
import Error from './views/Error.vue';
import Count from './views/Count.vue';





Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // beforeEnter(to,form,next){
      //   console.log(to,form,next);
      //   // 调用next才会跳转
      //   next();
      // }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/mine',
      component: Mine,
    },
    {
      path: '/test',
      component: Test,
      children: [
        {
          path: '/a',
          component: A
        }, {
          path: '/b',
          component: B
        },

      ]
    }, {
      path: '/',
      component: Home,
      alias: '/abc'
    }, {
      path: '*',
      component: Error
    },{
      path:'/count',
      component:Count
    }

  ],
});
