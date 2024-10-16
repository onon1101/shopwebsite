<template>
  <div class="home">
    <HeadMenu/>
    <div class = "slidshowimage">
      <Slidshowimage/>
    </div>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeadMenu from '../components/HeadMenu.vue'
import Slidshowimage from '../components/SlideshowImage.vue'
export default {
  name: 'HomeView' ,
  components: {
    HelloWorld,HeadMenu,Slidshowimage
  }
}
</script>

<style scoped>
.home .slidshowimage{
  position: relative;
  top:120px;
}

</style>
