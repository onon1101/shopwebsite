<template>
    <v-card class="product-card" >
      <!-- 商品圖片 -->
      <v-img :src="image" alt="Product Image" class="product-image"></v-img>
  
      <!-- 商品類別 -->
      <v-row class="category-row">
        <v-col>
          <p class="product-category">{{ category }}</p>
        </v-col>
      </v-row>
  
      <!-- 商品名稱 -->
      <v-row class="name-row">
        <v-col>
          <p class="product-name">{{ name }}</p>
        </v-col>
      </v-row>
  
      <!-- 商品價格 -->
      <v-row class="price-row">
        <v-col>
          <p class="product-price">{{ price }}</p>
        </v-col>
      </v-row>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      image: {
        type: String,
        required: true, // 圖片網址
      },
      category: {
        type: String,
        required: true, // 商品類別
      },
      name: {
        type: String,
        required: true, // 商品名稱
      },
      price: {
        type: String,
        required: true, // 商品價格
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {



    /* 移除邊框和陰影 */
    box-shadow: none; /* 移除陰影 */
    border: none;     /* 移除邊框 */
    border-radius: 0; /* 移除圓角 */
    overflow: hidden;
    text-align: center;
  }
  
  .product-image {
    
    height: 350px;
    object-fit: cover;
  }
  
  .product-category {
    color: gray;
    font-size: 12px;
    margin-top: 10px;
  }
  
  .product-name {
    color: gray;
    font-size: 14px;
    margin: 5px 0;
  }
  
  .product-price {
    color: black;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  