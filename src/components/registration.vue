<template>
<div class="registration">
  <div class="regBox">
  <h1 class="headreg">Registration Form</h1>
  <input class="ip" type="text" placeholder="Name" v-model="name">
  <br>
  <input class="ip" type="email" placeholder="Email" v-model="email">
  <br>
  <input class="ip" type="text" placeholder="Mob.NO" v-model="mob">
  <br>  
  <input class="ip" type="password" placeholder="Set Password" v-model="psw">
  <br>
  <button class="ip" id="regbtn" @click="addUser">Register</button>  
  <!-- <h1>{{store.state.users}}</h1> -->
  </div>
  </div>
</template>

<script>
import store from '../store'
export default {
name:'registration',
data(){
  return{
    name:"",
    email:"",
    mob:"",
    psw:"",
     store:store,
    
  }
},
methods:{
  addUser(){
    var newUser ={name:this.name,email:this.email,mob:this.mob,psw:this.psw}
         this.$store.dispatch("addUser",newUser)
              console.log("adduser User method called");
              setTimeout(() => {
                    this.redirectToLogin()
              }, 2000);
          
               },
  redirectToLogin(){
    this.$router.push({name:'login'})
  },         
}

}
</script>

<style scoped>
.registration{
  
  text-align: center;
}
.regBox{
  border: solid 2px white;
  margin-top: 10%;
  margin-left: 35%;
  margin-right: 35%;
  background-color: white;
  box-shadow: 5px 10px 18px #888888;
  padding-bottom: 30px;
  border-radius: 10px;
}
.headreg{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.ip{

padding-top: 10px;
padding-bottom: 10px;
border: #888888 solid 1px;
  margin-top: 20px;

}

.error{
color: red;
}
#regbtn{
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  background-color: #e20e71;
}
</style>