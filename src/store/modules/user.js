import {http} from '@/common/js/request'
export default {
  namespaced: true,
  state: {
    token: '',
    info: {
      name: '还未登录',
      avatar: 'https://newsirme-fresh.oss-cn-shenzhen.aliyuncs.com/backend/spu/20201103143638.png',
    },
    phone: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setInfo(state, info) {
      state.info = info
    },
    setPhone(state, phone) {
      state.phone = phone
    },
  },
  actions:{
    updateInfo({commit}) {
      return new Promise((resolve, reject) => {
        http('/user/index', null, 'get')
          .then(r => {
            commit('setInfo', r.data)
            commit('setInviteCode', r.data.inviteCode)
            console.log('设置code---')
            console.log(r.data.inviteCode)
            resolve('ok')
          })
          .catch(e => {
            reject(e)
          })
      })
    }
  }
}