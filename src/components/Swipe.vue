<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists" :key="list.img">
        <a class="js-no-follow" :href="list.clickUrl">
          <img class="goods-main-photo fadeIn" :src="list.img" />
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// swiper是对dom节点进行操作的，dom节点什么时候生成？ mounted
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "Swipe",
  props: {
    lists: {
      // lists 类型必须为数组
      type: Array,
      required: true
    }
  },
  created() {
    // console.log('created: ',document.querySelectorAll(".swiper-slide"));
  },
  mounted() {
    // console.log('mounted: ',document.querySelectorAll(".swiper-slide"));
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 水平方向轮播
      loop: true,              // 设置为true以启用连续循环模式
      pagination: {            // 分页器
        el: ".swiper-pagination"
      },
      autoplay: {              // 自动轮播，延迟5s
        delay: 5000
      }
    });
  }
  // // 对数据进行监听
  // watch: {
  //   lists(value, oldValue) {
  //     console.log('value, oldValue: ',value, oldValue);
  //     console.log('before nextTick: ',document.querySelectorAll(".swiper-slide"));
  //     this.$nextTick(() => {
  //       console.log('after nextTick: ',document.querySelectorAll(".swiper-slide"));
  //     });
  //   }
  // }
};
</script>


<style>
/* .swiper-container {
  width: 600px;
  height: 300px;
} */
.swiper-slide img {
  height: 100%;
  width: 100%;
}
</style>

