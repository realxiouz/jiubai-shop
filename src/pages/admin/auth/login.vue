<template>
  <div style="padding:70rpx;">
    <img src="/static/admin/logo-admin.png" class="box-center" style="width:400rpx;" alt="">
    <div class="input-wrap">
      <input type="text" v-model="username" placeholder="输入手机号">
    </div>
    <div class="input-wrap" style="margin: 68rpx 0 90rpx;">
      <input type="password" v-model="password" placeholder="输入密码">
    </div>
    <div class="btn bg-primary" @click="onLogin">登 录</div>
    <div class="text-right color-primary" style="margin-top: 40rpx;" @click="onForget">忘记密码</div>

  </div>
</template>

<script>

export default {
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onLogin() {
      if (!/^1\d{10}$/.test(this.username)) {
        this.$toast.error('填写正确的手机号码')
        return
      }
      if (!this.password) {
        this.$toast.error('还未填写密码')
        return
      }

      this.$post('/agentLogin', {
        username: this.username,
        password: this.password,
      }, { login: false })
        .then(r => {
          let {expires_time, token} = r.data
          this.$store.commit('user/setToken', token)
          this.$store.commit('user/setPhone', this.username)
          this.$go('/pages/admin/home', 'redirect')
        })
        .catch(e => {
          this.$toast(e.msg)
        })
    },
    onForget() {
      this.$go('/pages/admin/forget')
    },
  }
}
</script>

<style lang="less" scoped>
.input-wrap{
  padding: 32rpx 0;
  border-bottom: 1px solid #cccccc;
}

.btn{
  height: 90rpx;
  text-align: center;
  line-height: 90rpx;
  font-size: 15px;
  border-radius: 16rpx;
}
.box-center{
  display: block;
  margin: 0 auto;
}
</style>