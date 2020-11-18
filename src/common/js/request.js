import { BASE_URL } from './const'
import store from '@/store'

function getUrl(url) {
  if (url.startsWith('http')) {
    return url
  }

  return url.startsWith('/') ? `${BASE_URL}${url}` : `${BASE_URL}/${url}`
}

export const http = (url, data, method = 'post', showErrToast = true) => {
  return new Promise((resolve, reject) => {
    let header = {
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjE0LCJzY29wZSI6OCwiZXhwIjoxNjkyMDk5NTY3LCJpYXQiOjE2MDU2OTk1Njd9.OXjbtR07lzQ4E90-q0aDSFTc2FOcF8IGWQrs_KtY-es'
    }
    let token = store.state.user.token
    token && (header.authorization = token)
    uni
      .request({
        url: getUrl(url),
        data,
        method: method.toUpperCase(),
        header,
      })
      .then((r) => {
        let [err, data] = r
        if (err) {
          reject(err)
          return
        }
        let status = data.statusCode
        switch (status) {
          case 200:
            if (data.data.status === 200) {
              resolve(data.data)
            } else {
              reject(data.data)
            }
            break
          case 500:
            uni.showModal({
              title: '温馨提示',
              content: '对不起,服务器离家出走了,稍等片刻~~~'
            })
            reject(new Error(`${getUrl(url)}`))
            break
          case 400:
            if (data.data.code == 4001) {
              uni.showModal({
                title: '温馨提示',
                content: '系统检测您还未登录,无法完成此操作!',
                confirmText: '去登录',
                success: r => {
                  if(r.confirm){
                    uni.navigateTo({
                      url: '/pages/auth/index'
                    })
                  }
                }
              })
            } else {
              uni.showToast({
                title: `${data.data.data}`,
                icon: 'none'
              })
            }
            reject(new Error(`${getUrl(url)}`))
            break
          default:
            uni.showToast({
              title: `${status||'unknow status'}`,
              icon: 'none',
            })
            
            reject(new Error('不是规范的响应'))
        }
      })
  })
}
