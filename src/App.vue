<template>
  <div id="nav">
      <router-link class="navitem" to="/"><img src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon.png" width="50" alt=""></router-link> 
    <!-- <router-link class="navitem" to="/">Home</router-link>  -->
    <!-- <router-link class="navitem" to="/about">About</router-link>  -->
    <!-- <router-link class="navitem" to="/categories">Categories</router-link> -->
     <router-link class="navitem" to="/Menclothing">MEN</router-link>
    <router-link class="navitem" to="/Womenclothing">WOMEN</router-link>
    <router-link class="navitem" to="/electronics">ELECTRONICS</router-link>
    <router-link class="navitem" :to="{ name: 'Jewelery' }">JEWELERY</router-link>  
  </div>
  <router-view/>

</template>
<script>
export default {
  data(){
    return{
      apidata:""
    }

  },
   mounted(){
         var url = "https://fakestoreapi.com/products/categories";
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            this.apidata=data;
            console.log(data);
        })
    }

}

</script>

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
  /* position:fixed; */

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
  font-family: 'Open Sans', sans-serif;
}
</style>
