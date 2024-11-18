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

        <div class = newproductlist v-for ="(item,index) in images" :key = "index">
           <img :src = "item" alt = "">

      </div>

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
  },
  data:function(){
    return{
      images:(function(){
        let filearr = [] ;
        for(let i = 1 ; i <=8 ; i++){
          filearr[i-1] = require('../assets/test' + i + '.png');
        }
        return filearr;
      })(),
    }
  }
}
</script>

<style scoped>

.home .slidshowimage{
  position: relative;
  top:120px;
}


.newarrival{
  position: relative;
  top: 200px;
  margin: 0px 10%;
}


.newarrival h1{
  font-size: 30px;
  font-family:'fantasy';
  color: rgba(149, 75, 219, 0.842);
}


.newarrival .newproductlist{
  
  display:inline-block;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;

  margin:0 -3%;
  margin-top: 20px;
}

.newarrival .newproductlist img{


  max-width: 68%;
  height: auto;

}
</style>