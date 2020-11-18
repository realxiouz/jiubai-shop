import {http} from '@/common/js/request'
import { Promise } from 'core-js'
export default {
  namespaced: true,
  state: {
    token: '',
    info: {
      name: '还未登录',
      avatar: 'https://newsirme-fresh.oss-cn-shenzhen.aliyuncs.com/backend/spu/20201103143638.png',
      // like_count: 0,
      // collect_count: 0,
      // comment_count: 0,
      // trace_count: 0,
      coupon: 0,
      balance: '0.00',
      is_soldier: 0,
      uid: '',
      credit: 0,
      tel: '',
      sex: 0,
      birthday:''
    },
    inviteCode: '',
    city: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setInfo(state, info) {
      state.info = info
    },
    setInviteCode(state, code) {
      state.inviteCode = code
    },
    setBirthday(state,birthday){
      state.info.birthday = birthday
    },
    setSex(state,sex){
      state.info.sex = sex
    },
    setCity(state, city) {
      state.city = city
    },
    setAvatar(state,avatar){
      state.info.avatar = avatar
    },
		setName(state,name){
		  state.info.name = name
		}
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