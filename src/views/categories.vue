<template>
  <div>
    <h1>categories</h1>
    <div v-for="catData in apidata" :key="catData">{{catData}}
      
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)
export default {
  name:'categories',
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

</style>