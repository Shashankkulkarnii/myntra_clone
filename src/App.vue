<template>
  <div id="nav">
      <router-link class="navitem" to="/"><img src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon.png" width="50" alt=""></router-link> 
    <router-link class="navitem" to="/">Home</router-link> 
    <router-link class="navitem" to="/about">About</router-link> 
    <router-link class="navitem" to="/categories">Categories</router-link>
  </div>
  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
padding-top: 10px;
  float: left;
  width: 100%;
  box-shadow: 5px 10px 18px #888888;
  margin-bottom: 40px;
  /* position: absolute; */

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}

.navitem{
  margin-left: 20px;
  float: left;
  text-decoration: none;
  line-height: 50px;
}
</style>
