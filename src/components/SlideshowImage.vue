<template>
    <swiper
      :loop="true"
      :navigation="true"
      :modules="modules"
      :pagination="{ clickable: true }"
      :slides-per-view="3"
      :space-between="10"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      @slideChange="onSlideChange"
      class="mySwiper"
    >
      <swiper-slide><img src="../assets/KV1.png" alt="Slide 1"></swiper-slide>
      <swiper-slide><img src="../assets/KV2.png" alt="Slide 2"></swiper-slide>
      <swiper-slide><img src="../assets/KV3.png" alt="Slide 3"></swiper-slide>
      <swiper-slide><img src="../assets/KV4.png" alt="Slide 4"></swiper-slide>
      <swiper-slide><img src="../assets/KV5.png" alt="Slide 5"></swiper-slide>
      <swiper-slide><img src="../assets/KV6.png" alt="Slide 6"></swiper-slide>
      <swiper-slide><img src="../assets/KV7.png" alt="Slide 7"></swiper-slide>
      <swiper-slide><img src="../assets/KV8.png" alt="Slide 8"></swiper-slide>
      <swiper-slide><img src="../assets/KV9.png" alt="Slide 8"></swiper-slide>
    </swiper>
  </template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules 
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination],
    };
  },
};
</script>

<style scoped>
.mySwiper img {

  width: 100%;
  height: auto;

  object-fit: cover; /* Ensure the image maintains aspect ratio and covers the entire area */
}

.mySwiper {
  max-width: 160%; /* Set a maximum width for the swiper container */
  max-height: 100%; /* Set a maximum width for the swiper container */
  margin: 0 -300px; /* Center the swiper */




  
}



</style>