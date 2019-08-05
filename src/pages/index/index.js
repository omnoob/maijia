import 'css/common.css'
import './css/index.css'

import Vue from 'vue'
import axios from 'axios'
// import url from 'js/api.js'
import url from '@/modules/js/api.js'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from '@/components/Foot.vue'
import Swipe from '@/components/Swipe.vue'

let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false, // false 表示可以加载，true表示不可以再往下加载了
    allLoaded: false, // 
    bannerLists: null
  },
  components: {
    Foot, // 此为ES6写法， 等于 Foot: Foot
    Swipe
  },
  created() {
    this.getLists(),
    this.getBanner()
  },
  methods: {
    getLists() {
      if (this.allLoaded === true) {
        return
      }
      // 发请求期间，禁止重复发请求
      this.loading = true
      // 发请求
      axios.get(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      }).then(res => {
        let curLists = res.data.lists
        // 判断所有数据是否加载完毕
        if (curLists.length < this.pageSize) {
          this.allLoaded = true
        }
        if (this.lists) {
          // 原列表不空，则将新请求到的数据添加到原列表后
          this.lists = this.lists.concat(curLists)
        } else {
          // 第一次请求数据
          this.lists = curLists
        }
        this.pageNum++
        // 请求结束，允许发请求
        this.loading = false
      })
    },
    getBanner() {
      axios.get(url.banner).then(res=>{
        this.bannerLists = res.data.lists
      })
    }
  }
})