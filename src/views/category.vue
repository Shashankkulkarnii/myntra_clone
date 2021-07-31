<template>
  <h1>category: {{category}}</h1>


  <div >
  <div class="category" v-for="product in productData" :key="product.id  ">
 <router-link :to="{name: 'product', params:{ id: product.id, title: product.title, price:product.price, description:product.description ,category:product.category, image:product.image }}">
    <div class="cateitem">   
    
     <img v-bind:src="product.image" width="100" height="100" alt="">
      <p >Old Price: {{product.price}} Offer Price:{{ currencyUSD(product.price) }}  </p>
      <p >{{category.title}}</p>
      
  </div>
  </router-link>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
     data(){
    return{
      productData:"",
    }

  },
  methods:{
  currencyUSD(productPrice){
return productPrice /2;
  }
  },
props:['category'],

 

 mounted(){
  
         var url = "https://fakestoreapi.com/products/category/"+this.category ;
          axios.get(url)
          .then((resp)=>{
            this.productData=resp.data;       
        })
    },
    updated(){

      var url = "https://fakestoreapi.com/products/category/"+this.category ;
          axios.get(url)
          .then((resp)=>{
            this.productData=resp.data;
           
        })
    }
}

</script>

<style>
.category{ 
  
  /* float: left; */
 margin: auto;
  /* margin-left: 0px; */
  width: 80%;
  /* border: 3px solid green; */
  padding: 10px;
  
}
.cateitem{
   
     /* margin: auto; */
  /* width: 100%; */
  padding: 10px;
    box-shadow: 5px 10px 18px #888888;
    
}
</style>