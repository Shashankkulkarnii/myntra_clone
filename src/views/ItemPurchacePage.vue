<template>
  <div class="item">
      <table>
          <tr>
          <td class="td" id="imgtd"><img v-bind:src="image"  alt=""></td>
          
          <td class="td" id="datatd">
              
               <h1 class="itemstd" style="color:green">$. {{price}}</h1>
               <h2 class="itemstd">{{title}} </h2>
          
           <h1 class="itemstd">Category: {{category}}</h1>
         
           <span class="itemstd" >{{description}}</span>
           <br>
           <button class="itemstdi"  id="addbagbtn">ADD TO BAG</button> <button id="wishbtn" class="itemstd" >WISHLIST</button>
           </td>
          </tr>
          </table>
          <menu-icon :size="48" fillColor="#FF0000" />
      
     
      <!-- <h1>{{id}}</h1> -->
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
   props:['id','title','price','description','category','image'],
    // data(){
    //     return{
    //         id:this.$route.params.id
            
    //     }
    // },
components: {
  MenuIcon
}    

}
</script>

<style>
.item{
    width: 100%;
}
.td{
    /* width: 50%; */
    top: 0;
}
#imgtd{
    /* border: solid 2px black; */
    width: 40%;
}
#datatd{
    width:60% ;
    float: right;
    text-align: left;
    padding-left: 30px;
}
.itemstd{
    /* float: right; */
    /* margin-right: 0px; */
}
#addbagbtn , #wishbtn{
    margin-top: 30px;
    padding: 10px;
    border-radius: 10px;
}
#addbagbtn{
    background-color:rgb(224, 13, 48);
}
#wishbtn{
    margin-left: 20px;
}
</style>