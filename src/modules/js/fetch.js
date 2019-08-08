import axios from 'axios'


function fetch(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {      
      let status = res.data.status
      if (status === 200) {
        resolve(res)
      }
      if (status === 300) {
        location.href = 'login.html' // 假设状态码是300 就是未登录，就跳转到登陆页面
        resolve(res)
      }
      reject(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default fetch
