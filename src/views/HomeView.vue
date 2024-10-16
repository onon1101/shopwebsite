<template>
  <div class="home">
    <HeadMenu/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeadMenu from '../components/HeadMenu.vue'
export default {
  name: 'HomeView' ,
  components: {
    HelloWorld,HeadMenu
  }
}
</script>
