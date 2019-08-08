<template>
  <div class="container" style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block">
      <a class="block-item js-address-item address-item" @click="toEdit">
        <div class="address-title">tony 13112345678</div>
        <p>广东省珠海市香洲区南方软件园</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link
        class="btn btn-blue js-no-webview-block js-add-address-btn"
        to="/address/form"
      >新增地址</router-link>
    </div>
  </div>
</template>

<script>
import Address from "js/addressService.js";
import axios from "axios";
import url from "js/api.js";
export default {
  data() {
    return {
      lists: null
    };
  },
  created() {
    axios.get(url.addressList).then(res => {
      this.lists = res.data.lists;
    });
    // fetch 封装的是post请求，而Address.list() 是get请求，所以无法使用fetch
    // Address.list().then(res => {
    //   this.lists = res.data.lists;
    // });
  },
  methods: {
    toEdit() {
      // 编程式导航 对应的是 router-link to 导航
      this.$router.push({ path: "/address/form" });
    }
  }
};
</script>


<style scoped>
@import "./address_base.css";
@import "./address.css";
</style>

