<template>
  <h1>Jewelery</h1>

  <div >
  <div class="jewelery" v-for="jewelery in jeweleryData" :key="jewelery.id">
 <router-link :to="{name: 'ItemPurchacePage', params:{ id: jewelery.id, title: jewelery.title, price:jewelery.price, description:jewelery.description ,category:jewelery.category, image:jewelery.image }}">
    <div class="jeweitem">   
    
     <img v-bind:src="jewelery.image" width="100" height="100" alt="">
      <p > Price: {{jewelery.price}}</p>
      <p >{{jewelery.title}}</p>
      
  </div>
  </router-link>
  </div>
  </div>
</template>

<script>
export default {
    name:'jewelery',
  data(){
    return{
      jeweleryData:""
    }

  },
  
   mounted(){
         var url = "https://fakestoreapi.com/products/category/jewelery";
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            this.jeweleryData=data;
            console.log(data);
        })
    }

}
</script>

<style>

.jewelery{ 
  
  /* float: left; */
 margin: auto;
  /* margin-left: 0px; */
  width: 80%;
  /* border: 3px solid green; */
  padding: 10px;
  

}
.jeweitem{
   
     /* margin: auto; */
  /* width: 100%; */
  padding: 10px;
    box-shadow: 5px 10px 18px #888888;
    

}
</style>