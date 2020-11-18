<template>
  <div>
    <div v-if="!list.length" class="flex column align-center" style="padding-top:400rpx;">
      <img src="/static/admin/bank-empty.png" style="width:200rpx;height:200rpx" alt="">
      <div class="font14 c99">空空如也，啥也没有！</div>
    </div>

    <div class="shop-item bg-white flex align-center" v-for="(i,inx) in list" :key="inx">
      <img class="ava" src="" alt="">
      <div class="left ">
        <div class="text-bold font14"></div>
        <div></div>
        <div></div>
      </div>
      <img class="right" src="/static/admin/right-w.png" alt="">
    </div>
    
    <bottom-bar style="height:90rpx;">
      <div class="bg-white color-primary text-center" style="line-height:90rpx;" @click="$go('/pages/admin/shop/bean')">新 增</div>
    </bottom-bar>
  </div>
</template>

<script>
export default {
  onShow() {
    this.getData()
  },
  data() {
    return {
      list: []
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
.shop-item{
  padding: 30rpx 20rpx 30rpx 30rpx;
  border-bottom: 1rpx solid #ccc;
  .ava{
    width: 110rpx;
    height: 110rpx;
    margin-right: 20rpx;
  }
  
  .right{
    width: 32rpx;
    height: 32rpx;
  }
}
</style>