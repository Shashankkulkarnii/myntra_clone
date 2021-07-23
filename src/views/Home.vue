<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <slideshow/>
    <content/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import slideshow from '@/components/slideshow.vue'
import content from '@/components/ContentHomePage.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    slideshow,
    content
  
  }
}
</script>
