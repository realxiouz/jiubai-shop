<template>
  <div>
    <picker :range="banks" @change="onBankChange">
      <div class="jb-box">
        <div>{{curInx<0?'银行卡类型':banks[curInx]}}</div>
        <div style="flex-grow:1;"></div>
        <img src="/static/admin/down.png" alt="">
      </div>
    </picker>
    <div class="jb-box font12">
      <input style="flex-grow:1;" v-model="userName" placeholder="输入持卡人姓名"/>
    </div>
    <div class="jb-box font12">
      <input style="flex-grow:1;" v-model="bankBranch" placeholder="请输入分行信息 省/市/区(县)/XX银行XX分行"/>
    </div>
    <div class="jb-box font12">
      <input style="flex-grow:1;" v-model="bankNumber" placeholder="请输入分行信息 省/市/区(县)/XX银行XX分行"/>
    </div>

    <bottom-bar style="height:90rpx;">
      <div class="bg-white bg-primary text-center" style="line-height:90rpx;" @click="onAdd">确 认</div>
    </bottom-bar>
  </div>
</template>

<script>
const BANKS = ['中国银行', '广发银行']
export default {
  data() {
    return {
      banks: BANKS,
      curInx: -1,
      bankBranch: '',
      bankNumber: '',
      userName: '',
    }
  },
  methods: {
    onBankChange(e) {
      console.log(e.detail.value)
      this.curInx = e.detail.value
    },
    onAdd() {
      let d = {
        bankName: this.banks[this.curInx],
        bankCardImg: 'https://image.dayouqiantu.cn/news.png',
        bankNumber: this.bankNumber,
        bankBranch: this.bankBranch,
        userName: this.userName,
        cardTypeName: '储蓄卡'
      }
      this.$post('/bindBankCard', d)
        .then(r => {
          uni.navigateBack({
            delta: 1
          })
        })
    }
  }
}
</script>

<style lang="less">
.jb-box{
  width: 690rpx;
  height: 90rpx;
  border-radius: 16rpx;
  background: #fff;
  display: flex;
  align-items: center;
  margin: 20rpx auto;
  padding: 0 30rpx;
  box-sizing: border-box;
  >img{
    width: 32rpx;
    height: 32rpx;
  }
}
</style>