<template>
  <div class="home">
    <HeadMenu/>
    <div class = "slidshowimage">
      <Slidshowimage/>
    </div>


  </div>
  <div class ="newarrival">
      <h1>NEW ARRIVAL</h1>
      <h1>新商品</h1>
  </div>

</template>

<script>
// @ is an alias to /src

import HeadMenu from '../components/HeadMenu.vue'
import Slidshowimage from '../components/SlideshowImage.vue'
export default {
  name: 'HomeView' ,
  components: {
    HeadMenu,Slidshowimage
  }
}
</script>

<style scoped>
.home .slidshowimage{
  position: relative;
  top:120px;
}

.newarrival h1{
  font-family:'fantasy';
  color: rgba(149, 75, 219, 0.842);
  position: relative;
  top: 200px;
}

</style>
