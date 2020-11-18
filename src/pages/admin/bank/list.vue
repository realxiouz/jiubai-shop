<template>
  <div>
    <div v-if="!list.length" class="flex column align-center" style="padding-top:400rpx;">
      <img src="/static/admin/bank-empty.png" style="width:200rpx;height:200rpx" alt="">
      <div class="font14 c99">空空如也，啥也没有！</div>
    </div>

    <div class="bank-item" v-for="(i,inx) in list" :key="inx">
      <div>{{i.bankName}}</div>
      <div>{{i.cardTypeName}}</div>
      <div>{{i.bankNumber}}</div>
    </div>
    
    <bottom-bar style="height:90rpx;">
      <div class="bg-white color-primary text-center" style="line-height:90rpx;" @click="$go('/pages/admin/bank/bean')">添加银行卡</div>
    </bottom-bar>
    
  </div>
</template>

<script>
export default {
  name: "AdminBankList",
  onShow() {
    this.getData()
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    getData() {
      this.$showLoading()
      this.$post('/agentHome', {phone: '15912510617'})
      .then(r => {
        let {
          banks=[]
        } = r.data
        this.list = banks
      })
      .finally(_ => {
        this.$hideLoading()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bank-item{
  width: 690rpx;
  height: 230rpx;
  color: #fff;
  border-radius: 16rpx;
  margin: 30rpx auto 0;
  background: #25C3B7;
  padding: 40rpx 0 0 40rpx;
  color: #fff;
}
</style>