import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_transition.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'
import Swipe from 'components/Swipe.vue'
let {
  id
} = qs.parse(location.search.substr(1))

let detailTab = ['商品详情', '本店成交']

new Vue({
  el: '#app',
  data: {
    id,
    details: null,
    detailTab,
    tabIndex: 0,
    dealLists: null,
    bannerLists: null,
    showSku: 0,
    isShow: false,
    skuNum: 1,
    addCartMessage: false,
    cartIcon:false
  },
  created() {
    this.getDetails()
  },
  methods: {
    getDetails() {
      axios.get(url.details, {
        id
      }).then(res => {
        this.details = res.data.data
        this.bannerLists = []
        this.details.imgs.forEach(item => {
          this.bannerLists.push({
            clickUrl: '',
            img: item
          })
        })
      })
    },
    changeTab(index) {
      this.tabIndex = index
      if (index === 1) {
        this.getDeal()
      }
    },
    getDeal() {
      axios.get(url.deal, {
        id
      }).then(res => {
        this.dealLists = res.data.data.lists
      })
    },
    changeSku(index) {
      this.showSku = index
      this.popShow()
    },
    popShow() {
      this.isShow = true

    },
    popHide() {
      this.isShow = false
    },
    noMove(e, l) {
      e.preventDefault()

    },
    changeSkuNum(num) {
      if (this.skuNum === 1 && num === -1) {

      } else {
        this.skuNum = this.skuNum + num
      }
    },
    addCart() {
      axios.post(url.addCart, {
        "id": this.id,
        "number": this.skuNum
      }).then(res => {
        if (res.data.status === 200) {
          console.log('已加入购物车');
          
          this.isShow = false
          this.addCartMessage = true
          this.cartIcon = true
          setTimeout(()=>{
            this.addCartMessage = false
            console.log(this.addCartMessage);
            
          }, 1000)
        }
      })
    }
  },
  components: {
    Swipe
  },
  mixins: [mixin]
})
