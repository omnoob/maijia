let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  subList: '/category/subList',
  rank: '/category/rank',
  searchList: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',

  cartAdd: '/cart/add',
  cartList: '/cart/list',
  cartUpdate: '/cart/update',
  cartReduce: '/cart/reduce',
  cartRemove: '/cart/remove',
  cartMrremove: '/cart/mrremove',
  
  addressList:'/address/list',
  addressAdd:'/address/add',
  addressRemove:'/address/remove',
  addressUpdate:'/address/update',
  addressSetDefault: '/address/setDefault'
}

// 开发环境和真实环境切换（手动）
// let host = ''
let host = 'http://rap2api.taobao.org/app/mock/7058'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}
export default url
