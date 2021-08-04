<template>
<div class="login">
  <div class="loginBox"> 
  <h1 class="headlogin">Login / Sign-In</h1>
  <br>
  <input class="ip" type="email" placeholder="Email" v-model="uemail">
  <br>
  <input class="ip" type="password" placeholder="Password" v-model="upsw">
    <br>
  <button class="ip" id="loginbtn" v-on:click="login">Login</button>
  <br>
  <router-link class="navitem" id="registration" :to="{ name: 'registration'}">Sign Up</router-link> 
 <br>
  <span class="error">{{error}}</span>
  <!-- <h1>hello{{store.state.logedinUeser[1]}}</h1> -->
  </div>
  </div>
</template>

<script>
// import AppVue from '../App.vue'
import store from '../store'
export default {
name:'login',
data(){
  return{
    // loginemail:store.state.users,
    uemail:"",
    upsw:"",
    store:store,
    user:"",
    error:""
  }
},
methods:{
  login(){
   this.user = store.state.users.filter( ele => {//checking user enter data with fitted if found

                return ele.psw == this.upsw && ele.email == this.uemail;//then returned user deatailes array
                // return ele.psw > 10;
            })
            if(this.user[0]){
              this.logedinUser()
              console.log("logedinmethod"+store.state.logedinUeser[1].name);
              // AppVue.userName == store.state.logedinUeser[0]
              setTimeout(() => {
              this.redirect()                
              }, 1000);
              
              
 
            }
            else{
           this.error="User Not Found ! Check Your Email And Password" 
           this.uemail=""
           this.upsw=""  
            }
  },
  redirect(){
    this.$router.push({name:'Home'})
  },
   logedinUser(){
         this.$store.dispatch("logedinUser",this.user)
              // console.log("logedin User method called");
               }
}

}
</script>

<style scoped>
.login{
  
  /* background-color: rgba(240, 48, 176, 0.37); */
  text-align: center;
}
.loginBox{
  border: solid 2px white;
  margin-top: 10%;
  margin-left: 35%;
  margin-right: 35%;
  background-color: white;
  box-shadow: 5px 10px 18px #888888;
  padding-bottom: 30px;
  border-radius: 10px;
}
.headlogin{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.ip{

padding-top: 10px;
padding-bottom: 10px;
/* font-size: 10px; */
border: #888888 solid 1px;
  margin-top: 20px;

}
#registration{
  margin-top: 20px;
  padding-top: 10px;
text-decoration: none;
/* color: #e20e71; */
}
.error{
  margin-top: 10px;
color: red;
}
#loginbtn{
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  background-color: #e20e71;
}
</style>

