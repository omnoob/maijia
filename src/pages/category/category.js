import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from '@/modules/js/api.js'
// import Foot from '@/components/Foot.vue'
import mixin from 'js/mixin.js'

new Vue({
  el: '#app',
  data: {
    topLists: null,
    // topIndex: -1 // 因为综合排行id为 -1 ，按道理综合排行也是第一个显示出来的，所以为 -1
    topIndex: 0,// 第二种方法是 使用 index 即 脚标 进行判断顺序，初始为0
    subData: null,
    rankData: null
  },
  created() {
    this.getTopList()
    this.getSubList(0) // 此处必须传递 index 的初始值 0 
  },
  methods: {
    getTopList() {
      axios.get(url.topList).then(res => {
        this.topLists = res.data.lists
      }).catch(res => {

      })
    },
    getSubList(index, id) {
      this.topIndex = index
      if (index === 0) {
        this.getRank()
      } else {
        console.log('index: ', index, 'id: ', id)
        axios.get(url.subList, {
          params: {
            'id': id
          }
        }).then(res => {
          this.subData = res.data.data
        })
      }
    },
    getRank() {
      axios.get(url.rank).then(res => {
        this.rankData = res.data.data
      })
    },
    getSearchList(list){
      location.href = `search.html?keyword=${list.name}&cate_id=${list.id}`
    }
  },
  // filters: {
  //   formatePrice(value) {
  //     return value.toFixed(2)
  //   }
  // },
  // components: {
  //   Foot
  // }
  mixins:[mixin]
})