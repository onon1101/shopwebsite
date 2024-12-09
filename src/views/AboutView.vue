<!-- GoodsView 實體商品 -->
<template>
  <div class="home">
    <!-- Header -->
    <header class="header">
      <HeadMenu />
    </header>

    <!-- 主內容 -->
    <v-container class="main-container">
      <h1 class="new-arrival-title">グッズ</h1>
      <h2 class="new-arrival-subtitle">Goods</h2>

      <v-row  :gap="8">
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(product, index) in products" :key="index">
          <ProductCard
            :image="product.image"
            :category="product.category"
            :name="product.name"
            :price="product.price"
          />
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
import HeadMenu from "../components/HeadMenu.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "HomeView",
  components: {
    HeadMenu,
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          image: require("../assets/test1.png"), // 使用 require 來正確解析圖片
          category: "グッズ",
          name: "橘ひなの　誕生日記念2024",
          price: "¥1800 より",
        },
        {
          image: require("../assets/test2.png"),
          category: "グッズ",
          name: "紡木こかげ　誕生日記念2024",
          price: "¥1500 より",
        },
        {
          image: require("../assets/test3.png"),
          category: "デジタルグッズ",
          name: "ぶいすぽっ！看病ボイス2024",
          price: "¥500 より",
        },
        {
          image: require("../assets/test4.png"),
          category: "グッズ",
          name: "【メンバーデザイン】いぬべにTシャツ【八雲べに】",
          price: "¥4000",
        },
        {
          image: require("../assets/test5.png"),
          category: "グッズ",
          name: "VSPO! GEAR ガラスマウスパッド",
          price: "¥16940",
        },
        {
          image: require("../assets/test6.png"),
          category: "グッズ",
          name: "【メンバーデザイン】清楚ですがTシャツ【藍沢エマ】",
          price: "¥4000 より",
        },
        {
          image: require("../assets/test7.png"),
          category: "グッズ",
          name: "【メンバーデザイン】ぽやねこパーカー【花芽すみれ】",
          price: "¥7000",
        },
        {
          image: require("../assets/test8.png"),
          category: "グッズ",
          name: "【メンバーデザイン】ありゃTシャツ【花芽なずな】",
          price: "¥4000",
        },
        // 更多商品...
      ],
    };

  },
};
</script>

<style scoped>
/* Header 樣式 */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white; /* 確保 Header 背景覆蓋住內容 */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

/* 主內容容器 */
.main-container {
  margin-top: 100px; /* 留出 Header 的高度 */
  padding: 20px;
}

/* New Arrival 標題樣式 */
.new-arrival-title {
  text-align: center;
  font-size: 24px;
  color: purple;
}

.new-arrival-subtitle {
  text-align: center;
  font-size: 18px;
  color: gray;
  margin-bottom: 20px;
}
</style>
