<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/hello">HelloWorld</router-link>|
      <router-link to="/mine/hello">Mine</router-link>|
      <router-link :to="{name:'test1',params:{name:'zhangsan',age:30}}">Test1</router-link>|
      <router-link to="/mine/test2/lisi/25">Test2</router-link>|
      <router-link to="/home">重定向</router-link>|
      <router-link to="/home/azhou/26">重定向参数</router-link>|
      <router-link to="/woshinibaba">别名</router-link>|
      <router-link to="/movie">电影列表</router-link>|
     
 


    </div>
    <transition name='fade'>
    <router-view/>
    </transition>
  </div>
</template>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s linear;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  transform: translate(0%);
}
.fade-leave-active{
  transition: transform 1s linear;
}
.fade-leave-to{
  transform: translate(100%);
}



 



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
