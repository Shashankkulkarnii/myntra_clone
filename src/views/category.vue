<template>
  <h1>category: {{category}}</h1>


  <div >
  <div class="category" v-for="category in categoryData" :key="category.id  ">
 <router-link :to="{name: 'product', params:{ id: category.id, title: category.title, price:category.price, description:category.description ,category:category.category, image:category.image }}">
    <div class="cateitem">   
    
     <img v-bind:src="category.image" width="100" height="100" alt="">
      <p >Old Price: {{category.price}} Offer Price:{{ currencyUSD(category) }}  </p>
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
      categoryData:"",
      price:""
    
    }

  },
  methods:{
  currencyUSD(category){
return category.price /2;
  }
  },
props:['category'],

 

 mounted(){
  
         var url = "https://fakestoreapi.com/products/category/"+this.category ;
          axios.get(url)
          .then((resp)=>{
            this.categoryData=resp.data;
            this.price=resp.data;
            console.log(resp.data[0].price);
        })
        // fetch(url).then((response)=>{
        //     return response.json();
        // }).then((data)=>{
        //     console.log(data);
        //     this.categoryData=data;
        //     console.log(data);
            
        // })
    },
    updated(){

      var url = "https://fakestoreapi.com/products/category/"+this.category ;
          axios.get(url)
          .then((resp)=>{
            // return response.json();
            this.categoryData=resp.data;
            // console.log(resp);
        })
        //  var url = "https://fakestoreapi.com/products/category/"+this.category ;
        // fetch(url).then((response)=>{
        //     return response.json();
        // }).then((data)=>{
        //     console.log(data);
        //     this.categoryData=data;
            
            
        // })

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