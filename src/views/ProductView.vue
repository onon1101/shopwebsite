<template>
  <HeadMenu/>

    <v-container class="product_container">
      <v-row justify="space-around" >
        <!-- 左侧部分 -->
        <v-col cols="6"  class="left-panel">
          <v-img
            src="https://store.vspo.jp/cdn/shop/files/05_53609e3c-957b-4084-95e4-7bd1f7cc3937_900x.png?v=1732528769"
            max-height="550"
            contain
          ></v-img>
        </v-col>
  
        <!-- 右侧部分 -->
        <v-col cols="6"  class="right-panel">
          <v-sheet class="pa-2 ma-2">
            2024 年貓田綱生日紀念日<p></p>
            發售期間：~2024年12月12日0:00
          </v-sheet>
        </v-col>
      </v-row>
  
  
    </v-container>
    <router-view />
  </template>
  
  <script>
  import HeadMenu from "../components/HeadMenu.vue";

  export default {
    name: "LeftRightLayout",
    components: {
      HeadMenu
    },
    data(){
 
    },
    methods:{
      
    }
  };
  </script>
  
  <style scoped>


  .v-container{
    margin-top: 100px;
    width: 70%;
  }
  
  .left-panel {
    background-color: #8ab6f0;
    padding: 20px;
  }
  
  
  
  .right-panel {
    background-color: #a3eeaa;
    padding: 20px;
  }
  
  </style>