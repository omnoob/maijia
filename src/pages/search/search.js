import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from '@/modules/js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'

import Velocity from 'velocity-animate'
let { keyword, id } = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    keyword,
    id,
    searchList: null,
    isShow: false,
    timer: null
  },
  created() {
    this.getSearthList();
    this.goToTop();

  },
  methods: {
    getSearthList() {
      axios
        .get(url.searchList, { keyword, id })
        .then(res => {
          this.searchList = res.data.lists
        })
    },
    move() {
      if (document.documentElement.scrollTop > 100) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    goToTop() {
      // document.documentElement.scrollTop = 0
      // Velocity(document.body, {scrollTop: 0}, { duration: 500 })
      this.timer = setInterval(() => {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(this.timer)
        }
      }, 30)
    },
  },
  mixins: [mixin]
})